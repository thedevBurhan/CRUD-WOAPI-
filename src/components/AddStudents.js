import React, { useState } from "react";
import Base from "../Base/Base";
import {useHistory} from "react-router-dom"
const AddStudents = ({students, setStudents }) => {
    const history=useHistory();
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
//   console.log(students)
  const createstudent = () => {
    const newStudents = {
      name: name,
      batch: batch,
      qualification:qualification,
      gender: gender,
    };
    // console.log(students)
    setStudents([...students, newStudents]);
    history.push("/students")
  };

  return (
    <Base
    title={"Add New Students Details"}
    description={"We can able to add new students details here... "}>
    
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
            placeholder="Qualification"
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
          <button onClick={createstudent}>Add Student Detail</button>
        </div>
     
   
    </Base>
  );
};

export default AddStudents;
