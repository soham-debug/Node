var fs = require("fs");
var os = require("os");


var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile("Minefile.txt", "Welcome " + user.username, () => {
    console.log("File is created");
})