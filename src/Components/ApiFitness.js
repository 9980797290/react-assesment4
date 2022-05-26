import React, { createContext, useState } from "react";
export const fitness = createContext();
const ApiFitness = (props) => {
  const [dataFit, setDataFit] = useState([
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
            "id": "buzzfeed",
            "name": "Buzzfeed"
            },
            "author": "Liz Richardson",
            "title": "People Who Accidentally Woke Up Mid-Surgery Are Sharing What Happened, And I Truly Have No Words - BuzzFeed",
            "description": "\"I woke up during a gastric bypass surgery in 2001. I couldn't hear anything and knew my eyes were taped shut. It was the worst pain of my life — nothing has ever come close to it.\"",
            "url": "https://www.buzzfeed.com/lizmrichardson/people-who-woke-up-mid-surgery-stories",
            "urlToImage": "https://hotgadget.net/wp-content/uploads/2021/03/pexels-photo-4498479-1.jpeg",
            "publishedAt": "2022-05-24T22:46:03Z",
            "content": "\"I didn't feel any pain, though, since my mouth was probably shot up full of Novocain. I kind of wanted to not be in that situation, so I mustered all of my strength and twitched my finger a bit. Eit… [+486 chars]"
            },
           {
            "source": {
            "id": null,
            "name": "Daily Mail"
            },
            "author": "John Ely Senior",
            "title": "One previous UK patient had monkeypox in body for 76 days - Daily Mail",
            "description": "British experts found one monkeypox patient suffered a post-sex relapse six weeks after being given the all clear, in a study of the UK's seven previous monkeypox cases.",
            "url": "https://www.dailymail.co.uk/news/article-10849249/One-previous-UK-patient-monkeypox-body-76-days.html",
            "urlToImage": "https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/07/Hyperice.jpg",
            "publishedAt": "2022-05-24T22:30:46Z",
            "content": "Monkeypox may be able to linger in the body for 10 weeks even after the tell-tale rash has disappeared, scientists say. \r\nExperts don't believe patients can be contagious for that length of time but … [+9168 chars]"
            },
           {
            "source": {
            "id": null,
            "name": "Best Life"
            },
            "author": "Kali Coleman",
            "title": "Top Virus Expert Warns We Must Do These 3 Things to Stay \"Safe\" - Best Life",
            "description": "As COVID continues to rise and a potential fall surge looms, one virus expert is giving advice to Americans on how we can stay safe.",
            "url": "http://bestlifeonline.com/virus-expert-stay-safe-covid-news/",
            "urlToImage": "https://demotix.com/wp-content/uploads/2020/04/Fitness-Gadgets2.jpg",
            "publishedAt": "2022-05-24T21:45:38Z",
            "content": "Many of us may have celebrated the end of the COVID pandemic a bit too early. Despite a two-month decline, the virus is back on the rise thanks to widely circulating subvariants of the Omicron varian… [+3749 chars]"
            },
           {
            "source": {
            "id": null,
            "name": "Neurosciencenews.com"
            },
            "author": "https://www.facebook.com/neurosciencenews",
            "title": "Mechanism Shared by Mutations in Different Genes Associated With Autism, Schizophrenia, and Other Conditions Discovered - Neuroscience News",
            "description": "Researchers have identified a mechanism shared by mutations in the SHANK3 and ADNP genes. The genes have been associated with the development of ASD and schizophrenia.",
            "url": "https://neurosciencenews.com/mechanism-asd-schizophrenia-genetics-20656/",
            "urlToImage": "https://tse2.mm.bing.net/th?id=OIP.e4NvWdUNbubSiMNbGazdLwHaEc&pid=Api&P=0&w=283&h=170",
            "publishedAt": "2022-05-24T21:36:23Z",
            "content": "Summary: Researchers have identified a mechanism shared by mutations in the SHANK3 and ADNP genes. The genes have been associated with the development of ASD and schizophrenia.\r\nSource: Tel Aviv Univ… [+7529 chars]"
            },

            {
              "source": {
              "id": null,
              "name": "Neurosciencenews.com"
              },
            "author": "The Sun",
            "title": "Woman's life is saved after she spotted something unusual in mirror - New York Post ",
            "description": "A woman has recalled the moment she spotted something unusual in the mirror which ended up saving her life.",
            "url": "https://tse3.mm.bing.net/th?id=OIP.CZgQkNaaiv_vDFq4QinCzQHaFL&pid=Api&P=0&w=219&h=153",
            "urlToImage": "https://tse1.mm.bing.net/th?id=OIP.7rWL9fkx0mIdohn0vNQWcwHaEK&pid=Api&P=0&w=328&h=185",
            "publishedAt": "2022-05-24T23:57:00Z",
            "content": "A woman has recalled the moment she spotted something unusual in the mirror which ended up saving her life. \r\nSusan Hunter-Dabson was blowdrying her hair and noticed something odd when she lifted her… [+2971 chars]",
          
            },
  ]);
  return (
    <div>
      <fitness.Provider value={[dataFit, setDataFit]}>
        {props.children}
      </fitness.Provider>
    </div>
  );
};
export default ApiFitness







