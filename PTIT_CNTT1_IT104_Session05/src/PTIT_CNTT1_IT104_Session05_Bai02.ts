class Student {
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

const students: Student[] = [];
students.push(new Student(1, 18, "hello123@example.com"));
students.push(new Student(2, 20, "iamcute456@example.com"));
students.push(new Student(3, 19, "noahh789@example.com"));
for (const student of students) {
    console.log(`ID: ${student.id}, Tuổi: ${student.age}, Email: ${student.email}`);
}
