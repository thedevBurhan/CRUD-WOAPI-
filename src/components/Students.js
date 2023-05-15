import React, {useState } from "react";
import Base from "../Base/Base";
import {useHistory} from "react-router-dom"


const Students = ({students,setStudents}) => {
    // console.log(students)
const history=useHistory()
   //  Delete functions

   const deleteStudDetail=(studid)=>{
      // console.log(studObj);
      const remainingStudents=students.filter((students,idx)=>idx!==studid)
      setStudents(remainingStudents);
   
   }
    return (
       <Base
       title={"Students Dashboard"}
       description={"This page content all student data"}
       >
            <div className="card-container">
                {students.map((students,idx)=>(
                 <div className="card" key={idx}>
                    <div className="content">

                 <h3 style={{color:"Red"}}>{students.name}</h3>
                 <div className="value">
                 <p><b>Batch:</b> {students.batch}</p>
                 <p><b>Gender:</b> {students.gender}</p>
                 <p><b>Qualification: </b>{students.qualification}</p>
                 </div>
                 
                 </div>
                 <div className="control">
                    <button onClick={()=>history.push(`/edit/${idx}`)}>Edit</button>{" "}
                    <button onClick={()=>deleteStudDetail(idx)}>Delete</button>
                 </div>
             </div>))}
               
            </div>
       
       </Base>
    )      
}
 
export default Students;