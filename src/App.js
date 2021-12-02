import { BrowserRouter,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './routes/Home'
import About from './routes/About';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
