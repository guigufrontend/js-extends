// class
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Animal_instances, _Animal_private, _Animal_privateMethod;
// ts class写法
class Animal {
    constructor(sex, name) {
        this.name = name;
        _Animal_instances.add(this);
        // 定义私有属性
        _Animal_private.set(this, 0);
        // 在构造函数外定义的属性是原型属性吗？？ 怎么定义原型属性？
        this.protoProperty = ['z', 'x', 'c'];
        this.eat = function () {
            console.log('eat');
        };
        this.sex = function () {
            console.log(sex);
        };
        this.friends = ['a', 'b', 'c'];
        this.parents = [1, 2, 3];
        __classPrivateFieldSet(this, _Animal_private, 1, "f");
    }
    // 在构造函数之外定义的方法为原型方法
    run() {
        console.log('run');
    }
    // 定义静态属性和方法
    static staticMethod() {
        console.log('staticMethod');
    }
    usePrivate() {
        console.log(__classPrivateFieldGet(this, _Animal_private, "f"));
    }
    usePrivateMethod() {
        __classPrivateFieldGet(this, _Animal_instances, "m", _Animal_privateMethod).call(this);
    }
    // 可以定义访问器，get set作为原型方法, 而且get、set实在原型上的
    set private(v) {
        __classPrivateFieldSet(this, _Animal_private, v, "f");
    }
    get private() {
        return __classPrivateFieldGet(this, _Animal_private, "f");
    }
    // 定义迭代器、生成器
    *getIterator() {
        yield 'value1';
        yield 'value2';
        yield 'value3';
    }
    // 默认迭代器可以使对象可遍历
    // [Symbol.iterator](){
    //     return this.friends.entries()
    // }
    *[(_Animal_private = new WeakMap(), _Animal_instances = new WeakSet(), _Animal_privateMethod = function _Animal_privateMethod() {
        console.log('privateMethod');
    }, Symbol.iterator)]() {
        yield* this.friends.entries();
    }
}
Animal.staticProperty = 'staticProperty';
// 注意在ts红， public类型的构造函数参数会自动赋值给this
// 而且ts类型也认为是理含有该属性
const tom = new Animal('mal', 'tom');
console.log(tom.name);
