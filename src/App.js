import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import  Home  from "./pages/Home.js";
import  AddStudent  from "./pages/AddStudent.js";
import  EditStudent  from "./pages/EditStudent.js";

function App() {
  return (
    
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<AddStudent />}/>
          <Route path='/edit' element={<EditStudent />}/>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
