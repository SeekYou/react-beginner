### ES6 babel 
```
this.setState({
			scale: 'c',
			temperature
		})
```
等同于
```
undefined.setState({
			scale: scale,
			temperature: temperature
});
```
这里运用了ES6的属性简洁表示法