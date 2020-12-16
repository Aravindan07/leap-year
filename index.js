const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.yellowBright("This is a program to find whether you are born in a leap year or not.\n"));

let name = readlineSync.question("May I have your name \n");

console.log(chalk.redBright("Please enter your date of birth in the specified format.\n"));

console.log(chalk.redBright("Try again.\n"));

function calculateLeapYear(){
  let birthDate = readlineSync.question("\nEnter your date of birth in dd/mm/yy format E.g: 27/07/1999\n");
  let birthYear = birthDate.split('/')[2];
  if(!birthYear){
    console.log(chalk.redBright("Please enter the date in the above specified format"));
    return;
  }
  if((birthYear % 4 === 0 ) && (birthYear % 100 !=0) || (birthYear % 4 ===0)){
    console.log(chalk.blueBright(`\nHey, ${name} you born in LEAP YEAR\n`));
    console.log(chalk.yellowBright(`\n You can share it on social media that you are born in a leap year.`));
    return;
  }
  else{
    console.log(chalk.red(`\n${name} you didn't born in the leap year`));
    return;
  }
}

calculateLeapYear();
