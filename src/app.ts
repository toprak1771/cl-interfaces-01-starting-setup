interface Named {
    name:string;
}

interface Personality extends Named {
    age?:number;

    getInformation():void;
}

class Person implements Personality {
    age?: number;
    name:string

    constructor(n:string,a?:number){
        if(a){
            this.age=a;
        }
      
        this.name=n;
    }
    
    getInformation(): void {
       console.log(`Name:${this.name} age:${this.age}`)
    }
}

const user1 = new Person('Toprak',26);
const user2 = new Person('Ceku');
console.log(user2);
user1.name = 'Rıza';
user1.age=27;

console.log('user1:',user1);


interface addFn {
    (a:number,b:number) : number;
}

const add :addFn = (number1:number,number2:number) => {
    return number1 + number2
}

console.log(add(2,3));

