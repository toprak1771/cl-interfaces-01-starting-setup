// Code goes here!
abstract class Department {
    //private readonly id:string;
   public name : string;
   protected employees: string[] = [];
   static currentYear = 2023;

    constructor(protected readonly id:number,n:string){
        this.name = n;
        console.log(Department.currentYear);
    }

    describe(this:Department) {
        console.log("id,name:",this.id,this.name);
    }

    addEmploye(employe:string){
        this.employees.push(employe);
    }

    printInfoEmployees(){
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static getEmploye(employe:string){
        return console.log({employe:employe});
    }

    abstract _describe(this:Department):void
};

class ITDepartment extends Department {
   
    public admins: string[] = []
    constructor(id:number,admin:string[]){
        super(id,'It')
        this.admins = admin
    }

    addAdmin(admin:string){
        this.admins.push(admin)
    }

    addEmploye(employe: string): void {
        if(employe === 'Deneme'){
            return;
        }
        this.employees.push(employe);
    }

    _describe() {
        console.log(`This is id ${this.id} and name ${this.name}`)
    }
}

class nurseDepartment extends Department{
    protected headNurse : string = "";
    _describe(){
        console.log(`This is id ${this.id} and name ${this.name}`)
    }
}

class testDepartment extends Department{
    protected test : string = "";
    private static instance: testDepartment;

    private constructor(){
        super(2,'test')
    }

    _describe(){
        console.log(`This is id ${this.id} and name ${this.name}`)
    }

    static getInstance(){
        if(testDepartment.instance){
            return testDepartment.instance;
        }
        this.instance = new testDepartment();
        return this.instance;
    }
}

class AccountDepartment extends Department {
    private reports : string[];
    private lastRepost : string;
    constructor(id:number,name:string,reports:string[]){
        super(id,name);
        this.reports = reports;
        this.lastRepost = reports[0];
    }
    get getLastReport() {
        console.log("lastReport:",this.lastRepost)
        if(this.lastRepost){
            return this.lastRepost;
        }
        throw new Error('No include reports')
    }

    set getLastReport(value:string){
        if(value===''){
            throw new Error('No report valid value')
        }
        this.reports.push(value);
    }

    addReport (report:string){
        this.reports.push(report);
    }

    getReports(){
        console.log(this.reports)
    }

    _describe(){
        console.log(`This is id ${this.id} and name ${this.name}`)
    }
}

//const engineer = new Department(2,'engineer');
const itDepartment = new ITDepartment(3,[]);
itDepartment.addAdmin('Admin_Test');
itDepartment.addEmploye('Employee_test');
itDepartment.addEmploye('Deneme');
itDepartment.printInfoEmployees();
console.log("itDepartment:",itDepartment);
//console.log("engineer:",engineer);

const accountDepartment = new AccountDepartment(3,'account',[]);
accountDepartment.addReport('Something is wrong...');
accountDepartment.getReports();
console.log(accountDepartment)

//engineer.describe()

// const engineerCopy = {name:'Dummy',describe:engineer.describe};

// engineerCopy.describe();

// engineer.addEmploye('Test1');
// engineer.addEmploye('Test2');
// engineer.employees[2] = 'test3'
// engineer.printInfoEmployees();

Department.getEmploye('getEmployeTest');
console.log(Department.currentYear);

const accountDepartment2 = new AccountDepartment(5,'account2',[]);
accountDepartment2.getLastReport = 'SetDeneme'
console.log('account2:',accountDepartment2)
console.log('accountCurrentYear:',AccountDepartment.currentYear)

const nurse = new nurseDepartment(2,'nurse');
nurse._describe();


//const test = new testDepartment();
const test1 = testDepartment.getInstance();
const test2 = testDepartment.getInstance();


console.log('test1:',test1);
console.log('test2:',test2);