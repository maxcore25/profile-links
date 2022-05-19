const links = [
  {
    _id: 'link1',
    icon: {
      path: 'https://redlinks.space/icons/telegram.svg',
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
      path: 'https://redlinks.space/icons/intensives.svg',
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
      path: 'https://redlinks.space/icons/vs-code.svg',
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
      path: 'https://redlinks.space/icons/webstorm.svg',
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
      path: 'https://redlinks.space/icons/youtube.svg',
      width: 84,
    },
    gradient: {
      from: '#ff8d42',
      to: '#ff8257',
    },
    link: '',
    title: 'Smth',
  },
  {
    _id: 'link11',
    icon: {
      path: 'https://redlinks.space/icons/airbnb.svg',
      width: 75,
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
