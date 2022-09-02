const releaseList = [
  {
    name: "Eminem",
    img: "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
    song: "Lose youself",
    link: "https://open.spotify.com/track/0s6Yxg9h7eW4M13rDq2N7Z?si=e595a2e7f1ec4acd",
  },
  {
    name: "Neffex",
    img: "https://i.scdn.co/image/ab6761610000e5eb3a7d849b89d6ba9f5bd81639",
    song: "Destiny",
    link: "https://open.spotify.com/track/3r6gzwL520UUeq1LNTvlzt?si=b1be2962e5a64727",
  },
  {
    name: "Travis Scott",
    img: "https://i.scdn.co/image/ab6761610000e5ebe707b87e3f65997f6c09bfff",
    song: "No bystanders",
    link: "https://open.spotify.com/track/6OaVWaGfhXn70ZJfdVcabn?si=8d757dc01d294b04",
  },
  {
    name: "L'One",
    img: "https://i.scdn.co/image/ab67616d0000b2739f006972d922ec3181bb586d",
    song: "Медленно",
    link: "https://open.spotify.com/track/4s57mclkfBhe7I7N2DV9IZ?si=b428fb0383184325",
  },
];
const newslist = [
  {
    id: 1,
    singer: "Eminem",
    slang: "eminem",
    title: "Eminem's next move is Tokio",
    main: "Eminem posted on instagram that he will be tokio fot next 15 days",
    img: "https://i.scdn.co/image/ab67616d0000b273c08d5fa5c0f1a834acef5100",
    date: "01.09.2022",
    views: 707,
  },
  {
    id: 2,
    singer: "L'One",
    slang: "lone",
    title: "L'One will release a new album Alpha this summer",
    main: "This is a bright and pushy presentation of meaningful texts with humming beats. The main track of this EP, perhaps, was the eponymous track Alpha on which the artist shot a really good video akin to a short film",
    img: "https://i.scdn.co/image/ab67616d00001e022af4d3e4b217bafc2a2874d0",
    date: "01.09.2022",
    views: 707,
  },
  {
    id: 3,
    title: "L'One will release a new album Alpha this summer",
    slang: "lone",
    main: "This is a bright and pushy presentation of meaningful texts with humming beats. The main track of this EP, perhaps, was the eponymous track Alpha on which the artist shot a really good video akin to a short film",
    img: "https://i.scdn.co/image/ab67616d00001e022af4d3e4b217bafc2a2874d0",
    date: "01.09.2022",
    views: 707,
  },
  {
    id: 4,
    title: "L'One will release a new album Alpha this summer",
    main: "This is a bright and pushy presentation of meaningful texts with humming beats. The main track of this EP, perhaps, was the eponymous track Alpha on which the artist shot a really good video akin to a short film",
    img: "https://i.scdn.co/image/ab67616d00001e022af4d3e4b217bafc2a2874d0",
    date: "01.09.2022",
    views: 707,
  },
  {
    id: 5,
    title: "L'One will release a new album Alpha this summer",
    main: "This is a bright and pushy presentation of meaningful texts with humming beats. The main track of this EP, perhaps, was the eponymous track Alpha on which the artist shot a really good video akin to a short film",
    img: "https://i.scdn.co/image/ab67616d00001e022af4d3e4b217bafc2a2874d0",
    date: "01.09.2022",
    views: 707,
  },
  {
    id: 6,
    title: "L'One will release a new album Alpha this summer",
    main: "This is a bright and pushy presentation of meaningful texts with humming beats. The main track of this EP, perhaps, was the eponymous track Alpha on which the artist shot a really good video akin to a short film",
    img: "https://i.scdn.co/image/ab67616d00001e022af4d3e4b217bafc2a2874d0",
    date: "01.09.2022",
    views: 707,
  },
  {
    id: 7,
    title: "L'One will release a new album Alpha this summer",
    main: "This is a bright and pushy presentation of meaningful texts with humming beats. The main track of this EP, perhaps, was the eponymous track Alpha on which the artist shot a really good video akin to a short film",
    img: "https://i.scdn.co/image/ab67616d00001e022af4d3e4b217bafc2a2874d0",
    date: "01.09.2022",
    views: 707,
  },
];
const topCharts = [
  {
    singer: "Eminem",
    slang: "eminem",
    img: "https://i.scdn.co/image/ab67616d0000b273c08d5fa5c0f1a834acef5100",
    song: "never love again",
    link: "https://open.spotify.com/track/40YbWniIEmqy6s58fYXLUh?si=a6f0566f14cb4946",
    genre: "Rap",
  },
  {
    singer: "L'One",
    slang: "lone",
    img: "https://i.scdn.co/image/ab67616d0000b2734406b919920896f9aaa56227",
    song: "Медленно",
    link: "https://open.spotify.com/track/4s57mclkfBhe7I7N2DV9IZ?si=1c73e6a61b5f41b8",
    genre: "Pop",
  },
  {
    singer: "Eminem",
    slang: "eminem",
    img: "https://i.scdn.co/image/ab67616d0000b273c08d5fa5c0f1a834acef5100",
    song: "never love again",
    link: "https://open.spotify.com/track/40YbWniIEmqy6s58fYXLUh?si=a6f0566f14cb4946",
    genre: "Rap",
  },
  {
    singer: "L'One",
    slang: "lone",
    img: "https://i.scdn.co/image/ab67616d0000b2734406b919920896f9aaa56227",
    song: "Медленно",
    link: "https://open.spotify.com/track/4s57mclkfBhe7I7N2DV9IZ?si=1c73e6a61b5f41b8",
    genre: "Pop",
  },
];
const singers = [
  {
    nick: "Eminem",
    slang: "eminem",
    img: "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
    nameSurname: "Marshall Bruce Mathers III",
    birthDate: "17.10.1972",
    birthPlace: "Saint Joseph, Missouri, United States",
    about:
      "known professionally as Eminem, is an American rapper. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time.",
  },
  {
    nick: "L'One",
    slang: "lone",
    img: "https://i.scdn.co/image/ab67616d0000b2739f006972d922ec3181bb586d",
    nameSurname: "Levan Emzarovich Gorozia",
    birthDate: "09.10.1985",
    birthPlace: " Krasnoyarsk, Russia",
    about:
      "known professionally as L'One and more recently as Levan Gorozia is a Georgian-Russian rapper, singer, and songwriter. Known for his solo career, for co-founding the WDKTZ project with DJ Pill.One and for co-founding the hip hop group Marselle",
  },
];

export { releaseList, newslist, topCharts, singers };
