import React, { createContext, useState } from "react";
export const food = createContext();
const Apifoods = (props) => {
  const [dataCric, setDataCric] = useState([
    
    {
    "source": {
    "id": null,
    "name": "By famous telugu chef"
    },
    "author": null,
    "title": "Most Famous Foods in Andhra Pradesh",
    "description":"Andhra Pradesh is known for its spicy food plate. Each region of this state has a different style of cuisine. Most of the dishes would be hot and spicy with strong flavours.",
    "url": "https://food.ndtv.com/food-drinks/andhra-pradesh-food-10-local-dishes-you-must-try-1452551",
    "urlToImage": "https://i.ndtvimg.com/i/2015-02/andhra-curry_625x350_51425037004.jpg",
    "publishedAt": "2022-05-25T10:05:10Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Rekha chef"
    },
    "author": null,
    "title": "Karnataka famous dishes are really good to eat.",
    "description": "Karnataka cuisine is highly influenced by its neighbor’s states like Kerala, Andhra Pradesh, Tamil Nadu, and Maharashtra.",
    "url": "https://news.jugaadin.com/food-of-karnataka-22-famous-dishes-of-karnataka/",
    "urlToImage": "https://qph.fs.quoracdn.net/main-qimg-b684afc4a8a57ad233124c3f3ea436ab-c",
    "publishedAt": "2022-05-25T10:00:17Z",
    "content": "The next edition of the ICC Women's Championship was announced by the ICC on Wednesday, 25 May, with two new teams added to the mix, making it a 10-team league.After the success of the ICC Womens Cha… [+4946 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Food News"
    },
    "author": "Asian News International",
    "title": " Kerala Cuisine: 21 Dishes That Make The State The King Of Culinary Art In 2022",
    "description": "Here are some of the most popular dishes that Kerala boasts of! This list contains both vegetarian and non-vegetarian  Note them down and savour them on your next Kerala holiday. ",
    "url": "https://traveltriangle.com/blog/kerala-cuisine/",
    "urlToImage": "https://tse4.mm.bing.net/th?id=OIP.wc5mn8XM3gsPkC2eBziCEQHaE8&pid=Api&P=0&w=236&h=157",
    "publishedAt": "2022-05-25T09:27:34Z",
    "content": "Former Indian cricketer Irfan Pathan reckons all the three teams placed above Royal Challengers Bangalore in the points table will be wary of the Faf du Plessis-led side in the IPL 2022 playoffs. Rid… [+1406 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Cricbuzz"
    },
    "author": null,
    "title": "Tamil Nadu has always been a hub for food connoisseurs to take a great in the country.",
    "description":" These includes payasam, biryani, chicken,chettinad, rasam, mutton curry coconut chutney, parotta, curd rice, upma, lemon",
    "url": "https://www.tourmyindia.com/states/tamilnadu/cuisine.html",
    "urlToImage": "https://i.pinimg.com/originals/11/e0/62/11e06206ec14202904b785a5cebc0da6.jpg",
    "publishedAt": "2022-05-25T09:16:04Z",
    "content": "The year 2021 was not the best of years for Deepak Hooda. Early in January, Hooda got into a verbal altercation with Baroda captain Krunal Pandya, which led to his suspension from domestic cricket fo… [+10565 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Mumbai news"
    },
    "author": null,
    "title": "",
    "description": "",
    "url": "https://traveltriangle.com/blog/street-food-in-mumbai/",
    "urlToImage": "https://worldoffoodanddrink.worldtravelguide.net/wp-content/uploads/2019/03/shu-Food-to-try-in-Mumbai-796385446-1440x823.jpg",
    "publishedAt": "2022-05-25T08:59:48Z",
    "content": "Former India opener Virender Sehwag has said that if Royal Challengers Bangalores (RCB) Virat Kohli scores a century in the upcoming Eliminator match of IPL 2022 against Lucknow Super Giants (LSG), p… [+2454 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": "Press Trust of India",
    "title": "Food of Goa : 16 Must Try Dishes That Exemplify Food of Goa",
    "description": "Goa was a Portuguese colony prior to 1961, and hence, the Portuguese influenced most of their food and it is very famous for fish chicken etc.",
    "url": "https://www.holidify.com/pages/goan-food-132.html",
    "urlToImage": "https://www.goa.biz/wp-content/uploads/2019/08/sorpote.jpg",
    "publishedAt": "2022-05-25T08:58:06Z",
    "content": "In his short international career, Hardik Pandya has seen it all -- highs and lows, injuries, surgery, being embroiled in controversies -- but he says he faces them with a smiling face. Putting behin… [+4804 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": "NDTV Sports Desk",
    "title": "Famous dishes for Lohiri ",
    "description": "Happy Lohri 2022: 11 Authentic Lohri Food RecipesLohri 2022 Recipes: Find here list of 11 best authentic  the Lohri festival like chole bhature, makke ki roti, sarso ka saag, gur ki roti, murmura ladoo & many more lohri special foods with key ingredients and how to make process.",
    "url": "https://food.ndtv.com/lists/happy-lohri-10-authentic-recipes-726403",
    "urlToImage": "https://www.thestatesman.com/wp-content/uploads/2020/01/BeFunky-collage-7.jpg",
    "publishedAt": "2022-05-25T08:16:07Z",
    "content": "Nikhat Zareen won gold at the Women's World Boxing Championship last week, becoming just the fifth Indian woman to secure gold medal in the tournament's history. The 25-year-old, on Wednesday, took t… [+1728 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Sports Desk",
    "title": "The food of Odish",
    "description": "Food of Odisha - 26 Dishes of Odia Cuisine That You Should Not Miss.As Odisha is bordered by both North Indian and South Indian states, food of Odisha is majorly influenced by the food of North India, Bengal and Assam. ",
    
    "url": "https://www.holidify.com/pages/food-of-odisha-1324.html",
    "urlToImage": "https://www.holidify.com/blog/wp-content/uploads/2016/09/Chungdi-malai.jpg",
    "publishedAt": "2022-05-25T08:15:49Z",
    "content": "There is none like the great MS Dhoni. Even two years after retiring from international cricket, Dhoni is one of the fittest cricketers you would come across. He can still beat the best youngsters cr… [+2157 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Sports Desk",
    "title": "15 Best Assam Food Options For The Foodies Traveling To North East!",
    "description": " The Assam cuisine has a distinct flavour that is marked by Bengali influence and consists of a delicate taste that would make anyone go gaga thanks to the choicest herbs and fresh fruits and vegetables that are used in the dishes.",
    "url": "https://traveltriangle.com/blog/assam-food/",
    "urlToImage": "https://img.traveltriangle.com/blog/wp-content/uploads/2018/03/orange-kheer-400x345.jpg",
    "publishedAt": "2022-05-25T06:47:22Z",
    "content": "Former India opener Virender Sehwag has credited Anil Kumble for reviving his Test career. Sehwag, who was dropped from the India Test team in early 2007 went almost a year without playing another Te… [+2025 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
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
    "name": "GIVEMESPORT"
    },
    "author": "Rob Swan",
    "title": "Kolkata Street Food: 20 Famous Dishes & Places for food.",
    "description": "Known as the Cultural Capital of the nation that paved the way for the Indian Renaissance, Kolkata’s diverse history is evident from its traditional cuisine featuring subtle nuances from strong cultural",
    "url": "https://theculturetrip.com/asia/india/articles/10-traditional-dishes-from-kolkata-you-need-to-try/",
    "urlToImage": "https://tse3.mm.bing.net/th?id=OIP.B0DxsXYe1tQawmGZWQqiCgHaEK&pid=Api&P=0&w=289&h=162",
    "publishedAt": "2022-05-25T06:20:49Z",
    "content": "  "
    },
    {
    "source": {
    "id": null,
    "name": "India Today"
    },
    "author": null,
    "title": "Top 10 Famous Dishes of Delhi",
    "description": "The capital’s love for food can take you from small unknown streets to well-known restaurants, but there are some popular dishes in Delhi that are found everywhere.",
    "url": "https://theculturetrip.com/asia/india/articles/the-most-popular-dishes-in-delhi-india/",
    "urlToImage": "https://tse1.mm.bing.net/th?id=OIP.ngfRLfxXx39Pj-JUvjJD9gHaFB&pid=Api&P=0&w=231&h=156",
    "publishedAt": "2022-05-25T06:08:35Z",
    "content": null
    },
   
   
    
]);
return (
  <div>
    <food.Provider value={[dataCric, setDataCric]}>
      {props.children}
    </food.Provider>
  </div>
);
};
export default Apifoods;