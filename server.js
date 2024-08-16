
var c;
function add(a,b){
     c = a + b;
}
add(3, 10);
console.log(c);

var fs = require("fs");
var os = require("os");
var ld = require("lodash");

var info = os.userInfo();
console.log(info.username);

fs.appendFile("MyFile", "My Name " + "\n" + "is Soham ", () => {
     console.log("This is My File");
})

var arr = ["person", "person", "dog", "cat", 1, 2, 1];
var unique = ld.uniq(arr);
console.log(unique);