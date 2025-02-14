import { useEffect } from 'react'
import {ToastContainer} from "react-toastify"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Home from './component/Home/Home';

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <ToastContainer 
        position="top-center"  
        autoClose={3000}  // Toast will disappear after 4 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
          <Routes>
            <Route path="/" element={<Home />}/>

          </Routes>
      </Router>
    </>
  );
}

export default App
