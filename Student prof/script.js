class Person {
    #name;
    #age;
    #birth;

    constructor(name, age, birth) {
        this.#name = name;
        this.#age = age;
        this.#birth = birth;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getBirth() {
        return this.#birth;
    }
}

class Student extends Person {
    constructor(name, age, birth, occupation) {
        super(name, age, birth);
        this.occupation = occupation; 
    }

    displayInfo() {
        return `
            Name: ${this.getName()}<br>
            Age: ${this.getAge()}<br>
            Birth: ${this.getBirth()}<br> 
            Occupation: ${this.occupation} 
        `;
    }

    logInfo() {
        console.log(`Name: ${this.getName()}`);
        console.log(`Age: ${this.getAge()}`);
        console.log(`Birth: ${this.getBirth()}`);
        console.log(`Occupation: ${this.occupation}`);
    }
}

const student = new Student("MAISLIM, ROVIC L", "21", "10/05/03", "Student");

document.getElementById("student-info").innerHTML = student.displayInfo();

student.logInfo();
