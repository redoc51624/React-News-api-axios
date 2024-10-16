import React from 'react';
import Card from './Card';

const Business = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const category = "business";
  return (
    <div>
      <h2>Business News</h2>
      <Card key={category} apiKey={apiKey} category={category}>about card</Card>
    </div>
  )
}

export default Business
