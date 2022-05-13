const me = {
  siteName: 'Test Links',
  siteName: '/1.jpg',
  description:
    '<p>Lorem ipsum</p>' + '<p>Lorem ipsum</p>' + '<p>Lorem ipsum</p>',
};

export default function handler(req, res) {
  res.status(200).json(me);
}
