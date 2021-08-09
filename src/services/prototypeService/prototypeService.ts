function Student(this: any, name: string, age: number) {
  this.name = name;
  this.age = age;
}

Student.prototype.grade = 100;

const studentGrade = new (Student as any)('Edgar', 25);

export const prototypeService = studentGrade.grade;