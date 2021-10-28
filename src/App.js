import { BrowserRouter,Route } from 'react-router-dom'
import Home from './routes/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/">
          <Home/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
