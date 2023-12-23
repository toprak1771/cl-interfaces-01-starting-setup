const names: Array<string> = ["Toprak"]; //string[]

// const promise :Promise<number> = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(17)
//     },2000)
// });

// promise.then((data) => {

// })

function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
const mergedObj2 = merge({ name: "Max", hobbies: ["Sports"] }, 30);
console.log(mergedObj);
console.log(mergedObj2);

interface Lengthy {
    length : number;
}

function countAndDescribe<T extends Lengthy>(element:T) : [T,string]{
    let descriptionText = 'Got no value';
    if(element.length === 1){
        descriptionText = 'Got 1 value'
    }
    else if(element.length > 1){
        descriptionText = `Got ${element.length} value`
    }
    return [element,descriptionText]
};
const valuee= countAndDescribe(['Canakkale'])
console.log(valuee)

function keyObject<T extends object,U extends keyof T>(obj :T,key : U){
    return 'Value : ' + obj[key]
};

console.log(keyObject({city:'Canakkale'},'city'));