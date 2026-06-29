# Notion Form Integration

Mada Overseas has two public forms:

- `contact.html` -> `/api/contact` -> `netlify/functions/contact.js`
- `enquiry.html` -> `/api/enquiry` -> `netlify/functions/enquiry.js`

Both forms submit through Netlify Functions. The browser never calls Notion directly and no Notion token, database ID, or MCP detail is exposed in frontend HTML, CSS, or JS.

## Database Name

Recommended setup:

- `Mada Overseas - Contact Leads`
- `Mada Overseas - Enquiry Leads`

Alternative setup:

- One shared `Mada Overseas - Website Leads` database for both forms.

## Required Database Fields

Create these properties in each connected Notion database:

| Field | Recommended Notion Type | Notes |
|---|---|---|
| Name | Title | Required |
| Email | Email | Required |
| Phone | Phone Number | Required on enquiry, optional on contact |
| Company | Rich Text | Optional |
| Country | Rich Text | Required on enquiry, optional on contact |
| Product / Service Interest | Rich Text | Product for enquiry; subject for contact |
| Message | Rich Text | Required |
| Source Page | Rich Text | Captured by frontend |
| Form Type | Select | `Contact` or `Enquiry` |
| Status | Select | Defaults to `New` |
| Created Time | Date | Added by the serverless function |

Optional fields supported by the code:

| Field | Recommended Notion Type |
|---|---|
| WhatsApp | Phone Number |
| Alt Email | Email |
| Subject | Rich Text |
| Quantity | Rich Text |

## Environment Variables

Set these in Netlify under **Site configuration -> Environment variables**.

```bash
NOTION_TOKEN=secret_your_notion_integration_token
NOTION_ENQUIRY_DB_ID=your_enquiry_database_id
NOTION_CONTACT_DB_ID=your_contact_database_id
SITE_URL=https://www.madaoverseas.com
```

If both forms should write to one database, use either:

```bash
NOTION_DATABASE_ID=your_shared_leads_database_id
```

or:

```bash
NOTION_DATA_SOURCE_ID=your_shared_notion_data_source_id
```

The function resolution order is:

- Enquiry: `NOTION_ENQUIRY_DB_ID`, then `NOTION_DATABASE_ID`, then `NOTION_DATA_SOURCE_ID`
- Contact: `NOTION_CONTACT_DB_ID`, then `NOTION_DATABASE_ID`, then `NOTION_DATA_SOURCE_ID`

## Validation Rules

Shared server-side rules:

- Only `POST` and `OPTIONS` are allowed.
- Request body is limited to 12 KB.
- `name`, `email`, and `message` are required.
- Email format is validated server-side.
- Text fields are trimmed, whitespace-normalized, stripped of `<` and `>`, and length-limited.
- Honeypot field `website` silently returns success without writing to Notion.
- Missing Notion env vars return a configuration error instead of attempting an API call.

Enquiry-specific required fields:

- `phone`
- `country`
- `product`
- `subject`

Contact-specific required fields:

- `subject`

## Spam and Duplicate Submission Protection

- Both forms include a hidden `website` honeypot field.
- Submit buttons are disabled while sending.
- After a successful submission, the button remains disabled and changes to `Sent`.
- The server does not trust frontend validation; it validates every submission again.

## Testing Process

1. Confirm Netlify environment variables are set.
2. Submit `contact.html` with valid data.
3. Confirm a Notion lead appears with `Form Type = Contact` and `Status = New`.
4. Submit `enquiry.html` with valid data.
5. Confirm a Notion lead appears with `Form Type = Enquiry`, product interest, source page, and created time.
6. Submit invalid email values and confirm the form is rejected.
7. Fill the hidden `website` field in dev tools and confirm the request returns success without a Notion row.
8. Submit twice quickly and confirm only one frontend submission is sent.

## Remaining Manual Steps

- Add the real Notion token and database IDs only in Netlify and local `.env`.
- Share the Notion database(s) with the internal integration.
- Confirm property names match the table exactly, including `Product / Service Interest`.
- Run one production test after deployment because local static serving cannot write to Notion without Netlify Functions.
