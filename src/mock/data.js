//动态mock数据
//request导入mockjs
const Mock = require("mockjs");
//模拟网络延迟
Mock.setup({ timeout: "2000" });

//书写数据模板
Mock.mock("data1.php", "get", {
  "data|1-10": [
    {
      "id|+1": 10,
      "name|1": ["@cname"],
      "age|10-20": 0,
      "sex|1": ["男", "女"],
    },
  ],
});
