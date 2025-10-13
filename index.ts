// Types in variable
const my_name:string = "Ayush";
const my_age:number = 23;

console.log(`my_name = ${typeof(my_name)}`);
console.log(`my_age = ${typeof(my_age)}`);

// Types in function
function add(a:number, b:number):number{
    return a + b;
}
console.log(`add(1, 2) = ${add(1, 2)}`);

// Types in array
const my_array:number[] = [1, 2, 3];
console.log(`my_array = ${typeof(my_array)}`);

// Types in object
const my_object:object = {
    name: "Ayush",
    age: 23
}
console.log(`my_object = ${typeof(my_object)}`); 