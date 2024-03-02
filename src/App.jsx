import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import React, { useState } from "react";
import DbStudents from "./data/students";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(DbStudents);

  const deletStudent = () => {};

  return (
    <main>
      <Header />
      <Dashboard students={students} />
      <AddStudent students={students} setStudents={setStudents} />
      <Footer />
    </main>
  );
}

export default App;
