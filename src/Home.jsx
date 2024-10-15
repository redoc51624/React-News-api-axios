import React from 'react';
import Card from './Card';

const Home = () => {
    
    // const categories = ["business","entertainment","health","science","sports","technology"];
    const apiKey = process.env.REACT_APP_NEWS_API;

    return (
    <div>
      <Card apiKey={apiKey}/>
    </div>
  )
}

export default Home
