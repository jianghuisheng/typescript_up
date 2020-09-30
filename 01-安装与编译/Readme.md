> TypeScript 是由微软开发的一款开源的编程语言，TypeScript 是 Javascript 的超级，遵循最新的 ES6、Es5 规范， 扩展了 JavaScript 的语法，TypeScript 更像后端 java、C#这样的面向对象语言可以让 JS 开发大型企业项目。

> 谷歌也在大力支持 Typescript 的推广，谷歌的 Angular2.x+就是基于 Typescript 语法，最新的 Vue 、React 也可以集成了 TypeScript。

<img src="https://img-blog.csdnimg.cn/20191228194824197.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDYyOTI0NA==,size_16,color_FFFFFF,t_70">

# TypeScript 的安装与编译

### 1. 安装 TypeScript

```
npm install -g typescript
<!-- or -->
yarn global add typescript
```

### 2. 在项目里面执行以下命令，生成 TypeScript 配置文件。

```
tsc --init
```

### 3. 在生成的 TypeScript 配置文件 tsconfig.json 中修改编译后的文件存放地址。

```
tsc --init
```

### 4. 将编写的 TypeScript 文件生成 JavaScript，执行以下命令，其中 index 为文件名。

```
tsc index.ts
```

### 5. 让开发工具自动编译 Ts 文件，以 VS code 为例。点击菜单 任务-运行任务，选择 tsc:监视-tsconfig.json 然后就可以自动生成代码了。

<img src="https://img-blog.csdnimg.cn/20191228201530536.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDYyOTI0NA==,size_16,color_FFFFFF,t_70">
