<h1 align="center">
  <br>
  <a href="#"><img src="https://github.com/RationalCoding/Microstache/raw/master/src/logo.png" alt="HyperHost" width="200"></a>
  <br>
  Microstache
  <br>
  <br>
</h1>
<h4 align="center">558 byte mustache templating.</h4>
<br>
[![Build Status](https://travis-ci.org/RationalCoding/Microstache.svg?branch=master)](https://travis-ci.org/RationalCoding/Microstache)

Just include it in your project:
```html
<script src="microstache.min.js">
```

Then use `Microstache.template` to template a string with the data in an object.  
```javascript
var template = "<h1>{{someData}}</h1>";  
var data = {
  someData : "A String",
}
var templated = Microstache.template(template,data);  // "<h1>A String</h1>"
```

Fast and powerful string templating for less than a kB. Can it get simpler than that?  

<br>

*If you need more than just object templating, try [Mustache.js](https://github.com/janl/mustache.js)*
