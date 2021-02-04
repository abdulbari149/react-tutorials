import React from "react";
import Student from "./Student";

function Students() {
  const students = [
    {
      id: 1,
      name: "Aslam",
      degree: "BSCS student",
      course: "Web Programming with React JS",
    },{
      id: 2,
      name: "Amjad",
      degree: "BE Mechanical Engineering",
      course: "Calculus 1",
    },
    {
      id: 3,
      name: "Hafeez",
      degree: "BSCS student",
      course: "Python Programming",
    }
  ];
  return (
    <div>
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
    </div>
  );
}

export default Students;
