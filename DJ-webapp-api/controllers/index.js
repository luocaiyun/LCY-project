const express = require("express");
const router = express.Router();

const home = require("../models/homemodels");
const classification = require("../models/classificationmodels");
const explore=require("../models/Exploremodels");
const user=require("../models/usermodels");



//解决跨域问题
router.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
  res.header("Access-Coantrol-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method == "OPTIONS") res.send(200);
  else next();
});


//主页路由
router.get('/home', (req, res) => {

  res.jsonp(home.getHomeInfo())
});

//分类路由
router.get('/classification',(req,res)=>{
  res.jsonp(classification.GetClassificationModels())
});

// 探索路由
router.get('/explore',(req,res)=>{
  res.jsonp(explore.getexploreInfo())
});

//我的路由
router.get('/user',(req,res)=>{
  res.jsonp(user.getuserInfo())
});

//拼团路由
// router.get('/group',(req,res)=>{
//   res.jsonp(group.getGroupInfo())
// })

module.exports = router;