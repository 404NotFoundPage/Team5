const express = require("express");
const PersonalContro=require("../controller/PersonalContro.js");
const Personalrouter = express.Router();

Personalrouter.get("/PersonalInit.do",PersonalContro.PersonalInit);
Personalrouter.post("/mtpass.do",PersonalContro.mtpass);
Personalrouter.post("/xiugaipwd.do",PersonalContro.xiugaipwd);
Personalrouter.get("/Readaddress.do",PersonalContro.Readaddress);
Personalrouter.post("/Newaddress.do",PersonalContro.Newaddress);
Personalrouter.get("/Setdefault.do",PersonalContro.Setdefault);
Personalrouter.get("/delete.do",PersonalContro.delete);
Personalrouter.get("/QueryOrder.do",PersonalContro.QueryOrder);
Personalrouter.post("/Collect.do",PersonalContro.Collect);
Personalrouter.post("/quxiao.do",PersonalContro.quxiao);
Personalrouter.get("/getaSC.do",PersonalContro.getaSC);
Personalrouter.post("/Number.do",PersonalContro.Number);
Personalrouter.post("/goudel.do",PersonalContro.goudel);
Personalrouter.post("/jointhe.do",PersonalContro.jointhe);
Personalrouter.get("/collection.do",PersonalContro.collection);
Personalrouter.post("/Deleteorder.do",PersonalContro.Deleteorder);
Personalrouter.get("/Afewpages.do",PersonalContro.Afewpages);
Personalrouter.get("/Afewpages2.do",PersonalContro.Afewpages2);

Personalrouter.get("/editPersonInfo.do",PersonalContro.editPersonInfo);//修改个人资料
Personalrouter.post("/uploadPersonImg.do",PersonalContro.uploadPersonImg);//上传个人头像
module.exports = Personalrouter;