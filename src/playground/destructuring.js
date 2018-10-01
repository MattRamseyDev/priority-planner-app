//
// OBJECT DESTRUCTURING
//

// const person = {
//     name: 'Matt',
//     age: 23,
//     location: {
//         city: 'Austin',
//         temp: 92
//     }
// };

// const {name = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`)

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// ARRAY DESTRUCTURING
//

// const address = ['123 Heatherstone Dr', 'Austin', 'Texas', '78745'];


// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee', '$2.00', '$2.60', '$2.75'];

const [drink, , medium] = item;
console.log(`A medium ${drink} costs ${medium}`);