const getString = (initialText, start, end) => {
  const from = initialText.indexOf(start);
  const to = initialText.indexOf(end);

  return initialText.substring(from, to).replace(start, '');
};

const parseFirstVideo = async name => {
  const data = await fetch('https://www.youtube.com/c/Freecodecamp/videos');
  const result = await data.text();

  const title = getString(
    result,
    '"title":{"runs":[{"text":"',
    '"}],"accessibility":'
  );

  const videId = getString(
    result,
    '"gridVideoRenderer":{"videoId":"',
    '","thumbnail":'
  );

  const thumbnail = getString(result, '{"thumbnails":[{"url":"', '","width"');

  return { title, videId, thumbnail };
};

export default async function handler(req, res) {
  parseFirstVideo();

  //   const result = [];
  res.status(200).json();
}
