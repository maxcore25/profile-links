const getString = (initialText, start, end) => {
  const from = initialText.indexOf(start);
  const to = initialText.indexOf(end);

  return initialText.substring(from, to).replace(start, '');
};

export default async function handler(req, res) {
  const data = await fetch('https://www.youtube.com/c/Freecodecamp/videos');
  const result = await data.text();

  const title = getString(
    result,
    '"title":{"runs":[{"text":"',
    '"}],"accessibility":'
  );

  const thumbnail = getString(result, '{"thumbnails":[{"url":"', '","width"');

  //   const result = [];
  res.status(200).json(title);
}
