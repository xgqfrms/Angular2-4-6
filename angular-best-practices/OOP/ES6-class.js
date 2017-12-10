"use strict";
// ES6-class

class Dog {
    constructor(name = `Snoopy`, age = `3`){
        this.name = name;
        this.age = age;
    }
    speak(word = `Wang`){
        let words = word.repeat(3);
        console.log(`${words} !`);
    }
}

let dog = new Dog(`XYZ`, `7`);

dog.name;
// "XYZ"
dog.age;
// "7"
dog.age = 12;
// 12
dog.speak();
// WangWangWang !
dog.speak(`Ha,`);
// Ha,Ha,Ha, !

