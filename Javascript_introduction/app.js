let age = 32;
let userName = "max";
let hobby1;
let hobby2;
//많은 변수를 사용을 선언 해야될때, 배열객체로 선언을 한다.
//배열에 string과 number를 같이 혼합해서 사용이 가능
let hobbies = ["sports", "cooking", "reading"];
let job = {
  title: "developer",
  place: "new york",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears() {
  // adultYears = age - 18; 이렇게 사용가능,but 좀더 간결하게는
  return age - 18;
}

totalAdultYears = calculateAdultYears();
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears();
// adultYears = age - 18;
alert(totalAdultYears);

// 매게변수
let totalAdultYear;

function calculateAdultYears(userage) {
  // adultYears = age - 18; 이렇게 사용가능,but 좀더 간결하게는
  return userage - 18;
}

totalAdultYears = calculateAdultYears(32); //원하는 값을 넣어도 되고, 처음 선언하였던 age를 넣어도 된다.
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
// adultYears = age - 18;
alert(totalAdultYears);
