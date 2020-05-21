let person = {
    firstName: "Damon",
    lastName: "McMahon",
    age: 28

}

// console.log(JSON.stringify(person));

let jsonPerson = '{"firstName":"Damon","lastName":"McMahon","age":28}';

console.log(JSON.parse(jsonPerson));