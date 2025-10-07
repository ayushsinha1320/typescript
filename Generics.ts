function identity<T>(value: T): T {
    return value;
}

const str = identity("hello"); 
const num = identity(42);    

console.log(`str = ${str}`);
console.log(`num = ${num}`);