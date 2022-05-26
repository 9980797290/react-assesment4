import React, { createContext, useState } from "react";
export const hollywood = createContext();
const ApiHolywood = (props) => {
  const [dataHolly, setDataHolly] = useState([
    {
      "source": {
      "id": null,
      "name": "As.com"
      },
      "author": "Calum Roche",
      "title": "Comedian Ellen DeGeneres,  show 'The Ellen DeGeneres Show,' is gearing up to say goodbye to it after 19 seasons.",
      "description": "Follow all the latest developments on Depp’s $50 million defamation case against ex-wife Amber Heard, and her counter suit, in the final week.",
      "url": "https://www.republicworld.com/entertainment-news/hollywood-news/ellen-degeneres-to-take-a-pause-and-go-on-vacation-with-wife-portia-after-shows-finale-articleshow.html",
      "urlToImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/poo50x61qttgftao_1653498490.jpeg",
      "publishedAt": "2022-05-25T18:38:20Z",
      "content": "Depp vs Heard: some of the key points early in the trial\r\nIf you're only just coming to the Depp-Heard case now, here is a selection of some of the key points from earlier in the trial that will help… [+2358 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Deadline"
      },
      "author": "Nellie Andreeva",
      "title": "Travis Barker and Kourtney Kardashian's PDA tour continues with new photos of the couple rocking matching jackets after their lavish Italian wedding!",
      "description": "Apple TV+ is prepping Speed Racer, a high-profile live-action series from J.J. Abrams’ Bad Robot and Warner Bros. Television where the company is under a deal. Primetime-Panic Your Complete Guide to Pilots and Straight-to-Series orders See All Details are ske…",
      "url": "https://hollywoodlife.com/2022/05/24/kourtney-kardashian-travis-barker-matching-jackets-italy/",
      "urlToImage": "https://www.lifeandstylemag.com/wp-content/uploads/2021/03/scott-approves-of-kourtney-new-boyfriend-travis-feature.jpg?w=1200",
      "publishedAt": "2022-05-25T18:00:00Z",
      "content": "Apple TV+ is prepping Speed Racer, a high-profile live-action series from J.J. Abrams’ Bad Robot and Warner Bros. Television where the company is under a deal.\r\nPrimetime-Panic\r\nYour Complete Guide t… [+1717 chars]"
      },
      {
      "source": {
      "id": "buzzfeed",
      "name": "Buzzfeed"
      },
      "author": "Nora Dominick",
      "title": "Cinderella is an upcoming musical romantic comedy movie that stars popular singer Camila Cabello in the titular role as she makes her feature film debut",
      "description": "The This Is Us series finale is being called \"tremendous\" by fans as they watched the Pearsons say goodbye.",
      "url":"https://www.republicworld.com/entertainment-news/hollywood-news/cinderella-first-look-featuring-camila-cabello-and-nicholas-galitzine-is-out.html",
      "urlToImage":"http://assets.teenvogue.com/photos/5640ad2374c310e51e7abef7/master/pass/GettyImages-489230904.jpg",
      "publishedAt": "2022-05-25T17:34:13Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Bridgerton season 2 recently released on Netflix and fans of the show were over the moon with the news as they wondered what fate had in store for the Bridgerton siblings.",
      "description":"The second season of the hit show 'Bridgerton' recently released on Netflix and fans wonder what fate had in store for the Bridgerton siblings.",
      "url": "https://www.youtube.com/watch?v=hZjxtC-IrmI",
      "urlToImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/7joa07sijoxslueu_1648302877.jpeg",
      "publishedAt": "2022-05-25T17:18:06Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Daily Mail"
      },
      "author": "Harriet Johnston",
      "title": "Kate Moss was called to testify in court thanks to Heard's previous testimony. The 'Aquaman' star had stated that she feared Johnny Depp would push her sister down the stairs during a violent.",
      "description": "",
      "url": "https://www.wionews.com/entertainment/hollywood",
      "urlToImage": "http://wallpapercave.com/wp/wc1692180.jpg",
      "publishedAt": "2022-05-25T17:12:12Z",
      "content":"",
      },
      {
      "source": {
      "id": null,
      "name": "Lifehacker.com"
      },
      "author": "Joel Cunningham",
      "title": "",
      "description": "Somehow, The Umbrella Academy is already back for a third season.",
      "url": "https://www.koimoi.com/hollywood-news/kate-moss-has-nothing-but-warmth-for-ex-beau-johnny-depp-body-language-expert-suggest-after-her-testimony-against-amber-heards-claims/",
      "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/05/kate-moss-was-warm-towards-johnny-depp-while-testifying-during-the-amber-heard-case-says-body-language-expert-01.jpg",
      "publishedAt": "2022-05-25T16:30:00Z",
      "content": "language experts have decoded Kate Moss’ face and expressions during her testimony in the Johnny Depp and Amber Heard case. For the unversed, the British Model, who is also Depp’s ex, was called to testify at the defamation trial against Heard. Her name popped up after the Aquaman actress claimed he pushed Kate down the stairs."
      },
      {
      "source": {
      "id": null,
      "name": "Vulture"
      },
      "author": "Victoria Bekiempis",
      "title": "Kate Moss Denies Johnny Depp Pushed Her Down the Stairs - Vulture",
      "description": "The trial is nearing its end.",
      "url": "https://timesofindia.indiatimes.com/entertainment/english/hollywood/news/warner-bros-gives-fans-a-peek-into-dceu-with-new-aquaman-2-black-adam-the-batman-the-flash-clip-dwanye-johnson-introduces-justice-society/articleshow/89522497.cms",
      "urlToImage": "https://tse4.mm.bing.net/th?id=OIP.GefsErDWksbSY4veycPmLAHaEK&pid=Api&P=0&w=300&h=169",
      "publishedAt": "2022-05-25T16:20:00Z",
      "content": "Warner Bros. gives fans a peek into DCEU with new 'Aquaman 2', 'Black Adam', 'The Batman', 'The Flash' clip; Dwanye Johnson introduces 'Justice Society'"
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "",
      "description":"The best ones did not let it go. Frances McDormand as a woman lost and found on the fabled highways of America; Viola Davis as the “Mother of the Blues” making her first recordings as the world flits between loving and loathing her power; Steven Yeun as a young father risking it all on Arkansan soil; an unforgettable 24-minute single take of Vanessa Kirby set during a home birth; and 23 more exquisite, poignant and hilarious performances celebrated by Vogue.The film industry is wounded badly, but its stories continue to nourish, heal and offer escape, even hope. So see them all, on whatever screen you can, while we wait for those cinema lights to fade to magic once again.",
      
      
      
      
      "url": "https://www.vogue.co.uk/arts-and-lifestyle/article/hollywood-portfolio-2021",
      "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2014631/rs_600x600-140731053403-600.Cara-Delevingne-British-Vogue-JR-73114.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      "publishedAt": "2022-05-25T16:00:04Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "CNBC"
      },
      "author": "Sarah Whitten",
      "title": "Tom Cruise sets his sights on his first $100 million domestic opening with 'Top Gun: Maverick' - CNBC",
      "description": "This weekend Tom Cruise has a chance to do something he's never done before — have a film open to more than $100 million at the domestic box office.",
      "url": "https://www.cnbc.com/2022/05/25/top-gun-maverick-could-be-tom-cruise-first-100-million-opening-weekend.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106866305-1617994177028-top.jpg?v=1617994249&w=1920&h=1080",
      "publishedAt": "2022-05-25T16:00:01Z",
      "content": "This weekend Tom Cruise has a chance to do something he's never done before open a film to more than $100 million at the domestic box office.\r\nThe prolific actor, who has made a name for himself as a… [+3743 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "BuzzFeed News"
      },
      "author": "Stephanie Soteriou",
      "title": "Kim Kardashian Is Being Roasted For Seemingly Pretending To Eat The Food In Her New Advert As Beyond Meat’s “Chief Taste Consultant” - BuzzFeed News",
      "description": "“You do realise she didn’t actually put any of that in her mouth right?”",
      "url": "https://www.buzzfeednews.com/article/stephaniesoteriou/kim-kardashian-roasted-pretending-eat-beyond-meat",
      "urlToImage": "https://tse4.mm.bing.net/th?id=OIP.nF3jMautT0aqEJm6J6f_fwHaEK&pid=Api&P=0&w=272&h=153",
      "publishedAt": "2022-05-25T15:54:17Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "The A.V. Club"
      },
      "author": "Mary Kate Carr",
      "title": "Margaret Atwood auctioning an \"unburnable\" copy of Handmaid's Tale in response to book bans - The A.V. Club",
      "description": "Atwood took a flamethrower to her novel to raise money for PEN America",
      "url": "https://www.avclub.com/margaret-atwood-handmaids-tale-unburnable-auction-censo-1848975057",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c9e1cd274cee1c645da4085020214db1.png",
      "publishedAt": "2022-05-25T15:12:05Z",
      "content": "Margaret Atwood has responded to the threat of book burning with a very literal solution: she made The Handmaids Tale unburnable. The author is auctioning off a very special edition of the story in p… [+1749 chars]"
      },
      {
      "source": {
      "id": "associated-press",
      "name": "Associated Press"
      },
      "author": null,
      "title": "Steven Tyler enters treatment, Aerosmith cancels shows - The Associated Press",
      "description": "BOSTON (AP) — Aerosmith frontman Steven Tyler has voluntarily entered a rehabilitation program, forcing the Boston-based rock band to cancel the first portion of its upcoming Las Vegas residency. Tyler, 74, has made no secret of his lifelong struggle with sub…",
      "url": "https://apnews.com/article/entertainment-health-steven-tyler-boston-f4677b9e4dd2a4d210a3af073628ce6b",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/8a0b11bd95d94e5e91c6c07db8f04bb9/2325.jpeg",
      "publishedAt": "2022-05-25T15:07:25Z",
      "content": "BOSTON (AP) Aerosmith frontman Steven Tyler has voluntarily entered a rehabilitation program, forcing the Boston-based rock band to cancel the first portion of its upcoming Las Vegas residency.\r\nTyle… [+784 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Variety"
      },
      "author": "Angelique Jackson",
      "title": "The Feminist Evolution of ‘Jurassic World Dominion’: How Laura Dern, Bryce Dallas Howard and DeWanda Wise Became Summer’s Breakout Action Stars - Variety",
      "description": "“Dinosaurs eat man. Woman inherits the earth.” That quip from Laura Dern’s Dr. Ellie Sattler in 1993’s “Jurassic Park” has been immortalized on T-shirts, bumper stickers and coffee mugs ever since the first film in the mega-billion-dollar dinosaur franchise d…",
      "url": "https://variety.com/2022/film/news/jurassic-world-dominion-laura-dern-bryce-dallas-howard-dewanda-wise-1235275720/",
      "urlToImage": "https://variety.com/wp-content/uploads/2022/05/Women-of-Jurassic-World-Variety-Cover-Story-16x9-1.jpg?w=1024",
      "publishedAt": "2022-05-25T15:00:41Z",
      "content": "“Dinosaurs eat man. Woman inherits the earth.”\r\nThat quip from Laura Dern’s Dr. Ellie Sattler in 1993’s “Jurassic Park” has been immortalized on T-shirts, bumper stickers and coffee mugs ever since t… [+19639 chars]"
      },
      {
      "source": {
      "id": "entertainment-weekly",
      "name": "Entertainment Weekly"
      },
      "author": "Dalton Ross",
      "title": "The Survivor 42 final five speak! | EW.com - Entertainment Weekly News",
      "description": "Mike, Maryanne, Romeo, Jonathan, and Lindsay tell EW all about their first 23 days in the game.",
      "url": "https://ew.com/tv/survivor-42-finale-maryanne-mike-lindsay-jonathan-romeo/",
      "urlToImage": "https://heavy.com/wp-content/uploads/2018/04/billgates-e1526608219903.jpg?quality=65&strip=all",
      "publishedAt": "2022-05-25T14:30:00Z",
      "content": "They survived hourglasses. They survived amulets. They survived goofy phrases, prisoner's dilemmas, shots in the dark, and even unseen idol nullifiers. And now five players — Mike Turner, Maryanne Ok… [+14603 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "New York Post"
      },
      "author": "Eric Hegedus",
      "title": "Inside Ellen DeGeneres' last show: 'The entire place was crying' - New York Post ",
      "description": "“The controversy from two years ago, there was no sense of that on that day at all,” an insider told The Post. “No one hated her. No one was miserable. No one.”",
      "url": "https://nypost.com/2022/05/25/ellen-degeneres-last-show-the-entire-place-was-crying/",
      "urlToImage": "https://tse1.mm.bing.net/th?id=OIP.IKa1GkKkUVjpoCw-6-N-xQHaE8&pid=Api&P=0&w=271&h=181",
      "publishedAt": "2022-05-25T14:27:00Z",
      "content": "Ellen DeGeneres shed more than a few tears leading up to the final episode of her eponymous talk show.\r\nBut her last dance on Thursday, May 26, will be an especially emotional one, an insider who was… [+6498 chars]"
      },
  ]);
  return (
    <div>
      <hollywood.Provider value={[dataHolly, setDataHolly]}>
        {props.children}
      </hollywood.Provider>
    </div>
  );
};
export default ApiHolywood