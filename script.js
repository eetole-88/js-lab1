const fullName = "Emilie Tole";
let age = 33;
const birthdate = "January 1";
const detroitGC = true;
const lifeEvents = [
  "I grew up in a small town",
  "I have a degree in Gender and Women's Studies",
  "I have one younger sister",
  "I got married during the pandemic",
];

if (detroitGC) {
  console.log(`My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan.
        I am currently ${age} years old and my birthday is on birthday is on ${birthdate}.`);
} else {
  console.log(
    `My name is ${fullName} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currntly ${age} years old and my birday is on ${birthdate}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber}===5`);
  } else {
    counter++;
    console.log(
      `5===5. It took ${counter} iterations to generate the number 5`
    );
    break;
  }
}
// extended challenge below

let hours = 50;
let wage = 10;
let pay = null;
weeksToAMil = null;

if (hours <= 40) {
  pay = hours * wage;
  weeksToAMil = Math.ceil(1000000 / pay);
} else {
  let extraHours = hours - 40;
  pay = 40 * wage + extraHours * (wage * 1.5);
  weeksToAMil = Math.ceil(1000000 / pay);
}
console.log(
  `It would take ${weeksToAMil}weeks to earn a million dollars if you are paid $${pay} each week.`
);
