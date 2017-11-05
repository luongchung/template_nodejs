var express =require("express");
var app =express();
app.use(express.static("public")); //chỉ rằng public là thư mục root
app.set("view engine","ejs");
app.set("views","./views")
var server =require("http").Server(app);
var io =require("socket.io")(server);
server.listen(1997);//process.env.PORT
var arrUser=[];
io.on("connection",function(socket){
  console.log("Có người kết nối !");  //Lắng nghe có người kết nối
});
app.get("/",function (req,res) {
    res.render("trangchu");
})
