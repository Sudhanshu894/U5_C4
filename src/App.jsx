import { Routes,Route } from "react-router-dom"
import { Home } from "./Components/pages/Home"
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/search" element={<Search/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
