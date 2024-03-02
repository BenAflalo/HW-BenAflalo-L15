import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import React, { useState } from "react";
import DbStudents from "./data/students";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(DbStudents);

  const deleteStudent = (studentId) => {
    const updatedStudents = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudents);
  };
  const EditStudent = (studentId) => {
    const studentToEdit = students.filter(
      (student) => student.id === studentId
    );
  };
  return (
    <main>
      <Header />
      <Dashboard
        students={students}
        deleteStudent={deleteStudent}
        EditStudent={EditStudent}
      />
      <AddStudent
        students={students}
        setStudents={setStudents}
        EditStudent={EditStudent}
      />
      <Footer />
    </main>
  );
}

export default App;
