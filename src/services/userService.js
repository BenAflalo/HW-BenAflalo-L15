import students from "../data/students";

async function getStudentAsync() {
  new Promise((resolve, reject) => {
    if (students !== null || "undefined") {
      resolve(students);
      return students;
    } else {
      reject(Error("Promise rejected"));
    }
  });
}

export default getStudentAsync;
