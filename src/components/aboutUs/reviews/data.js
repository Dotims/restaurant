import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Julia Nowak',
    rating: [
      <FaStar key={1} />,
      <FaStar key={2} />,
      <FaStar key={3} />,
      <FaStar key={4} />,
      <FaStar key={5} />,
    ],
    image:
      'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    text: 'Restauracja ta wyróżnia się przepysznymi daniami kuchni włoskiej, które są tu przygotowywane w sposób autentyczny i smaczny. Dodatkowo, miła atmosfera i obsługa sprawiają, że zawsze chętnie tu wracam.',
  },
  {
    id: 2,
    name: 'Kacper Kowalski',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    text: 'Kiedy chcę zjeść coś pysznego i odżywczego, zawsze wybieram tę restaurację. Ich menu oferuje szeroki wybór dań wegetariańskich, które są przygotowywane ze świeżych i zdrowych składników. Polecam każdemu, kto ceni sobie zdrowe jedzenie.',
  },
  {
    id: 3,
    name: 'Alicja Lewandowska',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    text: 'Uwielbiam tę restaurację za jej wyjątkowy klimat. Czuje się tu jak w prawdziwej francuskiej kawiarni, a dania są przepyszne i estetycznie podane. Gorąco polecam miłośnikom kuchni francuskiej i romantycznych spotkań.',
  },
  {
    id: 4,
    name: 'Bartosz Majewski',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.2.1682525672.1678217274&semt=sph',
    text: 'Ta restauracja to raj dla miłośników mięsa. Ich dania mięsne są przepyszne i przygotowywane z najlepszej jakości składników. Poza tym, obsługa jest bardzo profesjonalna i dba o każdy szczegół. ',
  },
  {
    id: 5,
    name: 'Wiktoria Wiśniewska',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'To moje ulubione miejsce na śniadanie. Ich jajecznice są naprawdę pyszne i świeże, a kawa aromatyczna i gorąca. Dodatkowo, wystrój wnętrza sprawia, że człowiek od razu się tu relaksuje i odpoczywa. ',
  },
  {
    id: 6,
    name: 'Piotr Jankowski',
    rating: [<FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'Ta restauracja oferuje jedne z najlepszych pizz, jakie jadłem w życiu. Ciasto jest cienkie i chrupiące, a składniki na wierzchu świeże i aromatyczne. Dodatkowo, ceny są bardzo przystępne i obsługa miła i pomocna.',
  },
  {
    id: 7,
    name: 'Magdalena Kaczmarek',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://images.pexels.com/photos/1657501/pexels-photo-1657501.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    text: 'To idealne miejsce na kolację z przyjaciółmi. W menu znajduje się szeroki wybór dań z różnych kuchni świata, więc każdy znajdzie tu coś dla siebie. W dodatku, obsługa jest bardzo przyjazna i dba o to, aby każdy czuł się tu komfortowo.',
  },
  {
    id: 8,
    name: 'Kornelia Wójcik',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://cdn.stocksnap.io/img-thumbs/280h/woman-model_IBNB839D96.jpg',
    text: 'Ta restauracja to raj dla miłośników kuchni orientalnej. Ich dania tajskie są przepyszne i aromatyczne, a w menu znajduje się wiele innych smaków Azji. Gorąco polecam miłośnikom ostrej i egzotycznej kuchni.',
  },
  {
    id: 9,
    name: 'Tomasz Pawlak',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg',
    text: 'Ta restauracja oferuje wyśmienite dania kuchni polskiej w nowoczesnym wydaniu. Smaki są autentyczne, ale podane w sposób nowoczesny i atrakcyjny dla oka. W dodatku, obsługa jest bardzo uprzejma i pomocna, co tylko dodaje uroku temu miejscu.',
  },
  {
    id: 10,
    name: 'Karolina Dąbrowska',
    rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    image:
      'https://img.freepik.com/free-photo/thoughtful-adorable-blonde-forty-years-old-pleased-woman-keeps-arms-folded-thinks-about-something-looks-away-wears-spectacles-knitted-sweater_273609-46841.jpg?size=626&ext=jpg&ga=GA1.1.1682525672.1678217274&semt=sph',
    text: 'Ta restauracja ma wspaniałą atmosferę i bardzo przytulny wystrój. Jedzenie jest przepyszne i przygotowywane ze świeżych i lokalnych składników. Jest to idealne miejsce na romantyczną kolację lub spotkanie z przyjaciółmi.',
  },
];

export default reviews;
