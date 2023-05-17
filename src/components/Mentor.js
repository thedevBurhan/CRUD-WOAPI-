import React, { useState } from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";
const Mentor = ({ mentor, setMentor }) => {
  // console.log(mentor)
  const history = useHistory();
  //  Delete functions

  const deleteMenDetail = (menid) => {
    // console.log(studObj);
    const remainingmentor = mentor.filter((mentor, idx) => idx !== menid);
    setMentor(remainingmentor);
  };
  return (
    <Base
      title={"Mentor Dashboard"}
      description={"This page content all mentor data"}
    >
      <p>
        <b>Note:</b>If you make any <b>changes</b> go to Home/Dashboard and
        refresh the tab to see changes...
      </p>
      <br />
      <div className="card-container">
        {mentor.map((mentor, idx) => (
          <div className="card" key={idx}>
            <div className="content">
              <h3 style={{ color: "Red" }}>{mentor.name}</h3>
              <div className="value">
                <p>
                  <b>Batch:</b> {mentor.batch}
                </p>
                <p>
                  <b>Gender:</b> {mentor.gender}
                </p>
                <p>
                  <b>Experience in years: </b>
                  {mentor.experience}
                </p>
              </div>
            </div>
            <div className="control">
              <button onClick={() => history.push(`/edits/${idx}`)}>
                Edit
              </button>{" "}
              <button onClick={() => deleteMenDetail(idx)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
};

export default Mentor;
