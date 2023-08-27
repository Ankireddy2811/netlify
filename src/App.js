import {BrowserRouter,Routes,Route} from "react-router-dom" 

import Slide from "./components/Slide"
import TokenCont from "./components/TokenCont"

import PairAddress from "./components/PairAddress"


import "./App.css"

const App = ()=>(
  <div className="app-container">
    <div className="main-container">
    <BrowserRouter>
    <Slide/>
    <Routes>
       <Route exact path="/" element={<TokenCont />} />
       <Route exact path="/pairs" element={<PairAddress />} />
    </Routes>
    </BrowserRouter>
    </div>
    <div className="colored-box"></div>
  </div>
  )


export default App;
