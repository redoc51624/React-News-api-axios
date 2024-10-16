import React from 'react';
import Card from './Card';

const Entertainment = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const category = "entertainment";
  return (
    <div>
      <h2>Entertainment News</h2>
      <Card key={category} apiKey={apiKey} category={category}>about card</Card>
    </div>
  )
}

export default Entertainment
