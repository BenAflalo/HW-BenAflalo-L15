import Students from "./Students";
const Dashboard = ({ students }) => {
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
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <Students student={student} key={student.id} id={student.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
