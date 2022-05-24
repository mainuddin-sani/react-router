import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Header from './components/Header/Header'
import User from './components/User/User';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/user/' element={<User/>}></Route>
          <Route path='*' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
