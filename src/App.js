import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Science from './Science';
import Sports from './Sports';
import Technology from './Technology';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Card from './Card';


function App() {
  const routes = [{
    path: '/',
    component: Home,
  }
  ,{
    path: '/about',
    component: About,
  },{
    path: '/business',
    component: Business,
  }, {
    path: '/entertainment',
    component: Entertainment,
  }, {
    path: '/health',
    component: Health,
  }
  , {
    path: '/science',
    component: Science,
  }
  , {
    path: '/sports',
    component: Sports,
  }
  , {
    path: '/technology',
    component: Technology,
  }];
  
  const routeComponents = routes.map(({path, component}, key) => <Route path={path} element={component} key={key} />);
  const apiKey = process.env.REACT_APP_NEWS_API;
  const category = "business";
  
  return (
    <Router>
      
    <div className="App">
        <Navbar/>
        <div className='body-container'>
        </div>
        <Card apiKey={apiKey} category={category}></Card>
        <Routes>
        {routeComponents}
        </Routes>
    </div>
    </Router>
  );
}

export default App;
