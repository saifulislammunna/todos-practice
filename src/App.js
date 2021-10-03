 
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <MyLineChart></MyLineChart>
        <Switch>
       
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/about">
             <About></About>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
