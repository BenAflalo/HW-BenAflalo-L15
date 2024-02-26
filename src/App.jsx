import students from "./data/students";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import React, { useState } from "react";

function App() {
  const [studentArry, setNewStudent] = useState(students);

  const [studentData, setStudentData] = useState({
    id: "",
    name: "",
    age: "",
    major: "",
    university: "",
    averageGrade: "",
  });

  return (
    <main>
      <Header />
      <Dashboard
        studentData={studentData}
        setStudentData={setStudentData}
        studentArry={studentArry}
        setNewStudent={setNewStudent}
      />
      <Footer />
    </main>
  );
}

export default App;
