// if | else | else if

let number = 0;

if (number > 0) {
  console.log("Number is positive.");
} else if (number < 0) {
  console.log("Number is negative.");
} else {
  console.log("Number is 0.");
}

// switch

let day = 1;

switch (day) {
  case 1:
    console.log("Day is Sunday");
    break;

  case 2:
    console.log("Day is Monday");
    break;

  case 3:
    console.log("Day is Tuesday");
    break;

  case 4:
    console.log("Day is Wednesday");
    break;

  case 5:
    console.log("Day is Thursday");
    break;

  case 6:
    console.log("Day is Friday");
    break;

  case 7:
    console.log("Day is Saturday");
    break;

  default:
    console.log("Invalid number");
}

// loops

// 01) for loop

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// 02) while loop

let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}

// 03) do-while loop

let j = 0;

do {
  console.log(j);
  j++;
} while (j <= 5);

// break

for (let i = 0; i < 5; i++) {
  console.log(i);

  if (i == 3) break;
}

// break

for (let i = 0; i < 5; i++) {
  if (i == 3) continue;

  console.log(i);
}

// double equals (==)
// Only check the values do not check the data type

let num = "5";

if (num == 5) {
  console.log("Double equals: ", true);
}

// triple equals (===)
// Check not only values also the data type

if (num === 5) {
  console.log("Triple equals: ", true);
}
