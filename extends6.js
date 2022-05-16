// 寄生组合式继承

function inheritProperty(subType, superType){
    // 拿到父类的原型，也就拿到了父类原型上的方法， 解决了父类原型链继承的问题，同时父类不会多次执行
    // 原型链上的方法可重用
    let prototype = superType.prototype
    prototype.constructor = subType
    subType.prototype = prototype
}

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

Animal.prototype.run=function(){
    console.log('run')
}

function Cat(sex){
    // 父类本身的属性赋值给Cat的实例, 解决了浅拷贝的问题
    // 解决了给父类构造函数传参问题
    Animal.call(this, sex)
    this.say=function(){
        console.log('cat say hi')
    }
}

inheritProperty(Cat, Animal)

const tom = new Cat('mal')
const tom2 = new Cat('female')

tom.eat()
tom.sex()
tom.run()
tom.friends.push('zzzz')
console.log(tom.friends)
console.log(tom2.friends)
console.log(tom.run == tom2.run)

// 问题：实现太复杂


// 构造函数的  prototype 属性是不是存在于实例的原型链上
console.log(tom instanceof Cat)
console.log(tom instanceof Animal)
// 检测一个对象是否存在于另一个对象的原型链上
console.log(Cat.prototype.isPrototypeOf(tom))
console.log(Animal.prototype.isPrototypeOf(tom))