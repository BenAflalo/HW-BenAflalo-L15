import Students from "./Students";
import AddStudent from "./AddStudent";
const Dashboard = (props) => {
  const { setStudentData, studentData, setNewStudent, studentArry } = props;
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
            </tr>
          </thead>
          <tbody>
            {studentArry.map((student) => (
              <Students student={student} key={student.id} />
            ))}
          </tbody>
        </table>
        <div className="form-container">
          <AddStudent
            studentData={studentData}
            setStudentData={setStudentData}
            studentArry={studentArry}
            setNewStudent={setNewStudent}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
