/**
 * set与map
*/
//新的数据结构 Set,类似于数组但是成员都是唯一的

const a = new Set();
[2,3,4,2,4,6,7,5,8,57].forEach(x => a.add(x));

console.log(a)