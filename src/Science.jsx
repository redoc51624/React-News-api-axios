import React from 'react';
import Card from './Card';

const Science = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const category = "science";
  return (
    <div>
      <h2>Science News</h2>
      <Card key={category} apiKey={apiKey} category={category}>about card</Card>
    </div>
  )
}

export default Science
