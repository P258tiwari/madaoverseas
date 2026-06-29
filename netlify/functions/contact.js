// Netlify serverless function - handles contact form to Notion.

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_PARENT = getNotionParent();

const ALLOWED_ORIGINS = [
  process.env.SITE_URL,
  'http://localhost:8888',
  'http://127.0.0.1:8888',
].filter(Boolean);

const MAX_BODY_BYTES = 12 * 1024;
const LIMITS = {
  name: 120,
  email: 254,
  phone: 40,
  company: 140,
  country: 80,
  subject: 180,
  message: 2000,
  sourcePage: 220,
};

function corsHeaders(event) {
  const origin = event.headers.origin || event.headers.Origin || '';
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers.Vary = 'Origin';
  }

  return headers;
}

function sanitize(value, max = 2000) {
  if (typeof value !== 'string') return '';
  return value.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, max);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function json(statusCode, headers, body) {
  return { statusCode, headers, body: JSON.stringify(body) };
}

function richText(content) {
  return { rich_text: [{ text: { content } }] };
}

function getNotionParent() {
  if (process.env.NOTION_CONTACT_DB_ID) return { database_id: process.env.NOTION_CONTACT_DB_ID };
  if (process.env.NOTION_DATABASE_ID) return { database_id: process.env.NOTION_DATABASE_ID };
  if (process.env.NOTION_DATA_SOURCE_ID) return { data_source_id: process.env.NOTION_DATA_SOURCE_ID };
  return null;
}

exports.handler = async function (event) {
  const headers = corsHeaders(event);

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return json(405, headers, { error: 'Method not allowed' });
  }

  if (!NOTION_TOKEN || !NOTION_PARENT) {
    console.error('Contact form is missing required Notion environment variables.');
    return json(500, headers, { error: 'Form service is not configured' });
  }

  if (Buffer.byteLength(event.body || '', 'utf8') > MAX_BODY_BYTES) {
    return json(413, headers, { error: 'Request body too large' });
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return json(400, headers, { error: 'Invalid JSON' });
  }

  if (data.website) {
    return json(200, headers, { status: 'success' });
  }

  const name = sanitize(data.name, LIMITS.name);
  const email = sanitize(data.email, LIMITS.email).toLowerCase();
  const phone = sanitize(data.phone || '', LIMITS.phone);
  const whatsapp = sanitize(data.whatsapp || '', LIMITS.phone);
  const company = sanitize(data.company || '', LIMITS.company);
  const country = sanitize(data.country || '', LIMITS.country);
  const subject = sanitize(data.subject, LIMITS.subject);
  const message = sanitize(data.message, LIMITS.message);
  const sourcePage = sanitize(data.sourcePage || '/contact.html', LIMITS.sourcePage);

  if (!name || !email || !subject || !message) {
    return json(400, headers, { error: 'Missing required fields' });
  }

  if (!isValidEmail(email)) {
    return json(400, headers, { error: 'Invalid email address' });
  }

  const properties = {
    Name: { title: [{ text: { content: name } }] },
    Email: { email },
    Subject: richText(subject),
    Message: richText(message),
    'Submitted At': { date: { start: new Date().toISOString() } },
  };

  if (phone) properties.Phone = { phone_number: phone };
  if (whatsapp) properties.WhatsApp = { phone_number: whatsapp };

  const payload = { parent: NOTION_PARENT, properties };

  try {
    const res = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error('Notion API error while saving contact form:', res.status);
      return json(502, headers, { error: 'Failed to save message' });
    }

    return json(200, headers, { status: 'success' });
  } catch (err) {
    console.error('Contact form network error:', err.message);
    return json(502, headers, { error: 'Network error' });
  }
};
