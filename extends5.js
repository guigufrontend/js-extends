// 寄生式继承

var animal={
    eat:function(){
        console.log('eat')
    },
    sex:function(sex){
        console.log(sex)
    },
    friends:['a','b','c'],
    parents : [1,2,3],
}

function createObj(obj){
    const clone = Object.create(obj)
    clone.sayHi = function (){
        console.log('hi')
    }
    return clone
}
var cat = createObj(animal)
var dog = createObj(animal)

cat.eat()
cat.sex('mal')
dog.eat()
dog.sex('female')

// 实现自己的方法
cat.run = function(){console.log('cat run')}
cat.run ()


// 问题
cat.friends.push('zzzz')
cat.parents=[1]
console.log(cat.friends)
console.log(dog.friends)

console.log(cat.sayHi == dog.sayHi)
// sayHi是不是公用函数，是公用函数为什么定义两个不一样的？ 不环保 怎么定义一个重用方法？

// 以下两个方法都不能用了，因为animal没有prototype属性,函数和class有prototype属性
// 构造函数的  prototype 属性是不是存在于实例的原型链上
// console.log(cat instanceof animal)
// 检测一个对象是否存在于另一个对象的原型链上
// console.log(animal.prototype.isPrototypeOf(cat))