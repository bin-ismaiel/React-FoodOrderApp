import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Foods from "./Foods";
import React, { useState } from "react";
export const totalContext = React.createContext();
function App() {
  const [orders, setOrders] = useState(0);
  const contextVal = {
    setOrders: setOrders,
    orders: orders,
  };
  return (
    <div className="App">
      <totalContext.Provider value={contextVal}>
        <Header />
        <Banner />
        <Foods />
      </totalContext.Provider>
    </div>
  );
}

export default App;
