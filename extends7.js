// class

//之前的方法出现过的问题
// 1. 引用类型的浅拷贝
// 2. 公共方法的重用
// 3. 给父类的构造函数传值
// 4. 原型链上方法的继承
// 5. 实现复杂
// 6. instanceof 和 isPrototypeOf 识别对象的能力

class Animal{
    // 定义私有属性
    #private = 0
    constructor(sex){
        this.eat=function(){
            console.log('eat')
        }
        this.sex=function(){
            console.log(sex)
        }
        this.friends=['a','b','c']
        this.parents = [1,2,3]
        this.#private = 1
    }
    // 在构造函数之外定义的方法为原型方法
    run(){
        console.log('run')
    }
    // 在构造函数外定义的属性是原型属性吗？？ 怎么定义原型属性？
    protoProperty=['z','x','c']
    // 定义静态属性和方法
    static staticMethod(){
        console.log('staticMethod')
    }
    static staticProperty = 'staticProperty'
    usePrivate(){
        console.log(this.#private)
    }
    // 私有方法
    #privateMethod(){
        console.log('privateMethod')
    }
    usePrivateMethod(){
        this.#privateMethod()
    }
    // 可以定义访问器，get set作为原型方法, 而且get、set实在原型上的
    set private(v){
        this.#private = v
    }
    get private(){
        return this.#private
    }
    // 定义迭代器、生成器
    *getIterator(){
        yield 'value1';
        yield 'value2';
        yield 'value3';
    }
    // 默认迭代器可以使对象可遍历
    // [Symbol.iterator](){
    //     return this.friends.entries()
    // }
    *[Symbol.iterator](){
        yield *this.friends.entries()
    }
}
// 定义原型属性
Animal.prototype.protoProperty2=['a', 's', 'd']
class Cat extends Animal{
    constructor(sex){
        // 使用super来调用父类的构造函数，只能在派生类中使用
        // 不使用super会报错
        // 能不能在super之前使用this？ 为什么？
        // this.test = 'test'
        // 
        super(sex)
        this.say=function(){
            console.log('cat say hi')
        }
    }
    action(){
        // 原型方法不能调用super
        // super.staticMethod()
        console.log('cat catch mouse')
    }
    static staticAction(){
        // 静态方法可以调用super    
        super.staticMethod() 
    }
}

const tom = new Cat('mal')
const tom2 = new Cat('female')

tom.eat()
tom.sex()
tom.say()
tom.run()
tom.action()
tom.friends.push('zzzz')
console.log(tom.friends)
console.log(tom2.friends)
console.log(tom.run == tom2.run)
// 检测函数能付复用
console.log(tom.action == tom2.action)
// 检测protoProperty是不是原型属性
tom.protoProperty.push('vvvvv')
console.log(tom.protoProperty)
console.log(tom2.protoProperty)
// 检测protoProperty2是不是原型属性
tom.protoProperty2.push('ffff')
console.log(tom.protoProperty2)
console.log(tom2.protoProperty2)

// 构造函数的  prototype 属性是不是存在于实例的原型链上
console.log(tom instanceof Cat)
console.log(tom instanceof Animal)
// 检测一个对象是否存在于另一个对象的原型链上
console.log(Cat.prototype.isPrototypeOf(tom))
console.log(Animal.prototype.isPrototypeOf(tom))

// tom.staticMethod()
console.log(tom.staticProperty)
Animal.staticMethod()
console.log(Animal.staticProperty)

tom.action()
Cat.staticAction()

const animal = new Animal
// 私有属性和方法不能在实例中使用，这本来就是私有属性的定义
// console.log(animal.#private)
// console.log(animal.#privateMethod())
console.log(animal.usePrivate())
console.log(animal.usePrivateMethod())
// get set 用法
animal.private = 1234
console.log(animal.private)

//
const iterator = animal.getIterator()
const next = iterator.next()
console.log(next.value)
console.log(next.done)
console.log(iterator.next().value)
console.log(iterator.next().value)
const next2 = iterator.next()
console.log(next2.value)
console.log(next2.done)

for(let [index, value] of animal){
    console.log('index', index, 'value',value)
}