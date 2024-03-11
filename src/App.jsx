import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import React, { useEffect, useState } from "react";
import DbStudents from "./data/students";
import AddStudent from "./components/AddStudent";
import { userService } from "./services/userService";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { storageService } from "./services/storageService";

function App() {
  // --- states----
  const [students, setStudents] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [studentData, setStudentData] = useState({
    id: "",
    name: "",
    age: "",
    major: "",
    university: "",
    averageGrade: "",
  });
  // ---- useEffect ----
  useEffect(() => {
    const loggedInUser = storageService.getLoggedInUser();

    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
    }
  }, []);
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await userService.getStudentAsync();
        setStudents(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAsync();
  }, []);
  // ----- functions ----
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
  const handleLogout = () => {
    userService.logout();
    setLoggedInUser(null);
  };

  const handleAuth = (username, password, isRegister = false, email = "") => {
    if (isRegister) {
      userService.createUser(username, email, password);
      setShowRegister(false);
    } else {
      const user = userService.login(username, password);
      if (user === false) {
        alert("Invalid credentials");
        return;
      } else if (user === null) {
        alert("User doesn't exist");
        setShowRegister(true);
      }
      setLoggedInUser(user);
    }
  };

  return (
    <main>
      <Header handleLogout={handleLogout} loggedInUser={loggedInUser} />
      {!loggedInUser ? (
        showRegister ? (
          <RegisterForm
            handleAuth={handleAuth}
            setShowRegister={setShowRegister}
          />
        ) : (
          <LoginForm
            handleAuth={handleAuth}
            setShowRegister={setShowRegister}
          />
        )
      ) : (
        <>
          <AddStudent
            students={students}
            setStudents={setStudents}
            studentData={studentData}
            setStudentData={setStudentData}
          />
          <Dashboard
            students={students}
            deleteStudent={deleteStudent}
            fillStudentForm={fillStudentForm}
            loggedInUser={loggedInUser}
          />
        </>
      )}
      <Footer />
    </main>
  );
}

export default App;
