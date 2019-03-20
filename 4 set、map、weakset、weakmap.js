/**
 * set与map
 * 
 * Set
 * 新的数据结构 Set,类似于数组但是成员都是唯一的
 * 
 * 
 * 方法：   add, delete,has
 * add(value)：新增，相当于 array里的push
 * delete(value)：存在即删除集合中value
 * has(value)：判断集合中是否存在 value
 * clear()：清空集合
 * Array.from 方法可以将 Set 结构转为数组
 * 
 * 
*/

const a = new Set();
[2,3,4,2,4,6,7,5,8,57].forEach(x => a.add(x));

console.log(a)

// 可以用来去重  [...new Set([1,1,1,1,5,3,6,2,6,3,7,3,8,4,84,4])]
// 字符串去重  [...new Set('hahahahahaha')].join('')  'ha'



/**
 * constructor： 构造函数
 * size：元素数量
 * 
 * set.length 拿不到元素数量
 * 
 * 
 * 使用: 交集/并集/缺集
 * 
 * let a = new Set([1, 2, 3]);
 * let b = new Set([4, 3, 2]);
 * 并集
 * let union = new Set([...a, ...b]);
 * // Set {1, 2, 3, 4}
 * 
 * // 交集
 * let intersect = new Set([...a].filter(x => b.has(x)));
 * // set {2, 3}
 * 
 * // 差集
 * let difference = new Set([...a].filter(x => !b.has(x)));
 * // Set {1}
 * 
*/



/**
 * WeakSet 对象允许你将弱引用对象储存在一个集合中
 * WeakSet 与 Set 的区别：
 * WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以
 * WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的应用，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑该对象还存在于 WeakSet 中），所以，WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到了（被垃圾回收了），WeakSet 对象是无法被遍历的（ES6 规定 WeakSet 不可遍历），也没有办法拿到它包含的所有元素
 * 
 * 
*/