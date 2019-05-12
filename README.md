# form-serialize
Vanilla JavaScript form serialization

When you can't (or don't want to) use javascript libraries like jQuery, Moo Tools, Dojo, YUI or Prototype, and their built-in functions, but still need a quick and easy way to serialize forms.
#### Installation
- npm
```
npm install form-serialize
```
- bower
```
bower install form-serialize
```
- browser
```html
<script src="serialize.min.js"></script>
```
#### How to use
- node.js
```
const serialize = require('form-serialize');
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