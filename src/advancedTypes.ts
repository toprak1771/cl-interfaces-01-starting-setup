type person = {
    age:number,
    duty:string[]
}

type admin = {
    age:number,
    document:string
};

//interface SuperAdmin extends person,admin {} person ve admin shoul be interface,of course

type SuperAdmin = person & admin;
type SuperAdmin2 = person | admin;

const _superAdmin : SuperAdmin = {
    age:28,
    duty:['cto'],
    document:'Team lead'
};

const _superAdmin2 : SuperAdmin2 = {
    age:28,
    duty:['cto'],
    //document:'Team lead'
}

const _superAdmin3 : SuperAdmin2 = {
    age:23,
    duty:['ceo'],
    document:'team lead'
}

function printSuperAdmin2 (superAdmin:SuperAdmin2){
    console.log('age:',superAdmin.age);
    if('duty' in superAdmin){
        console.log('duty:',superAdmin.duty)
    }
    if('document' in superAdmin){
        console.log('document:',superAdmin.document)
    }
}

printSuperAdmin2({age:26,duty:['cto']})

// console.log("superAdmin:",_superAdmin);
// console.log("superAdmin2:",_superAdmin2);

type Combinable = number | string;
type Numeric = number | boolean;

function add2(a:number,b:number) :number;
function add2(a:number,b:string) : string;
function add2(a:string,b:string):string;

function add2(a:Combinable, b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

type Universal = Combinable & Numeric;
type Universal2 = Combinable | Numeric;

const _func = (a:Universal) => {
    console.log(a);
};

const _func2 = (a:Universal2) => {
    console.log(a);
}

//_func(true) hata veriyor & ikisinin ortak type number istiyor
// _func2(true) hata vermez | işareti ile herhangi bir tipi verebilirim

class Car {
    drive(){
        console.log('Driving...')
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...')
    }
    
    loadCargo(amount:number){
        console.log('Loading cargo...',amount)
    }
}

type vehicle = Car | Truck

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle:vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(17);
    }
};

useVehicle(v1);
useVehicle(v2);

interface bird {
    type:'bird',
    flyingSpeed:number
}

interface leopar {
    type:'leopar',
    runningSpeed :number
}

type Animal = bird | leopar;

function movingAnimal(animal:Animal){
 let speed;
 switch (animal.type) {
    case "bird":
        speed = animal.flyingSpeed;
        break;
    case "leopar":
        speed = animal.runningSpeed;
        break;
 }
 console.log('Moving animal at speed:',speed);
};

movingAnimal({type:'leopar',runningSpeed:125});

interface ErrorModel {
    [prop:string] :string | number
}

//object olustur
const errorModel : ErrorModel = {
    mail:'Please valid email',
    password:'Pelase Valid email',
    ciy:17
}

const fetchedUserData = {
    name:'Toprak',
    age:26,
    job:{title:'software developer'}
};

console.log(fetchedUserData?.job?.title);

const userInput = null;
const storedData = userInput ?? 'default';
console.log('storedData:',storedData);