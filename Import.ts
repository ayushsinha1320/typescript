import { convertToLowerCase,convertToUpperCase } from "./Modules.ts";

const word:string = "Playwright";
const newWord:string = convertToLowerCase(word);
const newWordUppercase:string = convertToUpperCase(word);
console.log(newWord);
console.log(newWordUppercase);