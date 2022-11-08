function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age
};

const studentFirst = new Student('Svetlana', 'woman', 25);
const studentSecond = new Student('Igor', 'man', 23);
const studentThird = new Student('Oleg', 'man', 27);
const studentFourth = new Student('Irina', 'woman', 22);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  this?.marks ? this.marks.push(mark) : this.marks = [mark];
};

Student.prototype.addMarks = function (...mark) {
  this?.marks ? this.marks.push(...mark) : this.marks = [...mark];
};

Student.prototype.getAverage = function () {
  return this.marks.reduce( (acc, e) => acc += e ) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
};
// ваш код для остальных методов