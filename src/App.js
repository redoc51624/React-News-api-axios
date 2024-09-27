import './App.css';
import Navbar from './Navbar';
import Card from './Card';



function App() {
  const apiKey = process.env.REACT_APP_NEWS_API
  return (
    <div className="App">
        <Navbar/>
        <div className='body-container'>
        <Card apiKey={apiKey}/>
        </div>
        
    </div>
  );
}

export default App;
