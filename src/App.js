import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter >

      );
}

      export default App;
