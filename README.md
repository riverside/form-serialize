# form-serialize
Vanilla JavaScript form serialization

[![NPM](https://nodei.co/npm/form-serialize.png)](https://nodei.co/npm/form-serialize/)

When you can't (or don't want to) use javascript libraries like jQuery, Moo Tools, Dojo, YUI or Prototype, and their built-in functions, but still need a quick and easy way to serialize forms.
#### Installation
- npm
```
npm install @riverside/form-serialize
```
- browser
```html
<script src="serialize.min.js"></script>
```
#### How to use
- node.js
```
const serialize = require('@riverside/form-serialize');
console.log(serialize(form));
```
- browser
```html
<script>
console.log(serialize("#form"));
console.log(serialize(document.querySelector("#form")));
</script>
```
#### Demo
https://projects.zinoui.com/serialize/
#### License
form-serialize is licensed under the MIT license.