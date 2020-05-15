import React, { useContext } from "react";
import { Smurfcontext } from "../contexts/smurfcontext";
import SmurfCard from "./Smurfcard";

const Listsmurfs = () => {
  const { smurfs } = useContext(Smurfcontext);
  return (
    <div>
      {smurfs.map((smurf) => (
        <SmurfCard key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

export default Listsmurfs;
