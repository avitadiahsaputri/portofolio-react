// import { useState } from 'react'
// import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";


function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
