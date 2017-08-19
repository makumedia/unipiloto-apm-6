class Person {
	id: number;
	age: number;
	name: string;
	lastname: string;
	

	constructor(id: number, age: number, name: string, lastname: string){
		this.id = id;
		this.age = age;
		this.name = name;
		this.lastname = lastname;
		
	}
}

class Student extends Person{
	classes: string;
	grade: number;
	group: string;
	
	

	constructor(id: number, age: number, name: string, lastname: string, classes: string, grade: number, group: string){
		super(id, age, name, lastname)
		this.classes = classes;
		this.grade = grade;
		this.group = group;
		
		
	}
}


class Teacher extends Person {
	profesion: string;
	students: Array<Student>;

	constructor(id: number, age: number, name: string, lastname: string, profesion: string, students: Array<Student>){ 
		super(id, age, name, lastname)
		this.profesion = profesion;
		
	}
}



var person = new Student();
var student1 = new Student(12, 14, 'prpiyo', 'perori', 'math', 5, "5a");
var teacher = new Teacher(false, [student1, student2]);

console.log(Student);
console.log(Teacher);