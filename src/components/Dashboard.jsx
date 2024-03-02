import Students from "./Students";
const Dashboard = ({ students, deleteStudent, EditStudent }) => {
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
                EditStudent={EditStudent}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
