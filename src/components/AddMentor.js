import React, { useState } from "react";
import Base from "../Base/Base";
import {useHistory} from "react-router-dom"
const AddMentor = ({mentor, setMentor }) => {
    const history=useHistory();
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
//   console.log(mentor)
  const createMentor = () => {
    const newmentor = {
      name: name,
      batch: batch,
      experience:experience,
      gender: gender,
    };
    // console.log(mentor)
    setMentor([...mentor, newmentor]);
    history.push("/mentor")
  };

  return (
    <Base
    title={"Add New mentor Details"}
    description={"We can able to add new mentor details here... "}>
    
        <div className="cards">
          <input
            placeholder="Enter Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Batch"
            type="text"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />
          <input
            placeholder="Gender"
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            placeholder="Experience in years"
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <button onClick={createMentor}>Add Mentor Detail</button>
        </div>
     
   
    </Base>
  );
};

export default AddMentor;
