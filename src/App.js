import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./component/Menu";
import Music from "./component/Music";
import About from "./component/About";
import Pnf from "./component/Pnf"
import Track from "./component/Track";


function App(props) {
  return(
    <BrowserRouter>
    <Menu/>

      <Routes>
        <Route path={`/`} element={<Music/>} />
        <Route path={`/about`} element={<About/>} />
        <Route path={`/tracks/artist/:id`} element={<Track/>} />
        <Route path={`/*`} element={<Pnf/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App