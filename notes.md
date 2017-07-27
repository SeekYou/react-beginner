## ES6语法

1. 箭头函数
2. 类
3. 模板字符串
4. let
5. const

## notice
`const element = <img src={user.avatarUrl}></img>;`,使用大括号包裹的表达式不要再用引号包裹，JSX会将引号的内容识别为字符串而非表达式。

JSX标签没有子标签，结尾处用`/>`闭合

ReactDOM 使用`camelCase`驼峰命名属性的名称，而不是HTML的属性名称
1. className 


所有内容在渲染之前被转换成字符串，有效防止`XSS`跨站脚本攻击

元素事实上只是构成组件的一个部分，是immunetable不可变的。

大多数React应用只会调用一次ReactDOM.render().

#### 定义组件
1. 最简单--使用js函数
```
	function Welcome(props){
		return <h1>Hello, {props.name}</h1>
	}
```
2. ES6 class来定义组件
```
class Welcome extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>
	}
}
```

> 组件名称必须以大写字母开头
> 组件的返回值只能有一个根目录

所有React组件必须像纯函数那样使用它们的props。


### state

1. 不要直接更新状态
```
//Wrong 
this.state.comment='Hello';
```
应当使用`setState()`
```
// Correct
this.setState({comment: 'Hello'})
```
构造函数是唯一能够初始化this.state的地方

this.props和this.state可能是异步更新的，不应该依靠他们的值来计算状态
```
// Wrong 
this.setState({
	counter: this.state.counter + this.props.increment.
})
```
应当接受一个函数而不是一个对象，该函数将接收先前的状态作为第一个参数，将需要更新的状态的值作为第二个参数：
```
// Correct
this.setState((prevState,props) => {
	counter: prevState.counter + props.increment
})
```
also equality
```
this.setState(function(prevState,props) {
	return {
		counter: prevState.counter + props.increment
	}
})
```

状态合并是浅合并，

### 事件处理

1. react事件绑定属性的命名也是驼峰式。
2. JSX中传入一个函数，而不是一个字符串。
3. 不能反悔false的方式阻止默认行为，必须明确地使用preventDefault.

```
function ActionLink() {
	function handleClick(e) {
		e.preventDefault();
		console.log('clicked');
	}
	return (
		<a href="#" onClick={handleClick}>
			Click me
		</a>
	)
}
```

必须谨慎对待`JSX`中回调函数的`this`，类的方法默认是不会绑定`this`的，如果忘记绑定`this.handleClick`并把它传入`onClick`，当你调用这个函数的时候this的值是`undefined`
```
//This binding is necessary to make 'this' work in the callback

this.handleClick=this.handleClick.bind(this);
```

```
React.createElement(
  'button',
  { onClick: undefined.handleClick },
  undefined.state.isToggleOn ? 'ON' : 'OFF'
);
```

### 基础列表

应当给数组中的每一个元素赋予一个确定的标识 --key

一个元素的key最好是这个元素在列表中拥有的一个独一无二的字符串，通常，使用来自数据的id，或者序列号索引index(不建议，会导致渲染变慢)

元素的key只有在和它的兄弟节点对比时才有意义

当你在`map()`方法内部调用的元素，最好随时为每一个元素加上一个独一无二的`key`


### 表单-受控组件

在React中，会在select根标签上使用value属性标明当前selected元素是谁

### 状态提升

在React中，状态分享是通过将state数据提升至离需要这些数据的组件最近的父组件来完成的，这就是状态提升。


### 组件与继承

组件不能提前知道它们的子组件是什么，建议使用`props.children`将子元素直接传递到输出.  
作为通用容器，暂时不知道子组件是什么，所有在通用容器设计时，直接返回`props.children`,然后在通用容器的父组件中具体设计容器内部的内容