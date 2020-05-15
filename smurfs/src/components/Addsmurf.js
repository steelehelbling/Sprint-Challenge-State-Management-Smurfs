import React, { useContext, useState } from "react";
import { Smurfcontext } from "../contexts/smurfcontext";


const AddSmurf = () => {
  const { addSmurf } = useContext(Smurfcontext);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addSmurf(newSmurf);
  };



  const handleChanges = (e) => {
    const smurf = e.target.name;
    setNewSmurf({
      ...newSmurf,
      [smurf]: e.target.value,
      id: Date.now(),
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Smurf name here"
          onChange={handleChanges}
        ></input>
        <input
          type="text"
          name="age"
          placeholder="Smurf age here"
          onChange={handleChanges}
        ></input>
        <input
          name="height"
          placeholder="Smurf height here"
          type="text"
          onChange={handleChanges}
        ></input>

        <button onClick={handleSubmit} type="submit">
          Add Smurf
        </button>
      </form>
    </div>
  );
};

export default AddSmurf;
