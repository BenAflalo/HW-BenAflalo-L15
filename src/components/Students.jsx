const Students = (props) => {
  const { student } = props;
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.university}</td>
      <td>{student.averageGrade}</td>
    </tr>
  );
};
export default Students;
