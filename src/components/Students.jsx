import Button from "./button";

const Students = ({ student, id }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.university}</td>
      <td>{student.averageGrade}</td>
      <td className="action">
        <Button onClick={() => removePost(id)} className="btn-delete">
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default Students;
