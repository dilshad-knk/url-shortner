import { nanoid } from 'nanoid';
import Url from '../models/url.js';

const createShortUrl = async (originalUrl) => {
  const shortCode = nanoid(6);
  const newUrl = new Url({ originalUrl, shortCode });
  await newUrl.save();
  return newUrl;
};

const getOriginalUrl = async (shortCode) => {
  const url = await Url.findOne({ shortCode });
  if (url) {
    url.visitCount += 1;
    await url.save();
    return url.originalUrl;
  }
  return null;
};

export {
    createShortUrl,
    getOriginalUrl
}
