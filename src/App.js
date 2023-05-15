import "./App.css";
import React,{useState} from "react";
import data from "./Data/data";
import Base from "./Base/Base";
import AddStudents from "./components/AddStudents";
import Students from "./components/Students";
import {Switch,Route} from "react-router-dom"
import UpdateStudentsDetails from "./components/UpdateStudentsDetails";
import NoPage from "./components/NoPage";
import Dashboard from "./components/Dashboard";
import data1 from "./Data/data1";
import Mentor from "./components/Mentor";
import AddMentor from "./components/AddMentor";
import UpdateMentorDetails from "./components/UpdateMentorDetails"
function App() {
  const [students,setStudents]=useState(data);
  const[mentor,setMentor]=useState(data1);
  return (

    <div className="App">
      <Switch>
      <Route exact path="/">
          <Dashboard/>
        </Route>
        <Route path="/students">
        <Students
         students={students}
         setStudents={setStudents} />
        </Route>
        <Route path="/add">
          <AddStudents
          students={students}
          setStudents={setStudents}/>
        </Route>
        <Route path="/edit/:id/">
          <UpdateStudentsDetails
           students={students}
           setStudents={setStudents}/>
        </Route>
        <Route path="/mentor">
        <Mentor
         mentor={mentor}
         setMentor={setMentor} />
        </Route>
        <Route path="/adds">
          <AddMentor
           mentor={mentor}
           setMentor={setMentor}/>
        </Route>
        <Route path="/edits/:idx/">
          <UpdateMentorDetails
            mentor={mentor}
            setMentor={setMentor}/>
        </Route>
        <Route path="**">
          <NoPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
