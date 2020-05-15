import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import { Smurfcontext } from "./contexts/smurfcontext";
import Listsmurfs from "./components/Listsmurfs";
import AddSmurf from "./components/Addsmurf";

const App = () => {
  const [smurfs, setSmurfs] = useState([]);



  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then((res) => {
      console.log(res.data[0].name);
      setSmurfs(res.data);
    });
  }, []);

  const addSmurf = newSmurf => {
 
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        console.log(res);
        setSmurfs([...smurfs, newSmurf]);
      })
      .catch(err => {
        console.error(err);
      });
       
  };


  return (
    <Smurfcontext.Provider value={{ addSmurf, smurfs }}>
      <div className="App">
        <Listsmurfs />
        <AddSmurf />
      </div>
    </Smurfcontext.Provider>
  );
};

export default App;
