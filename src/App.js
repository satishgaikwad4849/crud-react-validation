import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './components/Admin'
import Signin from './components/signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Signin />}></Route>
          <Route exact path='/admin' element={ <Admin />}></Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;