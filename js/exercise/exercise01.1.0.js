let StudentArray = [
  {
    name: "nadee",
    mark: 92,
  },
  {
    name: "dinu",
    mark: 73,
  },
  {
    name: "chami",
    mark: 78,
  },
  {
    name: "Ashen",
    mark: 100,
  },
  {
    name: "Aravinda",
    mark: 12,
  },
  {
    name: "Sumudu",
    mark: 38,
  },
  {
    name: "Manawadu",
    mark: 59,
  },
  {
    name: "Gaganatharu",
    mark: 5,
  },
  {
    name: "Sachindu",
    mark: 62,
  },
  {
    name: "kamal",
    mark: -10,
  },
];

for (let i = 0; i < StudentArray.length; i++) {
  console.log(getStudentGrade(StudentArray[i].name, StudentArray[i].mark));
}

function calculateGrade(marks) {
  if (marks >= 90 && marks <= 100) {
    return "A+";
  } else if (marks >= 80 && marks <= 89) {
    return "A-";
  } else if (marks >= 75 && marks <= 79) {
    return "A";
  } else if (marks >= 65 && marks <= 74) {
    return "B";
  } else if (marks >= 55 && marks <= 64) {
    return "C";
  } else if (marks >= 35 && marks <= 54) {
    return "S";
  } else if (marks < 35 && marks >= 0) {
    return "F";
  } else {
    return "Invalid";
  }
}

function getStudentGrade(studentName, marks) {
  return studentName + "'s grade for " + marks + " : " + calculateGrade(marks);
}
