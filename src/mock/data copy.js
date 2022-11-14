const Mock = request("mockjs");

Mock.setup({ timeout: "1000-2000" });

Mock.mock("data.php", "get", {
  "data|1-10": [
    {
      "id|+1": 50,
      "name|1": ["@cname", "@cname", "@cname", "@cname", "@cname"],
      "age|18-28": 0,
      "sex|1": ["男", "女"],
    },
  ],
});
