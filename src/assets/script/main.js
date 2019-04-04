
class datos {

    constructor(name, age, lastname, career, friends, i) {

        console.log('name', name)
        this.name = name || prompt("Please enter name");
        this.age = age || prompt("Please enter age");
        this.lastname = lastname || prompt("Please enter lastname");
        this.career = career || prompt("Please enter career");
        this.i = i || prompt("Cuantos amigos tienes?");
        this.friends = [];

        console.log('this.i', this.i)
        for (let x = 0; x <= this.i; x++) {
            this.friends.push(prompt("Please your friends' names"));
        }
    }

    ingresar() {
        document.write(`Soy ${this.name} ${this.lastname}, y desarrollador ${this.career} con solo ${this.age} añitos`)
        document.write(this.friends)
    }
}

let student1 = new datos();
student1.ingresar()
