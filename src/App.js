import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Routes>
   
    
    <Route exact path='/' element={ <Home /> } ></Route> 
    <Route exact path='/blog/:id' element={ <Blog /> } ></Route> 
    

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
