// 组合继承
// 为了解决上两个方法的问题
// 我们把两个方法组合在一起使用
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
Animal.prototype.run = function (){
    console.log('run')
}

function Cat(sex){
    Animal.call(this, sex)
    this.say=function(){
        console.log('cat say hi')
    }
}

Cat.prototype = new Animal

const tom = new Cat('mal')
const tom2 = new Cat('female')
tom.eat()
tom.say()
// 解决了原型链继承的问题
tom2.parents.push(999)
console.log('Tom.parents',tom.parents)
console.log('Tom.parents',tom2.parents)
tom.sex()
// 解决盗用构造函数的问题
tom.run()


// 问题
// 实现起来复杂
// Animal 调用了两次 不环保

// 构造函数的  prototype 属性是不是存在于实例的原型链上
console.log(tom instanceof Cat)
console.log(tom instanceof Animal)
// 检测一个对象是否存在于另一个对象的原型链上
console.log(Cat.prototype.isPrototypeOf(tom))
console.log(Animal.prototype.isPrototypeOf(tom))