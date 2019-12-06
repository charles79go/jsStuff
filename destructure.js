let data = {
    name: 'amos',
    age: '40',
    phone: '2015623093',
    address: 'staten island'
}

let {name, age: edad, ...info} = data;

console.log(name);
console.log(edad);
console.log(info);