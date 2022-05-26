import React, { useContext } from "react";
import { back } from "./Components/Api";
const Bollywood = () => {
  const [data, setData] = useContext(back);

  return (
    <>
    <div className="contentPage">
      
      {data.map((item) => {
        return (
          <a href={item.url}>
            <div className="card">
              <img src={item.ImageAsset} alt="BollyImg" width='320px' height='200px' />
              <p>{item.Title}</p>
              <p>{item.BlogContent}</p>
              <p>{item.PublishedDate}</p>
              <hr />
            </div></a>
        );
      })}
      </div>
      <div className="right">
        
      </div>
    </>
  );
};

export default Bollywood;




