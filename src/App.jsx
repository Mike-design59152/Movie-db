import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from "./Pages/HomePage";
import GenresPages from "./Pages/GenresPages";
import NavBar from "./Components/NavBar";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import GenresDetails from "./Pages/GenreDetails";
import ActeursPages from "./Pages/ActeursPages";
import ActeursDetails from "./Pages/ActeursDetails";



function App() {

  return  <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
<Route path='/' element={<HomePage></HomePage>}></Route>
<Route path='/Genres' element={<GenresPages></GenresPages>}></Route>
<Route path='/movie/:id' element={<MovieDetailsPage></MovieDetailsPage>}></Route>
<Route path='/genre/:id' element={<GenresDetails></GenresDetails>}></Route>
<Route path='/Acteurs' element={<ActeursPages></ActeursPages>}></Route>
<Route path='/acteurs/:id' element={<ActeursDetails></ActeursDetails>}></Route>

    </Routes>
    
    
    </BrowserRouter>
      
    </>
  
}

export default App
