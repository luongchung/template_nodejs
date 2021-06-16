var express =require("express");
var app =express();
app.use(express.static("public")); 
app.set("view engine","ejs");
app.set("views","./views")
var server =require("http").Server(app);

const fs = require('fs');


//let data = JSON.stringify(student);
//fs.writeFileSync('default.json', data);


server.listen(2000);
app.get("/",function (req,res) {
    res.render("trangchu");
})

app.get("/config",function (req,res) {
  let rawdata = fs.readFileSync('default.json');
  var result = removeDefaultJSON(JSON.parse(req.query.data),JSON.parse(rawdata));
  res.send(result);
})

function removeDefaultJSON(src,defaultJson){
  console.log(src);
  for (var attrname in src) {
    if(defaultJson.hasOwnProperty(attrname)) {
      if (src[attrname] == defaultJson[attrname]) {
        console.log("delete => "+ attrname);
        delete src[attrname];
      } 
    }
  }
  return src;
}
