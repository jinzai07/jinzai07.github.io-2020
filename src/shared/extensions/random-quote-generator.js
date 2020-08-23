import axios from 'axios';

export const generateQuote = async (req, res, next) => {
  const quoteApi = 'https://quotes.rest/qod';
  const quote = req.app.get('quote');

  if (!quote) {
    // const quoteRequest = await axios.get(quoteApi);
    // const quoteResponse = {
    //   quote: quoteRequest.data.contents.quotes[0].quote,
    //   author: quoteRequest.data.contents.quotes[0].author
    // }

    const quoteResponse = {
      quote: 'I think it is often easier to make progress on mega-ambitious dreams. Since no one else is crazy enough to do it, you have little competition. In fact, there are so few people this crazy that I feel like I know them all by first name.',
      author: 'Larry Page'
    }
    req.app.set('quote', quoteResponse);
  }
  next();
}