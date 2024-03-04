import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import React, { useState } from "react";
import DbStudents from "./data/students";
import AddStudent from "./components/AddStudent";
import getStudentAsync from "./services/userService";

function App() {
  console.log(getStudentAsync());
  const [students, setStudents] = useState(DbStudents);
  const [studentData, setStudentData] = useState({
    id: "",
    name: "",
    age: "",
    major: "",
    university: "",
    averageGrade: "",
  });

  const deleteStudent = (studentId) => {
    const updatedStudents = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudents);
  };
  const fillStudentForm = (studentId) => {
    const studentToEdit = students.filter(
      (student) => student.id === studentId
    );
    const student = studentToEdit.pop();
    setStudentData(student);
  };

  return (
    <main>
      <Header />
      <Dashboard
        students={students}
        deleteStudent={deleteStudent}
        fillStudentForm={fillStudentForm}
      />
      <AddStudent
        students={students}
        setStudents={setStudents}
        studentData={studentData}
        setStudentData={setStudentData}
      />
      <Footer />
    </main>
  );
}

export default App;
