import axios from 'axios';
import "regenerator-runtime/runtime.js";

export const generateQuote = async (req, res, next) => {
  const quoteApi = 'https://quotes.rest/qod';
  const quote = req.app.get('quote');

  if (!quote) {
    const quoteRequest = await axios.get(quoteApi);
    const quoteResponse = {
      quote: quoteRequest.data.contents.quotes[0].quote,
      author: quoteRequest.data.contents.quotes[0].author
    }

    req.app.set('quote', quoteResponse);
  }
  next();
}