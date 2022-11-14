import Two from "./Two";
const { merge } = require('webpack-merge');
console.log(merge({name:"tom",age:19},{name:"jarry",x:100}));
const x = 100;
console.log("x", x);
console.log("y", Two.y);
//ES6
const test = (num) => {
    console.log("test函数哈哈" + num);
}

test();

//装饰器语法
function testable(target) {
    target.isTestable = true;
}
@testable //调用装饰器函数
class MyTestableClass { }
console.log("装饰器语法", MyTestableClass.isTestable) // true

const delay = new Promise(resolve => console.log("new Promise()"));
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();

