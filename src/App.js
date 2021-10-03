 
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Todos from './components/Todos/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound/NotFound';
import Todo from './components/Todo/Todo';
import TodoDetail from './components/TodoDetail/TodoDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
         
        <Switch>
       
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/about">
             <About></About>
          </Route>
          <Route path="/todos">
            <Todos></Todos>
          </Route>
          <Route path="/charts">
            <MyLineChart></MyLineChart>
          </Route>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/todo/:id">
              <TodoDetail></TodoDetail>
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
