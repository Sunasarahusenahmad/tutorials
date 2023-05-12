import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import AddEdit from "./Components/AddEdit.js";
import PageNotFound from "./Components/PageNotFound.js";
import View from "./Components/View.js";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Routes>
        
          <Route path="/" element={<Home />}> </Route>

          <Route path="/adduser" element={<AddEdit />}> </Route>

          <Route path="/update/:id" element={<AddEdit />}> </Route>

          <Route path="/view/:id" element={<View />}> </Route>

          <Route path="/*" element={<PageNotFound />}> </Route>

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
