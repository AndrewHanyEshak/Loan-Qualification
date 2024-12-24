const age = prompt("How old are you?");
const salary = prompt("What is your salary?");
if (age >= 18 && age <= 60 && salary >= 5000) {
  let loanAmount = salary * 3;
  if (loanAmount > 60000) {
    loanAmount = 60000;
  }
  console.log(`Congratulations! You are eligible for ${loanAmount} EGP.`);
} else {
  console.log(
    "Applicant is rejected because they do not meet the minimum requirements"
  );
}
