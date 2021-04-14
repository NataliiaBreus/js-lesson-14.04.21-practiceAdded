'use strict';

// 4 Создать классы

class Book {
    constructor (author, name, year, publishingHouse) {
        this.author = author;
        this.name = name;
        this.year = year;
        this.publishingHouse = publishingHouse; 
    }
    set author (newAuthor){
        if (typeof newAuthor !== 'string'){
            throw new TypeError();
        }
        this._author = newAuthor;
    }
    get author() {
        return this._author;
    }
    set name (newName){
        if (typeof newName !== 'string'){
            throw new TypeError();
        }
        this._name = newName;
    }
    get name() {
        return this._name;
    }
    set year (newYear){
        if (typeof newYear !== 'number'){
            throw new TypeError();
        }
        this._year = newYear;
    }
    get year() {
        return this._year;
    }
    set publishingHouse (newPublishingHouse){
        if (typeof newPublishingHouse !== 'string'){
            throw new TypeError();
        }
        this._publishingHouse = newPublishingHouse;
    }
    get publishingHouse() {
        return this._publishingHouse;
    }
}
class ElectronicBook extends Book {
    constructor (author, name, year, publishingHouse, format, elNumber) {
        super (author, name, year, publishingHouse);

        this.format = format;
        this.elNumber = elNumber;
    }
    set format (newFormat){
        if (typeof newFormat !== 'string') {
            throw new TypeError();
        }
        this._format = newFormat;
    }
    get format(){
        return this._format;
    }

}
const b = new Book ('Mark Tven', 'Tom Soyer', 2019, 'Svet');
const elB = new ElectronicBook ('Pushkin', 'Evgeniy Onegin', 1995, 'Ranok', 'elBook', '12345');
console.log(b);
console.log (elB);

// 2 Реализовать с использованием классов. Для каждого поля создать get set с проверкой типов

class Student {
    constructor (name, surname, isMale, contactInfo, univerInfo) {
        this.name = name;
        this.surname = surname;
        this.isMale = isMale;
        this.contactInfo = contactInfo;
        this.univerInfo = univerInfo;
    }
    set name (newName){
        if (typeof newName !== 'string') {

            throw new TypeError();
        }
        this._name = newName;
    }
    get name() {
        return this._name;
    }
    set surname (newSurname){
        if (typeof newSurname !== 'string') {

            throw new TypeError();
        }
        this._surname = newSurname;
    }
    get surname() {
        return this._surname;
    }
    set isMale (newIsMale){
        if (typeof newIsMale !== 'boolean') {

            throw new TypeError();
        }
        this._isMale = newIsMale;
    }
    get isMale() {
        return this._isMale;
    }
    set contactInfo (newContactInfo){
        if (typeof newContactInfo !== 'string') {

            throw new TypeError();
        }
        this._contactInfo = newContactInfo;
    }
    get contactInfo() {
        return this._contactInfo;
    }

    get faculty() {
        return this._univerInfo.faculty;
    }
    get department () {
        return this._univerInfo.department;
    }
}

class UniverInfo {
    constructor (faculty, department) {
        this.faculty = faculty;
        this.department = department;
    }
    set faculty (newFaculty){
        if (typeof newFaculty !== 'string'){
            throw new TypeError();
        }
        this._faculty = newFaculty;
    }
    set department (newDepartment){
        if (typeof newDepartment !== 'string'){
            throw new TypeError();
        }
        this._departmnet = newDepartment;
    }
}
const ui = new UniverInfo ('management', 'Organization Management');

const stud1 = new Student ('Mark', 'Smith', true, 'contact info',ui);
const stud2 = new Student ('Alica', 'Ivanova', false, 'contacts', ui)

console.log (stud1);
console.log (stud2);
console.log (ui);

// 1 Вычислить сумму первых п элементов последовательности. Параметр N задает пользователь

let sumCounter = 0;
const number = +prompt ("Write a number:");
let sum = 0;

while(sumCounter < number) {
    sumCounter ++;
    sum += sumCounter;
}
console.log (sum);

// или

function CountedSum(n) {
    if (n < 1) {
        throw new RangeError();
    }
    let result = 0;
    for (let i = 1; i <= n; i++){
        result += 1;
    }
    return result;
}

console.log(CountedSum(6));




// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:вывод fizzbuzz вместо чисел, кратных как 3, так и 5.вывод fizz вместо чисел, кратных 3;вывод buzz вместо чисел, кратных 5;

function writeNumbers (n){
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log ("fizz");
        } else if (i % 5 === 0){
            console.log ("buzz");
        }else {
            console.log (i);
        }
    }
}

console.log(writeNumbers(25));


