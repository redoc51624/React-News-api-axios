import React from 'react';
import Card from './Card';

const Technology = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const category = "technology";
  return (
    <div>
      <h2>Technology News</h2>
      <Card key={category} apiKey={apiKey} category={category}>about card</Card>
    </div>
  )
}

export default Technology
