function GradingSystem(mark) {
  if (mark < 0 || mark > 100) return "Invalid";
  else if (mark < 35) return "F";
  else if (mark < 55) return "S";
  else if (mark < 65) return "C";
  else if (mark < 75) return "B";
  else if (mark < 80) return "A";
  else if (mark < 90) return "A-";
  else if (mark < 101) return "A+";
}

function getStudentGrade(name, mark) {
  console.log(name + "'s Grade for", mark, "->", GradingSystem(mark));
}

getStudentGrade("Kamal", 92);
getStudentGrade("Nimal", 73);
getStudentGrade("Saman", 78);
getStudentGrade("Gayanuka", 100);
getStudentGrade("Bulegoda", 12);
getStudentGrade("Sumudu", 38);
getStudentGrade("Kaluwa", 59);
getStudentGrade("Kota", 62);
getStudentGrade("Yasith", -10);
getStudentGrade("Riwiru", 5);
