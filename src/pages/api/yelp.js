// Yelp API endpoint
export default async function handler(req, res) {
  const { search, location } = req.query;
  const response = await fetch(
    `https://api.yelp.com/v3/businesses/search?term=${search}&location=${location}&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  res.status(200).json(data);
}
