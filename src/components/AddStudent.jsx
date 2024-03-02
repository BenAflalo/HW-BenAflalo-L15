import React, { useState } from "react";

const AddStudent = ({ students, setStudents }) => {
  const [studentData, setStudentData] = useState({
    id: "",
    name: "",
    age: "",
    major: "",
    university: "",
    averageGrade: "",
  });

  const handleChange = (event) => {
    setStudentData({ ...studentData, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const lastStudent = students.pop();
    let id = lastStudent.id;
    id++;
    students.push(lastStudent);
    studentData.id = id;
    setStudents((students) => [...students, studentData]);
  };
  return (
    <div className="form-container">
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
