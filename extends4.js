// 原型式继承

// 这个方法可以替换成Object.create(obj, config)
function object(obj){
    function F(){}
    F.prototype = obj
    return new F()
}
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

var cat = object(animal)
var dog = object(animal)

cat.eat()
cat.sex('mal')
dog.eat()
dog.sex('female')

// 实现自己的方法
cat.run = function(){console.log('cat run')}
cat.run ()
console.log(cat.eat==dog.eat)

// 问题
cat.friends.push('zzzz')
cat.parents=[1]
console.log(cat.friends)
console.log(dog.friends)


// 以下两个方法都不能用了，因为animal没有prototype属性,函数和class有prototype属性
// 构造函数的  prototype 属性是不是存在于实例的原型链上
// console.log(cat instanceof animal)
// 检测一个对象是否存在于另一个对象的原型链上
// console.log(animal.prototype.isPrototypeOf(cat))
