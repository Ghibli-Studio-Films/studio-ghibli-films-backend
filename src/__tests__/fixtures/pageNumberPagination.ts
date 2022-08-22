import { mockRequest } from "./express";

export const req = mockRequest();
req.protocol = "http";
req.get = jest.fn().mockReturnValue("domain.deploytool.com");
req.baseUrl = "/films";

export const withPageAndLimit = {
  data_count: 22,
  total_pages: 2,
  page: 2,
  per_page: 12,
  previous: "http://domain.deploytool.com/films?page=1&limit=12",
  next: null,
  results: [
    {
      id: "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
      title: "Howl's Moving Castle",
      original_title: "ハウルの動く城",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/hjlvbMKhQm7N8tYynr8yQ8GBmqe.jpg",
      description:
        "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
      director: "Hayao Miyazaki",
      producer: "Toshio Suzuki",
      release_date: "2004",
      running_time: "119",
      rt_score: "87",
    },
    {
      id: "112c1e67-726f-40b1-ac17-6974127bb9b9",
      title: "Tales from Earthsea",
      original_title: "ゲド戦記",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/67yYwCPq7NbxSF6BIIXCMD34sY0.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/j276noIGGmfi66EnCfewsL2OVTX.jpg",
      description:
        "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged.",
      director: "Gorō Miyazaki",
      producer: "Toshio Suzuki",
      release_date: "2006",
      running_time: "116",
      rt_score: "41",
    },
    {
      id: "758bf02e-3122-46e0-884e-67cf83df1786",
      title: "Ponyo",
      original_title: "崖の上のポニョ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/6a1qZ1qat26mAIK3Lq8iYdGpyHm.jpg",
      description:
        "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
      director: "Hayao Miyazaki",
      producer: "Toshio Suzuki",
      release_date: "2008",
      running_time: "100",
      rt_score: "92",
    },
    {
      id: "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
      title: "Arrietty",
      original_title: "借りぐらしのアリエッティ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oc2OB2KDmSRDMelKEAA1n4YRQL0.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/7Z7WVzJsSReG8B0CaPk0bvWD7tK.jpg",
      description:
        "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
      director: "Hiromasa Yonebayashi",
      producer: "Toshio Suzuki",
      release_date: "2010",
      running_time: "94",
      rt_score: "95",
    },
    {
      id: "45db04e4-304a-4933-9823-33f389e8d74d",
      title: "From Up on Poppy Hill",
      original_title: "コクリコ坂から",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rRLYX4RZIyloHSJwvZKAhphAjiB.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/xtPBZYaWQMQxRpy7mkdk5n1bTxs.jpg",
      description:
        "The story is set in 1963 in Yokohama. Kokuriko Manor sits on a hill overlooking the harbour. A 16 year-old girl, Umi, lives in that house. Every morning she raises a signal flag facing the sea. The flag means “I pray for safe voyages”. A 17 year-old boy, Shun, always sees this flag from the sea as he rides a tugboat to school. Gradually the pair are drawn to each other but they are faced with a sudden trial. Even so, they keep going without running from facing the hardships of reality.",
      director: "Gorō Miyazaki",
      producer: "Toshio Suzuki",
      release_date: "2011",
      running_time: "91",
      rt_score: "83",
    },
    {
      id: "67405111-37a5-438f-81cc-4666af60c800",
      title: "The Wind Rises",
      original_title: "風立ちぬ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jfwSexzlIzaOgxP9A8bTA6t8YYb.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/stM3jlD4nSJhlvR2DE7XnB0eN25.jpg",
      description:
        "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
      director: "Hayao Miyazaki",
      producer: "Toshio Suzuki",
      release_date: "2013",
      running_time: "126",
      rt_score: "89",
    },
    {
      id: "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
      title: "The Tale of the Princess Kaguya",
      original_title: "かぐや姫の物語",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mWRQNlWXYYfd2z4FRm99MsgHgiA.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/lMaWlYThCSnsmW3usxWTpSuyZp1.jpg",
      description:
        "A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.",
      director: "Isao Takahata",
      producer: "Yoshiaki Nishimura",
      release_date: "2013",
      running_time: "137",
      rt_score: "100",
    },
    {
      id: "5fdfb320-2a02-49a7-94ff-5ca418cae602",
      title: "When Marnie Was There",
      original_title: "思い出のマーニー",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vug1dvDI1tSa60Z8qjCuUE7ntkO.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/axUX7urQDwCGQ9qbgh2Yys7qY9J.jpg",
      description:
        "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
      director: "Hiromasa Yonebayashi",
      producer: "Yoshiaki Nishimura",
      release_date: "2014",
      running_time: "103",
      rt_score: "92",
    },
    {
      id: "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500",
      title: "The Red Turtle",
      original_title: "レッドタートル ある島の物語",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wOBU3SLjQ9358Km9YWYasPZyebp.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/kjXdW5H3myRBmTMYgKayjphr2FA.jpg",
      description:
        "A man set adrift by a storm wakes up on a beach. He discovers that he is on a deserted island with plenty of fresh water, fruit and a dense bamboo forest. He builds a raft from bamboo and attempts to sail away, but his raft is destroyed by an unseen monster in the sea, forcing him back to the island. He tries again with another, larger raft, but is again foiled by the creature. A third attempt again ends with the raft destroyed, but this time he is confronted by a giant red turtle, which stares at him, and forces him back to the island.",
      director: "Michaël Dudok de Wit",
      producer:
        "Toshio Suzuki, Isao Takahata, Vincent Maraval, Pascal Caucheteux, Grégoire Sorlat",
      release_date: "2016",
      running_time: "80",
      rt_score: "93",
    },
    {
      id: "790e0028-a31c-4626-a694-86b7a8cada40",
      title: "Earwig and the Witch",
      original_title: "アーヤと魔女",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sJhFtY3eHuvvACaPpxpzdCLQqpQ.jpg",
      movie_banner:
        "https://www.themoviedb.org/t/p/original/qMxpGzmmnY1jLd4p7EhhoW43wWF.jpg",
      description:
        "An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic.",
      director: "Gorō Miyazaki",
      producer: "Toshio Suzuki",
      release_date: "2021",
      running_time: "82",
      rt_score: "30",
    },
  ],
};

export const withoutPageAndLimit = {
  data_count: 22,
  total_pages: 3,
  page: 1,
  per_page: 10,
  previous: null,
  next: "http://domain.deploytool.com/films?page=2&limit=10",
  results: [
    {
      id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      title: "Castle in the Sky",
      original_title: "天空の城ラピュタ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      description:
        "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      running_time: "124",
      rt_score: "95",
    },
    {
      id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
      title: "Grave of the Fireflies",
      original_title: "火垂るの墓",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/vkZSd0Lp8iCVBGpFH9L7LzLusjS.jpg",
      description:
        "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
      director: "Isao Takahata",
      producer: "Toru Hara",
      release_date: "1988",
      running_time: "89",
      rt_score: "97",
    },
    {
      id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      title: "My Neighbor Totoro",
      original_title: "となりのトトロ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg",
      description:
        "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
      director: "Hayao Miyazaki",
      producer: "Hayao Miyazaki",
      release_date: "1988",
      running_time: "86",
      rt_score: "93",
    },
    {
      id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
      title: "Kiki's Delivery Service",
      original_title: "魔女の宅急便",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/h5pAEVma835u8xoE60kmLVopLct.jpg",
      description:
        "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
      director: "Hayao Miyazaki",
      producer: "Hayao Miyazaki",
      release_date: "1989",
      running_time: "102",
      rt_score: "96",
    },
    {
      id: "4e236f34-b981-41c3-8c65-f8c9000b94e7",
      title: "Only Yesterday",
      original_title: "おもひでぽろぽろ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xjJU6rwzLX7Jk8HFQfVW6H5guMC.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/w533_and_h300_bestv2/isCrlWWI4JrdLKAUAwFb5cjAsH4.jpg",
      description:
        "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
      director: "Isao Takahata",
      producer: "Toshio Suzuki",
      release_date: "1991",
      running_time: "118",
      rt_score: "100",
    },
    {
      id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
      title: "Porco Rosso",
      original_title: "紅の豚",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/nAeCzilMRXvGaxiCpv63ZRVRVgh.jpg",
      description:
        "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
      director: "Hayao Miyazaki",
      producer: "Toshio Suzuki",
      release_date: "1992",
      running_time: "93",
      rt_score: "94",
    },
    {
      id: "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
      title: "Pom Poko",
      original_title: "平成狸合戦ぽんぽこ",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/jScPd0u0jeo66l8gwDl7W9hDUnM.jpg",
      description:
        "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
      director: "Isao Takahata",
      producer: "Toshio Suzuki",
      release_date: "1994",
      running_time: "119",
      rt_score: "78",
    },
    {
      id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
      title: "Whisper of the Heart",
      original_title: "耳をすませば",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5E3Hvbu0bg38ouYf6chGftVGqZ7.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/fRtaDgmj0CirvqFUG1XN48BDY1l.jpg",
      description:
        "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather.",
      director: "Yoshifumi Kondō",
      producer: "Toshio Suzuki",
      release_date: "1995",
      running_time: "111",
      rt_score: "91",
    },
    {
      id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
      title: "Princess Mononoke",
      original_title: "もののけ姫",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/6pTqSq0zYIWCsucJys8q5L92kUY.jpg",
      description:
        "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
      director: "Hayao Miyazaki",
      producer: "Toshio Suzuki",
      release_date: "1997",
      running_time: "134",
      rt_score: "92",
    },
    {
      id: "45204234-adfd-45cb-a505-a8e7a676b114",
      title: "My Neighbors the Yamadas",
      original_title: "ホーホケキョ となりの山田くん",
      image:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wTGuHmMIBBgKakY80J1D52VvQKI.jpg",
      movie_banner:
        "https://image.tmdb.org/t/p/original/nDOsicEg4RHDq0t23JKGSb58z6u.jpg",
      description:
        "The Yamadas are a typical middle class Japanese family in urban Tokyo and this film shows us a variety of episodes of their lives. With tales that range from the humourous to the heartbreaking, we see this family cope with life's little conflicts, problems and joys in their own way.",
      director: "Isao Takahata",
      producer: "Toshio Suzuki",
      release_date: "1999",
      running_time: "104",
      rt_score: "75",
    },
  ],
};

export const withEmptyArray = {
  data_count: 0,
  total_pages: 0,
  page: null,
  per_page: null,
  previous: null,
  next: null,
  results: [],
};