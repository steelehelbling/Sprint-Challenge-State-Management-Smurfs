import React, { useContext } from "react";
// import { Smurfcontext } from "../contexts/smurfcontext";


 


const SmurfCard = (props) => {

// const { SmurfRemoved, foundSmurf } = useContext(Smurfcontext);
  return (
    <div className='card'>
      <h2>{props.smurf.name}</h2>
      <h4>{props.smurf.age}</h4>
      <h4>{props.smurf.height}</h4>
      {/* <button>
        remove
      </button> */}
    </div>
  );
};

export default SmurfCard;
