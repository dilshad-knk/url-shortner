import { createShortUrl, getOriginalUrl } from '../services/urlService.js';
import Url from '../models/url.js'; // Import the Url model

const BASE_URL = 'http://localhost:3000';

const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: 'originalUrl is required' });
  }

  try {
    
    const existing = await Url.findOne({ originalUrl });
    if (existing) {
      return res.status(200).json({
        originalUrl: existing.originalUrl,
        shortUrl: `${BASE_URL}/${existing.shortCode}`
      });
    }

    const url = await createShortUrl(originalUrl);
    res.status(201).json({
      originalUrl: url.originalUrl,
      shortUrl: `${BASE_URL}/${url.shortCode}`
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const redirectToOriginal = async (req, res) => {
  const { shortCode } = req.params;

  try {
    const originalUrl = await getOriginalUrl(shortCode);
    if (originalUrl) {
      return res.redirect(originalUrl);
    } else {
      return res.status(404).json({ error: 'Short URL not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { shortenUrl, redirectToOriginal };
