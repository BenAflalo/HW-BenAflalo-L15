import React, { useEffect, useState } from "react";
import { userService } from "../services/userService";
import AddStudent from "../components/AddStudent";
import Dashboard from "../components/Dashboard";
import { useUser } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const [students, setStudents] = useState([]);
  const [studentData, setStudentData] = useState({
    id: "",
    name: "",
    age: "",
    major: "",
    university: "",
    averageGrade: "",
  });
  const { loggedInUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [navigate, loggedInUser]);
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
  );
};

export default DashboardPage;
