export default async function handler(req, res) {
  const data = await fetch('https://www.youtube.com/c/Freecodecamp/videos');

  const result = [];
  res.status(200).json(result);
}
