var arr = ['1', '2', '3'];
console.log(arr.map(parseInt))
// [ 1, NaN, NaN, NaN ]


/** arr.map(parseInt) 
 *  => arr.map((e,i)=>{
 *      parseInt(e,i)
 *  })
 *  
 *  parseInt('1',0)   1
 *  parseInt('2',1)   NAN
 *  parseInt('3',2)   NAN
 * 
 *  parseInt(string, radix)
 * 表示要解析的数字的基数。
 * 该值介于 2 ~ 36 之间。
 * 如果省略该参数或其值为 0，则数字将以 10 为基础来解析。
 * 如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
 * 如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
 **/

var arr2 = ['1','10','100','1000']
console.log(arr2.map(parseInt))

// [1,NaN,4,27]
