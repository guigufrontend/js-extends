// class
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
// ts class写法
var Animal = /** @class */ (function () {
    function Animal(sex, name) {
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
    Animal.prototype.run = function () {
        console.log('run');
    };
    // 定义静态属性和方法
    Animal.staticMethod = function () {
        console.log('staticMethod');
    };
    Animal.prototype.usePrivate = function () {
        console.log(__classPrivateFieldGet(this, _Animal_private, "f"));
    };
    Animal.prototype.usePrivateMethod = function () {
        __classPrivateFieldGet(this, _Animal_instances, "m", _Animal_privateMethod).call(this);
    };
    Object.defineProperty(Animal.prototype, "private", {
        get: function () {
            return __classPrivateFieldGet(this, _Animal_private, "f");
        },
        // 可以定义访问器，get set作为原型方法, 而且get、set实在原型上的
        set: function (v) {
            __classPrivateFieldSet(this, _Animal_private, v, "f");
        },
        enumerable: false,
        configurable: true
    });
    // 定义迭代器、生成器
    Animal.prototype.getIterator = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, 'value1'];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, 'value2'];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, 'value3'];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    // 默认迭代器可以使对象可遍历
    // [Symbol.iterator](){
    //     return this.friends.entries()
    // }
    Animal.prototype[(_Animal_private = new WeakMap(), _Animal_instances = new WeakSet(), _Animal_privateMethod = function _Animal_privateMethod() {
        console.log('privateMethod');
    }, Symbol.iterator)] = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5 /*yield**/, __values(this.friends.entries())];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    var _Animal_instances, _Animal_private, _Animal_privateMethod;
    Animal.staticProperty = 'staticProperty';
    return Animal;
}());
var tom = new Animal('mal', 'tom');
console.log(tom.name);
