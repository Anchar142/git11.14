const dev=require("./webpack.config.dev");
const prod=require("./webpack.config.prod");
console.log("process.env.NODE_ENV",process.env.NODE_ENV);

if(process.env.NODE_ENV=="development"){
  module.exports=dev;
}
if(process.env.NODE_ENV=="production"){
  module.exports=prod;
}