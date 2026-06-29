// VPS API server — wraps Netlify function handlers for Express
require('dotenv').config();
const express = require('express');
const { handler: contactHandler } = require('./netlify/functions/contact');
const { handler: enquiryHandler } = require('./netlify/functions/enquiry');

const app = express();
app.use(express.json({ limit: '12kb' }));

function toEvent(req) {
  return {
    httpMethod: req.method,
    headers: req.headers,
    body: JSON.stringify(req.body),
  };
}

async function relay(handler, req, res) {
  const result = await handler(toEvent(req));
  res.status(result.statusCode).set(result.headers).send(result.body);
}

app.all('/api/contact',  (req, res) => relay(contactHandler,  req, res));
app.all('/api/enquiry',  (req, res) => relay(enquiryHandler,  req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API listening on :${PORT}`));
