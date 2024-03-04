import Button from "./button";

const Students = ({ student, id, deleteStudent, fillStudentForm }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.university}</td>
      <td>{student.averageGrade}</td>
      <td className="action">
        <Button onClick={() => deleteStudent(id)} className="btn-delete">
          Delete
        </Button>
      </td>
      <td className="action">
        <Button onClick={() => fillStudentForm(id)} className="btn-edit">
          Edit
        </Button>
      </td>
    </tr>
  );
};
export default Students;
