import React, { useState } from "react";
import Button from "./button";

const AddStudent = ({ students, setStudents, studentData, setStudentData }) => {
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
    clearData();
  };
  const clearData = () => {
    setStudentData({
      id: "",
      name: "",
      age: "",
      major: "",
      university: "",
      averageGrade: "",
    });
  };
  const editStudent = (event) => {
    event.preventDefault();
    const studentId = studentData.id;
    setStudents(
      students.map((student) => {
        if (student.id === studentId) {
          setStudentData({
            ...studentData,
            [event.target.id]: event.target.value,
          });
          return studentData;
        } else {
          return student;
        }
      })
    );
    clearData();
  };

  return (
    <div className="form-container">
      <h3>Add student</h3>

      <form onSubmit={studentData.id === "" ? handleSubmit : editStudent}>
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
        <div className="btn-div">
          {studentData.id === "" ? (
            <Button className="btn-submit" type="submit">
              Submit
            </Button>
          ) : (
            <Button className="btn-save" type="submit">
              Save Changes
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
