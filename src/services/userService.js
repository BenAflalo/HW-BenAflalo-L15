import students from "../data/students";

async function getStudentAsync() {
  return new Promise((resolve, reject) => {
    resolve(students);
    reject(Error("Promise rejected"));
  });
}

export default getStudentAsync;
