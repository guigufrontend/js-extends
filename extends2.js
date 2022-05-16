
// 盗用构造函数继承
function Animal(sex){
    this.eat=function(){
        console.log('eat')
    }
    this.sex=function(){
        console.log(sex)
    }
    this.friends=['a','b','c']
    this.parents = [1,2,3]
}

// 在子类中调用父类的构造函数，使用call把父类中的this，替换成Cat的this
// 也就把父类的属性都挂载到了子类的实例上
function Cat(sex){
    Animal.call(this, sex)
    this.say=function(){
        console.log('cat say hi')
    }
}

// 观察tom， 实际上Animal上的方法是直接放到tom实例上的，而不是tom的原型链上
const tom = new Cat('mal')
const tomGirl = new Cat('female')
tom.eat()
tom.say()
tom.sex()
tom.friends.push('zzzzz')
console.log(tom.friends)
console.log(tomGirl.friends)
// 问题
// Animal.prototype.run = function (){
//     console.log('run')
// }

// const tom2 = new Cat('female')
// tom2.run()
// 是给原型链赋值时机的问题码？
// 由于是通过执行父类构造函数给this赋值的形式，因此父类原型链上的属性不能继承

// console.log(tom2.eat == tom.eat)
// 方法不能重用，不环保

// 构造函数的  prototype 属性是不是存在于实例的原型链上
console.log(tom instanceof Cat)
console.log(tom instanceof Animal)
// 检测一个对象是否存在于另一个对象的原型链上
console.log(Cat.prototype.isPrototypeOf(tom))
console.log(Animal.prototype.isPrototypeOf(tom))