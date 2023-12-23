Private modifier kullanılınca o property'e aynı class içinden erişilir ve değiştirilebilir fakat diğer sınıflardan erişilemez ve kullanılamaz.
Private yerine protected kullandığımız da kendi tanlandığı sınıf ve bu sınıfı miras alan sınıflardan erişebilir ya da değiştirilebilir.

Static modifier kullanılırsa kullanıldığı sınıfın instance örneği oluşturulmadan class ismi.property ile erişebilir ayrıca static modifier alan
property ya da metotlar constructor metodun içinde this anahtar kelimesiyle erişilemez bunun yerine class ismi.property(metot) ile erişilmesi gerekir.

Private olan property get ve set metotlarıyla erişebilir ve değiştirilebilir.Bu özellikleri kullanınca dışarıan bu metotlara bir fonksyon olarak değil class'ın bir özelliği olarak erişilir. Yani () ile çağırmaya gerek kalmaz.

Class'ın constructor metoduna private eklersen bu sınıftan sadece bir tane örnek oluşturabilirsin ve new ile yeni bir instance oluşturamazsın. Bu şekilde instance oluşturamadığımız için class'ın içinde bir tane private static property ile bir instance tanımla ve türü bu class olsun.
Daha sonra bir tane de static metot tanımla ve bu instance var ve dolu ise bunu return etsin yoksa yeni bir tane instance oluşturup onu return etsin. (Singleton)

interface bir default değer atayamazsın propertylere
interfaceleri bir tür olarak kullanabiliriz let user1 :Person;
user1={} object olmak zorunda

bir sınıf birden fazla interfaceden kalıtım alabilir
class interface'den kalıtım alırken implements syntax kullanılır
interface içinde default değer verilmez
abstract class'da default değer ve metotları işleyebilirsin fakat interface yapısında sadece metotların imzası olur içleri
implemet eden class'da doldurulur

ayrıca interfaceler type olarak da kullanılabilir bir nesnenin türünü interface gösterdikten sonra = {} içerde o interface'e ait
özellikleri tanımlayabilirsin

interface property readonly eklersen interface'den implement alan property'e eklemesen bile readonly özelliği gelir ve dışardan bu class'ın property'sini değiştiremezsin
bir class birden fazla interface'den implements alabilir ve bir interface'de başka bir interface'den extends syntax ile inheritance(kalıtım) alabilir
extends ile kalıtım alan interface bir sınıf tarafından implements edildiğin de interface'in extends ettiği interface'i de implements etmiş olur
functionların type olarak şeklini belirtebiliriz
type Addfn = {a:number,b:number} => number;
const add : addFN = (n1:number,n2:number) => {
	return n1 + n2;
}

bunu yaygın olmayan bir şekilde interface ile de yapabiliriz
interface AddFn {
(a:number,b:number) : number;
}
const add : addFN = (n1:number,n2:number) => {
	return n1 + n2;
}
su sekilde olabilir 

bir interface veya class'daki property'in isteğe bağlı olmasını sağlamak için ? syntax getirmeliyiz class'dakine getirirsen soru interface'ine ve constructor metodun içindekiene de
getirmen gerekir


class ve type & şu şekil olursa her türlü özelliği sergilemesi gerekiyor | sunu kullanırsan her özelliği değil o class,type'ın birinin özellikleri sergilemesi yeterli
bunu direkt 
type Numeric = string | number
type Combinable = number | boolean
type Universal = Combinable & Numeric (class ve object gibi davranmaz ortak olan number tipini alır)
type UNiversal2 = Combinable | Numeric (string,number,boolean üç parametreyi de alabilir)

flexible container&interface
--------------------------

bir error yapın olacak ve ne kadar property gelebilir bilmiyorsan mesela kullanıcı sadece email girerken hata yapmıs olabilir ya da hem email hem password girerken hata yapmıs olabilir
interface ErrorModel {
[prop:string]:string
}
su sekilde bir yapı olusturabilirsin



function overload ile fonksiyonların isteğe bağlı parametrelerini ve geridönüşlerini değiştirebiliriz

nulluish coalescing
--------------------------
backen api'den bir değer çekip bu değer null veya undefined ise atanılan default değeri null veya undefined değil ise kendi değerini almayı sağlar
?? ile kullanılır
const storedDaa = userInput ?? 'default value'
gibi kullanılabilir

Generics
----------------------
fonksiyona gelecek paramtreleri belirli bir tür ve spesifik olarak direkt belirtmek yerine generickleri kullanarak
onlar bizim için fonksiyonu çağırdığımız da bunu dinamik olarak yaparlar.

function merge<T, U>(objA:t,objB:U){
return Object.assign(objA,objB);
}

const mergedObj = merge({name:'Toprak',hobbies:['Sports']},{age:27})

generic yapılarda parametreleri daha spesifik hale de getirebiliriz bunu genelde extends syntax ile yaparız.
function merge<T extends object,U>(objA:T, objB: U) {
return Object.assign(objA, objB)
};

keyof syntax ile bir objenin bir propertye sahip olup olmama durumunu kontrol edebiliriz.
function<T extends object,U extends keyof T>(obj:T,key:U){
return 'Value :' + obj[key]
}
