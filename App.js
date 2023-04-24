import 'bootstrap/dist/css/bootstrap.css';
 import React from "react";
 import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";
import Body from "./src/components/Body/Body";

const MyApp = () => (
  <div>
   <Header/>
   <Body/>
   <Footer/>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp/>);


