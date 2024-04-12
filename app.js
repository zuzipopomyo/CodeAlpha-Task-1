function calculateAge() {
  var birthDate = document.getElementById("birthDate").value;
  var birthMonth = document.getElementById("birthMonth").value;
  var birthYear = document.getElementById("birthYear").value;

  if (
    birthDate == "" ||
    birthMonth == "" ||
    birthYear == "" ||
    isNaN(birthDate) ||
    isNaN(birthMonth) ||
    isNaN(birthYear)
  ) {
    document.getElementById("result").innerHTML =
      "Please enter valid date, month, and year";
    return;
  }

  var currentDate = new Date();

  var birthDateObj = new Date(birthYear, birthMonth - 1, birthDate);

  var age = currentDate.getFullYear() - birthDateObj.getFullYear();
  var monthDiff = currentDate.getMonth() - birthDateObj.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  document.getElementById("result").innerHTML = "Your current age is " + age;
}
