// const person: {
//     name: string;
//     age: number
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//   name: "Giuseppe",
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [1, 'Admin']
// };

enum Role {
  "ADMIN",
  "READ_ONLY",
  "AUTHOR",
}

const person = {
  name: "Giuseppe",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// let favoriteActivities: string[];
// favoriteActivities = ['ciao']
// person.role = [0, 'author'];
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if(person.role == Role.ADMIN){
    console.log('You are admin');
}
