import React, { useState } from "react";

const AddStudent = (props) => {
  const { setStudentData, studentData, setNewStudent, studentArry } = props;
  const handleChange = (event) => {
    setStudentData({ ...studentData, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const lastStudent = studentArry.pop();
    let id = lastStudent.id;
    id++;
    studentArry.push(lastStudent);
    studentData.id = id;
    studentArry.push(studentData);
    const newStudentArry = studentArry;
    setNewStudent(newStudentArry);
    console.log(newStudentArry); //you can see it works just not rendering
  };
  return (
    <div>
      <h3>Add student</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Student name</label>
        <input
          type="text"
          placeholder="Full name"
          id="name"
          onChange={handleChange}
          value={studentData.name}
        />
        <label htmlFor="age">Student age</label>
        <input
          type="text"
          placeholder="Age"
          id="age"
          onChange={handleChange}
          value={studentData.age}
        />
        <label htmlFor="major">Student major</label>
        <input
          type="text"
          placeholder="Major"
          id="major"
          onChange={handleChange}
          value={studentData.major}
        />
        <label htmlFor="university">Student university</label>
        <input
          type="text"
          placeholder="University"
          id="university"
          onChange={handleChange}
          value={studentData.university}
        />
        <label htmlFor="averageGrade">Student average grade</label>
        <input
          type="text"
          placeholder="Average grade"
          id="averageGrade"
          onChange={handleChange}
          value={studentData.averageGrade}
        />
        <button>Add student</button>
      </form>
    </div>
  );
};

export default AddStudent;
