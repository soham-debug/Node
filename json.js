const person = {
    name: "soham", 
    age: 23, 
    gender: "male"
};
const personToString =  JSON.stringify(person);
console.log(personToString);

const library = '{"Name": "Captain America", "Type": "Comics", "id": 2}';
const storeLibrary = JSON.parse(library);
console.log(storeLibrary.Type);