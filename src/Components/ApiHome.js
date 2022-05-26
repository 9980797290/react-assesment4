
import React, { createContext, useState } from "react";
export const home = createContext();
const ApiHome = (props) => {
  const [dataHome, setDataHome] = useState([
   
   {
    "source": {
    "id": null,
    "name": "PRNewswire"
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
    "name": "Seeking Alpha"
    },
    "title":"At Karan Johar's Big Fat Bollywood Party: Salman Khan, Aishwarya And Abhishek Bachchan, Katrina Kaif And Vicky KaushalThe two walked the red carpet of the star-studded event and stopped at a platform for the paparazzi. As they were leaving to enter the venue, Ranbir Kapoor made a sweet gesture and promoted his mom's upcoming movie Jug Jugg Jeeyo. Watch the video below. ",
    "CategoryName"  : "Bollywood",
    "PublishedDate" : "Januaury 14 2022",
    "url":"https://www.republicworld.com/entertainment-news/bollywood-news/ranbir-kapoor-promotes-mom-neetus-jug-jugg-jeeyo-in-cutest-way-at-bollywood-party-articleshow.html",
    "urlToImage"    : "https://media2.bollywoodhungama.in/wp-content/uploads/2022/05/Cannes-2022-Deepika-Padukone-brings-drama-and-elegance-in-gold-and-black-Louis-Vuitton-gown-for-%E2%80%98Elvis%E2%80%99-premiere-1.jpg",
    "content"   : "At Karan Johar's Big Fat Bollywood Party: Salman Khan, Aishwarya And Abhishek Bachchan, Katrina Kaif And Vicky Kaushal",
    },
   {
    "source": {
    "id": null,
    "name": "FX Empire"
    },
    "author": "HT Sports Desk",
    "title": "Food of Gujarat - Gujarati Dishes You Can Treat Your Tastebuds With!",
    "description": "Many of us associate Gujarat only with dhokla, khakhra or the drool-worthy Gujarati Thali. But there is more to the Food of Gujarat than that. North Gujarat, Kacch, Kathiyawad and Surti Gujarat are four major regions of Gujarat and each of these bring their own uniqueness to Gujarati cuisine.",
    "url": "https://www.culturalindia.net/indian-food/gujrati.html",
    "urlToImage": "http://1.bp.blogspot.com/-Q0X6lRYlOR0/Vqr7PnpjA9I/AAAAAAAAAak/NVhHKMzLacs/s1600/IMG_7867.JPG",
    "publishedAt": "2022-05-25T06:23:25Z",
    "content": "Sachin Tendulkar's son Arjun has been a part of the Mumbai Indians squad since the last IPL. He was bought back by MI in the mega auction for 30 lakh ahead of IPL 2022. But the all-rounder has not go… [+1718 chars]"
    },
   {
    "source": {
      "id": null,
      "name": "New York Post"
      },
      "author": "The Sun",
      "title": "Woman's life is saved after she spotted something unusual in mirror - New York Post ",
      "description": "A woman has recalled the moment she spotted something unusual in the mirror which ended up saving her life.",
      "url": "https://tse3.mm.bing.net/th?id=OIP.CZgQkNaaiv_vDFq4QinCzQHaFL&pid=Api&P=0&w=219&h=153",
      "urlToImage": "https://tse1.mm.bing.net/th?id=OIP.7rWL9fkx0mIdohn0vNQWcwHaEK&pid=Api&P=0&w=328&h=185",
      "publishedAt": "2022-05-24T23:57:00Z",
      "content": "A woman has recalled the moment she spotted something unusual in the mirror which ended up saving her life. \r\nSusan Hunter-Dabson was blowdrying her hair and noticed something odd when she lifted her… [+2971 chars]"
      
    },
   {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "CDC had recently extended the mask mandate, which was set to expire until May 3 to allow more time to study the BA.2 omicron subvariant.",
    
    "description": "Silicon Valley startup Solo Advanced Vehicle Technologies has partnered with Michigan-based Advanced Battery Solutions (ABS) to develop battery packs for its new driverless electric heavy-duty truck, Solo AVT’s chief executive told Reuters.",
    "url": "https://economictimes.indiatimes.com/topic/airplane",
    "urlToImage": "https://tse3.mm.bing.net/th?id=OIP.CrM-GpwP8Mf7TLDklzxc7AHaEK&pid=Api&P=0&w=326&h=183",
    "publishedAt": "2022-05-25T13:11:00Z",
    "content": "May 25 (Reuters) - Silicon Valley startup Solo Advanced Vehicle Technologies has partnered with Michigan-based Advanced Battery Solutions (ABS) to develop battery packs for its new driverless electri… [+2034 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Eric Rosenbaum",
    "title": "Each type of fruit brings its own unique set of nutrients and benefits to the table. The key is to eat fruits of various colors, as each color provides adifferent set of healthy nutrition.",
    "description": "Airspace, a time-critical shipping start-up focused on AI for logistics, has doubled its venture funding in a round led by early Tesla investor DBL Partners.",
    "url": "https://www.healthline.com/nutrition/healthy-fruit",
    "urlToImage": "https://tse2.mm.bing.net/th?id=OIP.c6Tbz7IbCn9bVXzXQSOqhgHaFN&pid=Api&P=0&w=217&h=152",
    "publishedAt": "2022-05-25T13:09:39Z",
    "content": "Although these fruits are highly nutritious and can fit into a balanced diet, you may want to limit your intake if you find that they trigger symptoms of acid reflux."
    },
   {
    "source": {
    "id": null,
    "name": "TweakTown"
    },
    "author": "Anthony Garreffa",
    "title": "The history of dogs is an old tale indeed. You could say as long as there has been civilisation, there have been records of humans and dogs. Dogs were domesticated from wolves around 15,000 years ago. New evidence suggests that dogs were first domesticated in East Asia, possibly China. Over time, the dog has developed into hundreds of breeds with a great degree of variation.",
    
   
    "description": " YOU ARE HERE:  The history of dogs is an old tale indeed. You could say as long as there has been civilisation, there have been records of humans and dogs. Dogs were domesticated from wolves around 15,000 years ago. New evidence suggests that dogs were first domesticated in East Asia, possibly China. Over time, the dog has developed into hundreds of breeds with a great degree of variation.",
    "url": "https://animalcorner.org/animals/dog/",
    "urlToImage": "https://tse4.mm.bing.net/th?id=OIP.KvBmjbi9CjJFbI3RxJcXSgHaD4&pid=Api&P=0&w=341&h=179",
    "publishedAt": "2022-05-25T13:08:01Z",
    "content": ""
    },
   {
    "source": {
    "id": null,
    "name": "Barron's"
    },
    "author": "Al Root",
    "title": "",
    "description": "Talking about the company's growth plans, Singh shared that the brand is eyeing " ,


    "url": "https://retail.economictimes.indiatimes.com/news/health-and-beauty/cosmetics-and-fragrances/sugar-cosmetics-plans-to-file-for-an-ipo-by-year-2024-or-2025-shares-ceo-vineeta-singh/91699475",
    "urlToImage": "https://www.findtoptenranks.com/wp-content/uploads/2019/07/Top-10-Trending-News-on-Beauty-Cosmetics-1053x570.jpg",
    "publishedAt": "2022-05-25T13:07:16Z",
    "content": "On a day when the Nasdaq Composite fell 2.3% and the ARK Innovation ETF (ticker: ARKK) dropped 7%, Wood turned over about 0.7% of her fund. She doubled down on many of her largest positions, adding a… [+1504 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "Dagospia.com"
    },
    "author": null,
    "title": "Tata Power, has commissioned 100 MW project for Maharashtra State Electricity Distribution Company.",

    
  
    "description": "Commissioning of MSEDCL project in such a short time frame is a testimony to Tata.The group operates in more than 100 countries across six continents, with a mission 'To improve the quality of life of the communities we serve globally, through long-term stakeholder value creation based on Leadership with Trust’.",

    "url": "https://energy.economictimes.indiatimes.com/news/renewable/tata-power-renewable-energy-commissions-100-mw-solar-project-in-maharashtra/91815419",
    "urlToImage": "https://etimg.etb2bimg.com/photo/91815429.cms",
    "publishedAt": "2022-05-25T13:07:00Z",
    "content": "Dagotraduzione dal Daily Mail\r\nTweet di Elon Musk\r\nContinua la faida tra Elon Musk e Bill Gates. I due miliardari si stuzzicano su Twitter da anni. L’ultimo episodio riguarda un tweet di Elon Musk. I… [+1626 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "The Boston Globe"
    },
    "author": "Aaron Pressman",
    "title": "Tesla owners less likely to crash their EV than their other cars",
    "description": "A new study from Cambridge Mobile Telematics compared the safety performance of Tesla drivers when they drove their EV versus when they drove other vehicles.",
    "url": "https://www.bostonglobe.com/2022/05/25/business/tesla-owners-less-likely-crash-their-ev-than-their-other-cars/",
    "urlToImage": "https://3.bp.blogspot.com/-qPsBZhvnQHM/UC11-XjYhnI/AAAAAAAADUQ/i-O72i6SsVI/s1600/logos.gif",
    "publishedAt": "2022-05-25T13:06:52Z",
    "content": "People who drive a Tesla are a lot less likely to get in an accident in their electric car than when they drive another brand of vehicle they own, according to new research from Cambridge Mobile Tele… [+3866 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "Radaronline.com"
    },
    "author": "cs@emg.inc (Connor Surmonte)",
    "title": "Battle Of The Billionaires! Elon Musk SLAMS Bill Gates After Article Claims Microsoft Mogul Is Funding Musk's Critics",
    "description": "Elon Musk took to social media after Breitbart published an article claiming Bill Gates funds advertisers telling people to boycott Twitter if Musk takes over.",
    "url": "https://radaronline.com/p/elon-musk-slams-bill-gates-article-claims-funding-critics/",
    "urlToImage":"https://i2.wp.com/image.cnbcfm.com/api/v1/image/106807625-1607401571586-gettyimages-1057615164-775247724LZ036_China_Intern.jpeg?ssl=1",
    "publishedAt": "2022-05-25T13:05:48Z",
    "content": "I heard that at one point he had a large short position. I dont know if thats true or not, but it seems weird, Musk told Joe Rogan during a sit-down interview.\r\nPeople I know who know the situation p… [+125 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "The Truth About Cars"
    },
    "author": "Matt Posky",
    "title": "Volkswagen Board Displeased With Current Software Situation",
    "description": "Last week, Volkswagen’s supervisory board reportedly told management that it needed to work on improving the company’s software division. Though that should hardly be surprising considering how often digital glitches have delayed product launches and forced t…",
    "url": "https://www.thetruthaboutcars.com/2022/05/volkswagen-board-displeased-with-current-software-situation/",
    "urlToImage": "http://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-3.jpg",
    "publishedAt": "2022-05-25T13:00:29Z",
    "content": "Last week, Volkswagen’s supervisory board reportedly told management that it needed to work on improving the company’s software division. Though that should hardly be surprising considering how often… [+5684 chars]"
    },
   
  
   
  


]);
return (
  <div>
    <home.Provider value={[dataHome, setDataHome]}>
      {props.children}
    </home.Provider>
  </div>
);
};
export default ApiHome;
