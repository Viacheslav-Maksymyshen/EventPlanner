const eventsData = [
  {
    id: 1,
    title: "Leadership Conference",
    date: "2023-08-01",
    time: "15:00",
    location: "Kyiv",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    image: require("../components/img/Business.jpg"),
    category: "Business",
    priority: "High",
  },
  {
    id: 2,
    title: "Music Concert 'Melodies in the Sky'",
    date: "2023-08-02",
    time: "19:30",
    location: "New York City",
    description:
      "Join us for a magical evening of music as we present 'Melodies in the Sky', a mesmerizing music concert featuring renowned artists.",
    image: require("../components/img/Music.jpg"),
    category: "Music",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Business Seminar 'Strategies for Success'",
    date: "2023-08-01",
    time: "10:00",
    location: "London",
    description:
      "Enhance your business skills by attending our seminar 'Strategies for Success', where experts will share valuable insights and strategies.",
    image: require("../components/img/Business.jpg"),
    category: "Business",
    priority: "High",
  },
  {
    id: 4,
    title: "Conference 'Innovations in Technology'",
    date: "2023-08-04",
    time: "09:30",
    location: "San Francisco",
    description:
      "Join tech enthusiasts at our conference 'Innovations in Technology' to explore the latest trends and groundbreaking innovations.",
    image: require("../components/img/Conference.jpg"),
    category: "Conference",
    priority: "Medium",
  },
  {
    id: 5,
    title: "Art Workshop 'Brushes and Canvas'",
    date: "2023-08-05",
    time: "14:00",
    location: "Paris",
    description:
      "Unleash your creativity at our art workshop 'Brushes and Canvas'. Explore various painting techniques and create your masterpiece.",
    image: require("../components/img/Workshop.jpg"),
    category: "Workshop",
    priority: "Low",
  },
  {
    id: 6,
    title: "Summer Beach Party",
    date: "2023-08-06",
    time: "16:00",
    location: "Miami",
    description:
      "Join us for an unforgettable Summer Beach Party! Dance to the rhythm of the waves and enjoy a night of music, food, and fun.",
    image: require("../components/img/Party.jpg"),
    category: "Party",
    priority: "Medium",
  },
  {
    id: 7,
    title: "Football Match: Local Derby",
    date: "2023-08-07",
    time: "20:00",
    location: "Manchester",
    description:
      "Witness the intensity of a local football derby as two rival teams clash on the field. Get ready for a thrilling match of skill and passion.",
    image: require("../components/img/Sport.jpg"),
    category: "Sport",
    priority: "High",
  },
  {
    id: 8,
    title: "Tech Startup Pitch Night",
    date: "2023-08-08",
    time: "18:30",
    location: "Silicon Valley",
    description:
      "Join us for an evening of innovation as tech startups pitch their groundbreaking ideas to investors and industry experts.",
    image: require("../components/img/Business.jpg"),
    category: "Business",
    priority: "Medium",
  },
  {
    id: 9,
    title: "Conference: Future of Technology",
    date: "2023-08-09",
    time: "09:00",
    location: "San Francisco",
    description:
      "Explore the latest trends and innovations in the tech world at our conference 'Future of Technology'. Engage with industry leaders and experts.",
    image: require("../components/img/Conference.jpg"),
    category: "Conference",
    priority: "High",
  },
  {
    id: 10,
    title: "Live Jazz Night",
    date: "2023-08-10",
    time: "19:30",
    location: "New Orleans",
    description:
      "Immerse yourself in the world of jazz music at our Live Jazz Night. Enjoy soulful melodies, exceptional performances, and great ambiance.",
    image: require("../components/img/Music.jpg"),
    category: "Music",
    priority: "Medium",
  },
  {
    id: 11,
    title: "Fitness Workshop: Mind and Body",
    date: "2023-08-11",
    time: "15:00",
    location: "Los Angeles",
    description:
      "Join our fitness workshop to achieve holistic wellness. Learn techniques to balance your mind and body for a healthier lifestyle.",
    image: require("../components/img/Workshop_2.jpg"),
    category: "Workshop",
    priority: "Low",
  },
  {
    id: 12,
    title: "Business Networking Luncheon",
    date: "2023-08-12",
    time: "12:30",
    location: "London",
    description:
      "Expand your professional network at our Business Networking Luncheon. Connect with like-minded individuals and explore collaboration opportunities.",
    image: require("../components/img/Business.jpg"),
    category: "Business",
    priority: "Medium",
  },
  {
    id: 13,
    title: "Art Exhibition: Colors of Life",
    date: "2023-08-13",
    time: "10:00",
    location: "Paris",
    description:
      "Experience the vibrant and diverse world of art at our exhibition 'Colors of Life'. Witness stunning artworks that capture the essence of life.",
    image: require("../components/img/Art.jpg"),
    category: "Art",
    priority: "High",
  },
  {
    id: 14,
    title: "Music Festival: Harmonic Beats",
    date: "2023-08-14",
    time: "14:00",
    location: "Berlin",
    description:
      "Join us for an unforgettable musical journey at the 'Harmonic Beats' Music Festival. Dance to the rhythm of international artists and live performances.",
    image: require("../components/img/Music.jpg"),
    category: "Music",
    priority: "High",
  },
  {
    id: 15,
    title: "Party Night: Neon Glow",
    date: "2023-08-15",
    time: "20:00",
    location: "Miami",
    description:
      "Get ready to light up the night at our 'Neon Glow' Party. Put on your brightest attire and dance the night away under neon lights.",
    image: require("../components/img/Party.jpg"),
    category: "Party",
    priority: "Medium",
  },
  {
    id: 16,
    title: "Sports Event: Soccer Showdown",
    date: "2023-08-16",
    time: "17:00",
    location: "Madrid",
    description:
      "Witness an exhilarating soccer showdown between top teams at our Sports Event. Feel the adrenaline as athletes compete for victory.",
    image: require("../components/img/Sport.jpg"),
    category: "Sport",
    priority: "High",
  },
  {
    id: 21,
    title: "Business Conference: Innovate2023",
    date: "2023-08-21",
    time: "09:00",
    location: "New York",
    description:
      "Join industry leaders and innovators at the 'Innovate2023' Business Conference. Discover the latest trends and strategies for success.",
    image: require("../components/img/Business.jpg"),
    category: "Business",
    priority: "High",
  },
  {
    id: 22,
    title: "Workshop: Creative Writing Masterclass",
    date: "2023-08-22",
    time: "15:00",
    location: "London",
    description:
      "Enhance your writing skills at our 'Creative Writing Masterclass' Workshop. Learn from experienced authors and create compelling stories.",
    image: require("../components/img/Workshop.jpg"),
    category: "Workshop",
    priority: "Medium",
  },
  {
    id: 23,
    title: "Art Exhibition: Abstract Expressions",
    date: "2023-08-23",
    time: "10:00",
    location: "Barcelona",
    description:
      "Explore the world of abstract art at the 'Abstract Expressions' Exhibition. Immerse yourself in a realm of colors, shapes, and emotions.",
    image: require("../components/img/Art.jpg"),
    category: "Art",
    priority: "Medium",
  },
  {
    id: 24,
    title: "Music Concert: Symphony of Strings",
    date: "2023-08-24",
    time: "19:30",
    location: "Vienna",
    description:
      "Be captivated by the 'Symphony of Strings' Music Concert. Experience the elegance and harmony of classical compositions.",
    image: require("../components/img/Music.jpg"),
    category: "Music",
    priority: "High",
  },
  {
    id: 31,
    title: "Sport Event: Marathon Challenge",
    date: "2023-08-31",
    time: "08:00",
    location: "Los Angeles",
    description:
      "Participate in the 'Marathon Challenge' Sport Event. Push your limits and race through the city streets in this exciting competition.",
    image: require("../components/img/Sport.jpg"),
    category: "Sport",
    priority: "High",
  },
  {
    id: 32,
    title: "Party Night: Neon Glow Party",
    date: "2023-09-01",
    time: "21:00",
    location: "Miami",
    description:
      "Get ready to shine at the 'Neon Glow Party' Night. Dance the night away under neon lights and electrifying beats.",
    image: require("../components/img/Sport.jpg"),
    category: "Sport",
    priority: "Medium",
  },
  {
    id: 33,
    title: "Art Workshop: Watercolor Techniques",
    date: "2023-09-02",
    time: "14:00",
    location: "Paris",
    description:
      "Unleash your creativity at the 'Watercolor Techniques' Art Workshop. Learn the art of blending colors and creating beautiful paintings.",
    image: require("../components/img/Art.jpg"),
    category: "Art",
    priority: "Medium",
  },
  {
    id: 34,
    title: "Business Summit: Future Trends",
    date: "2023-09-03",
    time: "10:00",
    location: "Tokyo",
    description:
      "Gain insights into future trends at the 'Future Trends' Business Summit. Discover the technologies and strategies shaping industries.",
    image: require("../components/img/Business.jpg"),
    category: "Business",
    priority: "High",
  },
];

export default eventsData;
