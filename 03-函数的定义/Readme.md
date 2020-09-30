### 1. 函数声明法。

```
function run():string{
    return 'abc'
};
```

### 2. 匿名函数法。

```
var func = function ():number{
    return 123
};
func();
```

### 3. 定义方法传参，参数与方法名都要声明类型。

```
function getInfo(name:String,age:number):string{
    return `${name}---${age}`;
};
getInfo('张三',30);
```

### 4. 匿名函数传参，参数与方法名都要声明类型。

```
var getInfo = function(name:String,age:number):string{
    return `${name}---${age}`;
};
getInfo('张三',30);
```

### 5. 没有返回值的方法。

```
function run():void{
    console.log('这是一个没有返回值的方法');
}
```

### 6. 在 TypeScript 中形参和实参必须一样，如果不一样就要配置可选参数，对可传可不传的参数添加 ？号。

```
function getInfo(name:string,age?:number):string{
    if(age){
        return `${name}---${age}`
    }else{
        return `${name}---年龄保密`;
    };
}
getInfo('张三')
```

### 7. 在 TypeScript 中设置默认参数。

```
function getInfo(name:string,age:number = 20):string{
    if(age){
        return `${name}---${age}`
    }else{
        return `${name}---年龄保密`;
    };
}
getInfo('张三');
```

### 7. 在 TypeScript 中设置默认参数。

```
function getInfo(name:string,age:number = 20):string{
    if(age){
        return `${name}---${age}`
    }else{
        return `${name}---年龄保密`;
    };
}
getInfo('张三');
```

### 8. ES6 剩余参数在 TS 中的用法

```
function sum(a:number,b:number,...result:number[]):number{
    // a+b = 1+2;
    let sum_result = a+b;
    // result 等于3、4、5、6
    for(let i = 0;i<result.length;i++){
        sum_result += result[i];
    };
    return sum_result;
};
console.log(sum(1,2,3,4,5,6));
// 21

```

### 9. TypeScript 中的函数重载，重载即为两个或两个以上的同名函数，根据参数的个数或类型不同选择性执行其中的某一个，从而得到不同的结果。在 ES5 中有同名函数时，后面声明的函数会把前面声明函数给覆盖，而在 TS 中写法如下：

```
function getInfo(name:string):string;
function getInfo(age:number):string;
function getInfo(str:any):any{
    if(typeof str == 'string'){
        return '我叫'+str;
    }else{
        return '我的年龄是'+str;
    }
};
console.log(getInfo('张三'));
// 我叫张三
console.log(getInfo(30));
// 我的年龄是30
```

### 上面的方法变化一下，还可以写成下面这样。

```
function getInfo(name:string):string;
function getInfo(name:string,age:number):string;
function getInfo(name:string,age?:any):any{
    if(age){
        return '我叫'+name+',我的年龄是'+age;
    }else{
        return '我叫'+name;
    }
};
console.log(getInfo('张三'));
// 我叫张三
console.log(getInfo('张三',30));
// 我叫张三，我的上龄是30
```
