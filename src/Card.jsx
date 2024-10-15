import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';

// const Fetch = () => {
//     const [news, setNews] = useState([]);
//     useEffect(() => {
//       fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c6d0646c9ad54fb880cf03351dc617cd')
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {   
//           console.log(data);
//           setNews(data);
//         });
//     }, []);
// }


// const card = {
//     img :"im1",
//     title: "title 1",
//     text: "Some quick example text to build on the card title and make up the bulk of the card's content."
// }

const Card = (props) => {
  const [news, setNews] = useState(null);
  const noImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}`;

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setNews(response.data.articles);
      });
  })

  return (
    <>
      <div className="Card-container">
        {
          !news ? null : news.map((data) => (
            <div className="card">
              {!data.urlToImage ?
                <img src={noImage} className="card-img-top" alt="image" />
                : <img src={data.urlToImage} className="card-img-top" alt="..." />

              }
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.content}</p>
                <a href={data.url} className="btn btn-primary">Details</a>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Card
