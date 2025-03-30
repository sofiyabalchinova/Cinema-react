import { Header } from "./layout"
import { Footer } from "./layout"
import { MovieDetails } from "./layout/MovieDetails"
import { MovieGrid } from "./layout/MovieGrid"
import {HashRouter as Router, Routes, Route} from "react-router"

// import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path = '/' element = {<MovieGrid />} />
          <Route path = '/movie/:id' element = {<MovieDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
