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
  {
    name: "Snoop Dogg",
    img: "https://i.scdn.co/image/ab67616d0000b27357823d09cb2efe1a926f1623",
    song: "Still D.R.E",
    link: "https://open.spotify.com/track/503OTo2dSqe7qk76rgsbep?si=3af017bea2b84a3b",
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
    views: 104,
  },
  {
    id: 3,
    singer: "Travis Scott",
    slang: "travis-scott",
    title: "Travis Scott halts concert to order fans to stop dangling   ",
    main: "Travis Scott stopped his latest show to order fans to get down and stop climbing a lighting truss by the stage.The rapper's response comes after a fatal surge during his 2021 Astroworld festival left 10 people dead and more than 4,900 injured.",
    img: "https://preview.redd.it/sm6bt6pafeq31.jpg?auto=webp&s=c9e3303c0658f69dcbac3ed7cc31639aad465963",
    date: "29.08.2022",
    views: 307,
  },
  {
    id: 4,
    singer: "Snoop Dogg",
    slang: "snoop-dogg",
    title: "Snoop Dogg unveils new children's TV show Doggyland",
    main: "Snoop Dogg has launched a new animated children's television series called Doggyland.Partnering with Claude Brooks, the Emmy-nominated producer and creator of the kids' franchise Hip Hop Harry and musician October London, the show will teach toddlers to eight-year-olds social, emotional and cognitive skills through song, dance and rap.As a father, grandfather and longtime youth football coach, it's always been important to me to build positive and educational environments for all children, Snoop Dogg said.The show will be available to watch on YouTube.",
    img: "https://i.scdn.co/image/ab6761610000e5eb9a398209a4ef3360dce2dec4",
    date: "30.08.2022",
    views: 514,
  },
  {
    id: 5,
    singer: "Neffex",
    slang: "neffex",
    title: "Neffex've decided to release new song every Wensday",
    main: "2017 the pair, who dubbed their musical project Neffex, decided to challenge themselves and hone their skills by releasing a complete song a week for 100 weeks straight. Inspired by artists such as Lil Wayne and Russ, who were sporadically dropping full albums and releasing singles regularly online, Neffex uploaded a song at 9 a.m. every Wednesday to its social media pages including YouTube, as well as streaming services like Spotify, Apple Music and Soundcloud.",
    img: "https://i.scdn.co/image/ab6761610000e5eb3a7d849b89d6ba9f5bd81639",
    date: "31.08.2022",
    views: 714,
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
  {
    nick: "Neffex",
    slang: "neffex",
    img: "https://i.scdn.co/image/ab6761610000e5eb3a7d849b89d6ba9f5bd81639",
    nameSurname: "Bryce Savage",
    birthDate: "15.07.1992",
    birthPlace: "Los angeles, California, USA",
    about:
      "produced remixes and original songs characterized by a mixture of electronic and rap genres. Before Savage continued the project on his own, he wrote lyrics and sang while Wales created instrumentals and performed editing",
  },
  {
    nick: "Snoop Dogg",
    slang: "snoop-dogg",
    img: "https://i.scdn.co/image/ab67616d0000b27357823d09cb2efe1a926f1623",
    nameSurname: "Calvin Cordozar Broadus Jr",
    birthDate: "20.10.1971",
    birthPlace: "Long Beach, California, United States",
    about:
      "known professionally as Snoop Dogg, is an American rapper, media personality, and actor. His fame dates to 1992 when he featured on Dr. Dre's debut solo single, Deep Cover, and then on Dre's debut solo album, The Chronic",
  },
  {
    nick: "Travis Scott",
    slang: "travis-scott",
    img: "https://i.scdn.co/image/ab6761610000e5ebe707b87e3f65997f6c09bfff",
    nameSurname: "Jacques Bermon Webster II",
    birthDate: "30.04.1991",
    birthPlace: " Houston, Texas, United States",
    about:
      "better known by his stage name Travis Scott, is an American rapper, singer, songwriter, and record producer. His stage name is the namesake of a favorite uncle combined with the first name of one of his inspirations, Kid Cudi.",
  },
];

export { releaseList, newslist, topCharts, singers };
