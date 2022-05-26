// class

// ts class写法

class Animal{
    // 定义私有属性
    #private = 0
    eat: () => void
    sex: () => void
    friends: string[]
    parents: number[]
    protoProperty2: string[]
    constructor(
        sex,
        public name
        ){
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

// 注意在ts红， public类型的构造函数参数会自动赋值给this
// 而且ts类型也认为是理含有该属性
const tom = new Animal('mal','tom')
console.log(tom.name)