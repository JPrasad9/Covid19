import NavBar from './navbar'
import Home from './home'
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="container-full width h-100">
      <NavBar/>
      <Home/>
    <div className="container">
    </div> 
    </div>
  );
}

export default App;
