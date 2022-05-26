import React, { createContext, useState } from 'react'
export const back=createContext()
const Api = (props) => {

    const [data,setData]=useState([
    {
      "Title" : " Karan Johar Rings In His 50th Birthday With Cake, Exotic Meal And FriendsKaran Johar turned 50 recently and marked the day with family, friends, colleagues, food and yummy cake. Here're some pics from Karan Johar's birthday bash.हिंदी में पढ़ेंSomdatta SahaUpdated: May 26, 2022 15:09 ISTRead Time:3 mKaran Johar Rings In His 50th Birthday With Cake, Exotic Meal And Friends with Full of joy.",
    
      "CategoryName"  : "Bollywood",
      "PublishedDate" : "Januaury 15 2022",
      "ImageAsset"    : "https://c.ndtvimg.com/2022-05/vdld3s2o_kjoparty650_625x300_26_May_22.jpg",
      "BlogContent"   : "Tejasswi Prakash beat popular actresses such as Shehnaaz Gill, Katrina Kaif, Deepika Padukone and others to achieve a rare Instagram feat. Check out what is it all about below..."
  },
  {
    "Title" : " Deepika padkone alone after separation with Karan Mehra; says 'I feel privileged'",
    "CategoryName"  : "Bollywood",
    "PublishedDate" : "Januaury 14 2022",
    "ImageAsset"    : "https://media2.bollywoodhungama.in/wp-content/uploads/2022/05/Cannes-2022-Deepika-Padukone-brings-drama-and-elegance-in-gold-and-black-Louis-Vuitton-gown-for-%E2%80%98Elvis%E2%80%99-premiere-1.jpg",
    "BlogContent"   : "At Karan Johar's Big Fat Bollywood Party: Salman Khan, Aishwarya And Abhishek Bachchan, Katrina Kaif And Vicky Kaushal",
  },
  {
  "Title" : " Ranbir Kapoor Promotes Mom Neetu's 'Jug Jugg Jeeyo' In Cutest Way At Bollywood Party",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/8pslgglbo4o5pyap_1653544249.jpeg",
  "BlogContent"   : "Ranbir Kapoor and Neetu Kapoor recently walked the red carpet of a Bollywood party. At the event, Ranbir also made a sweet gesture to promote 'Jug Jugg Jeeyo.'"
},
{
  "Title" :  "To the most generous soul I know! .. to the man who is my father .. my best friend .. and my mentor,wrote Alia Bhatt",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://c.ndtvimg.com/2022-05/ba8en3b_alia_625x300_25_May_22.jpg",
  "BlogContent"   : "Alia Bhatt Wishes Karan Johar, 50 Today, With Wedding Throwback: To the man who is my father."
},
{
  "Title" : " Genelia D'Souza Shines Bright In A Beautiful Abhinav Mishra Lehenga",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://tse2.mm.bing.net/th?id=OIP.L4nvMD_JPuKLTUgSDgktWQHaJQ&pid=Api&P=0&w=128&h=160",
  "BlogContent"   : "Genelia D'Souza Shines Bright In A Beautiful Abhinav Mishra LehengaKRITIKA SEHGALLAST UPDATED MAY 25 2022, 05:09 PM",

},
{
  "Title" : " Sidharth Malhotra Visits Kiara Advani On Jugjugg Jeeyo Sets",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://images.news18.com/ibnlive/uploads/2022/04/kiara-sid-16512124463x2.jpg?impolicy=website&width=510&height=356",
  "BlogContent"   : "Sidharth Malhotra-Kiara Advani Patch Up After She Invites Him for Bhool Bhulaiyaa 2 Screening"
},
{
  "Title" : " Hrithik Roshan and his ladylove Saba Azad walk hand-in-hand as they arrive at Karan Johar's 50th birthday bash",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://www.easterneye.biz/wp-content/uploads/2019/12/Hrithik-Roshan.jpg",
  "BlogContent"   : "Hrithik Roshan and his ladylove Saba Azad made a stunning appearance at Karan Johar's 50th birthday bash. The couple was twinning in black and walked hand-in-hand as they arrived at the venue. The duo happily posed as the paparazzi clicked their pictures. Here take a look at the photos:"
},
{
  "Title" : "  Rashmika Mandanna Turns Up The Heat In A Stunning Black Cutout Dres at karan johar's 50th birthday",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://cdn.bollywoodmdb.com/post/kjoanauyhty_1653472078375.jpg",
  "BlogContent":"Rashmika Mandanna Turns Up The Heat In A Stunning Black Cutout Dress",
},
{
  "Title" : " Actor Rana Daggubati and creator-led live entertainment commerce platform Roposo announced the launch of their co-created men’s grooming brand DCRAF",


  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://media.gettyimages.com/photos/actor-rana-daggubati-at-the-media-and-entertainment-business-conclave-picture-id93265409?b=1&k=6&m=93265409&s=594x594&w=0&h=CZVkFHMn9eTem2MxaX58saXBY6CvBqytfjGa0T5Htv4=",
  "BlogContent"   : "“Rana is one of the most fashionable contemporary male celebrities. He is followed by many for his style and is especially an inspiration to most Indian men. He likes to keep it real and authentic and believes that products should be simple and useful.",


},

    ])
  return (
    <div>
      <back.Provider value={[data,setData]}>
        {props.children }
      </back.Provider>
    </div>
  )
}

export default Api
