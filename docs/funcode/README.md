

## 纯函数 
   相同的输入，必然会有相同的输出，函数不依赖外部变量
   ```js
   var xs = [1,2,3,4,5];// Array.slice是纯函数，因为它没有副作用，对于固定的输入，输出总是固定的
   xs.slice(0,3);
   xs.slice(0,3);
   xs.splice(0,3);// Array.splice会对原array造成影响，所以不纯
   xs.splice(0,3);
   
   ```

   

## 函数的柯里化 
  传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数
   ```js
   var checkage = min => (age => age > min);
    
   var checkage18 = checkage(18); // 先将18作为参数，去调用此函数，返回一个函数age => age > 18;
   1
   checkage18(20);// 第二步，上面返回的函数去处理剩下的参数，即 20 => 20 > 18; return true;
   ```

   ```js
   // 柯里化之前
   function add(x, y) {
       return x + y;
   }
   add(1, 2) // 3
   
   // 柯里化之后
   function addX(y) {
       return function (x) {
           return x + y;
       };
   }
   addX(2)(1) // 3
   ```

   柯里化是一种预加载函数的方法，通过传递较少的参数，得到一个已经记住了这些参数的函数

## 函数组合 
  为了解决函数嵌套过深，提出了函数组合，例 h(g(f(x)))
   ```js
   const compose = (f, g) => (x => f(g(x)));
   var first = arr => arr[0];
   var reverse = arr => arr.reverse();
   var last = compose(first, reverse);
   last([1, 2, 3, 4, 5]); // 5
   ```

## Point Free 
   把一些对象自带的方法转化成纯函数,不要命名转瞬即逝的中间变量
   ```js
   //转化前
   const f = str => str.toUpperCase().split(' ');
   
   //转化后
   const compose = (f, g) => (x => f(g(x)));
   var toUpperCase = word => word.toUpperCase();
   var split = x => (str => str.split(x));
   var f = compose(split(' '), toUpperCase);
   f("abcd efgh");
   ```

   

## 声明式与命令式代码  
   我们开发过程中一般会逐条编写过程式的指令，其中一般涉及到很多细节，这种叫做命令式伪代码，业务繁重时会增加很大的负担。使用声明式代码可以减轻阅读代码和编写代码的负担
   ```js
   //命令式
   let CEOs = [];
   for (var i = 0; i < companies.length; i++) {
       CEOs.push(companies[i].CEO)
   }
   //声明式
   let CEOs = companies.map(c => c.CEO);
   ```

   

## 核心概念