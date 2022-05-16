// 原型链继承
// Animal 的原型链上有一个constructor属性指向Animal本身
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
// 可以再原型链上添加额外的方法
Animal.prototype.run = function (){
    console.log('run')
}

// 这是一个子类型
function Cat(){
    this.say=function(){
        console.log('cat say hi')
    }
}
// 把Animal的  实例  赋值给Cat的原型，也就具有了Animal实例上的方法
Cat.prototype = new Animal

// 重写原型链上的run
Cat.prototype.run = function(){
    console.log('cat run')
}

const animal = new Animal
animal.eat()
animal.run()
const tom = new Cat
tom.eat()
tom.run()
tom.say()


// 问题
const tom2 = new Cat('mal')
const tom3 = new Cat
tom2.parents.push(999)
tom2.friends = ['d','e','f']
console.log('tom2.parents',tom2.parents)
console.log('tom3.parents',tom3.parents)
console.log('tom2.friends',tom2.friends)
console.log('tom3.friends',tom3.friends)
console.log('tom2.sex',tom2.sex())
console.log('tom3.sex',tom3.sex())
// 构造函数的  prototype 属性是不是存在于实例的原型链上
console.log(tom instanceof Cat)
console.log(tom instanceof Animal)
// 检测一个对象是否存在于另一个对象的原型链上
console.log(Cat.prototype.isPrototypeOf(tom))
console.log(Animal.prototype.isPrototypeOf(tom))
// 包含引用值时，定义在父类内部的引用属性变成了子类原型上的属性
// 应用属性使用的是指针，如果实例操作了父类中的引用属性，会导致所有子类实例的该引用属性都发生变化
// 如何给Animal构造函数传值？
// console.log(tom2.eat == tom3.eat) 方法可重用