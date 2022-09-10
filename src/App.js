import "./App.css";
import Register from "./Pages/Register";
import Home from "./Pages/Home"
import Login  from "./Pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/">
           <Route index element={<Home/>} />
           <Route path="login" element={<Login/>} />
           <Route path="Register" element={<Register/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
