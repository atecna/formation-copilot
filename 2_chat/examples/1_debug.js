const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

function calculateAverageAge(users) {
  let totalAge = 0;
  for (let i = 0; i <= users.length; i++) {
    totalAge += users[i].age;
  }
  return totalAge / users.length;
}

const averageAge = calculateAverageAge(users);
console.log(averageAge);
