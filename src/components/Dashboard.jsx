import { useState } from "react";
import Students from "./Students";
import Admin from "./Admin";
import { storageService } from "../services/storageService";

const Dashboard = ({
  students,
  deleteStudent,
  fillStudentForm,
  loggedInUser,
}) => {
  const [showAdmin, setShowAdmin] = useState(loggedInUser.isAdmin);
  const [users, setUsers] = useState(storageService.getUsers());

  const deleteUser = (id) => {
    const updatedUsers = storageService.deleteUser(id);
    setUsers(updatedUsers);
  };

  return (
    <>
      <div className="container">
        <h2>Students list</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Major</th>
              <th>University</th>
              <th>Average Grade</th>
              <th>Delete Student</th>
              <th>Edit Student</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <Students
                student={student}
                key={student.id}
                id={student.id}
                deleteStudent={deleteStudent}
                fillStudentForm={fillStudentForm}
              />
            ))}
          </tbody>
        </table>
        {showAdmin && (
          <Admin users={users} deleteUser={deleteUser} setUsers={setUsers} />
        )}
      </div>
    </>
  );
};

export default Dashboard;
