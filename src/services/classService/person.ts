export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greeting(msg: string) {
    return `${this.name} is ${this.age} and says ${msg}`;
  }
}

