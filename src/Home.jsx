import React from 'react';
import Card from './Card';

const Home = () => {
    
    // const categories = ["business","entertainment","health","science","sports","technology"];
    const apiKey = process.env.REACT_APP_NEWS_API;
    const category = "general";
    return (
    <div>
      <h2>All top-headlines</h2>
      <Card key={category} apiKey={apiKey} category={category}>about card</Card>
    </div>
  )
}

export default Home
