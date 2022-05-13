const links = [
  {
    _id: 'link1',
    icon: {
      path: '/icons/',
      width: 76,
    },
    gradient: {
      from: '#13e780',
      to: '#00bbd5',
    },
    link: '',
    title: 'Smth',
  },
  {
    _id: 'link2',
    icon: {
      path: '/icons/',
      width: 115,
    },
    gradient: {
      from: '#fc5dff',
      to: '#5dfdff',
    },
    link: '',
    title: 'Smth',
    isImportant: true,
  },
  {
    _id: 'link8',
    icon: {
      path: '/icons/',
      width: 75,
    },
    gradient: {
      from: '#ff385c',
      to: '#dd2e63',
    },
    link: '',
    title: 'Smth',
  },
  {
    _id: 'link9',
    icon: {
      path: '/icons/',
      width: 90,
    },
    gradient: {
      from: '#f6d365',
      to: '#fda085',
    },
    link: '',
    title: 'Smth',
  },
  {
    _id: 'link10',
    icon: {
      path: '/icons/',
      width: 160,
    },
    gradient: {
      from: '#ff8d42',
      to: '#ff8257',
    },
    link: '',
    title: 'Smth',
  },
];

export default function handler(req, res) {
  res.status(200).json(links);
}
