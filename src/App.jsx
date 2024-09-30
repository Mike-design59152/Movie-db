import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from "./Pages/HomePage";
import GenresPages from "./Pages/GenresPages";
import NavBar from "./Components/NavBar";



function App() {

  return  <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
<Route path='/' element={<HomePage></HomePage>}></Route>
<Route path='/Genres' element={<GenresPages></GenresPages>}></Route>

    </Routes>
    
    
    </BrowserRouter>
      
    </>
  
}

export default App
