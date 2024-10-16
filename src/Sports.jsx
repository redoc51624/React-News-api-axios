import React from 'react';
import Card from './Card';

const Sports = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const category = "health";
  return (
    <div>
      <h2>Health News</h2>
      <Card key={category} apiKey={apiKey} category={category}>about card</Card>
    </div>
  )
}

export default Sports
