const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho fix by VĐT&NTH",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "adbot",
  usages: "adbot",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`»» 👾 𝑨𝒅𝒎𝒊𝒏 𝑩𝒐𝒕 👾 ««\n
👤Tên: Đoàn Phương Nam (Mèo)
🚫Date off Birth : 15 
🚹😙Giới Tính: Nam 
🆙Chiều Cao: 1m66 🚩Cân nặng: ~~kg
💔Mối Quan Hệ: Hẹn Hò
🔰Quê quán: Hạ Long
👫Gu: Ưu nhìn không trap 🙂
🌼Tính Cách: Vui vẻ, Hòa đồng, Ít để bụng, Dễ gần, iu thưn động vật :>
🆔Facebook: htpps://www.facebook.com/DPN.doanphuongnam
📱Zalo: 0932666924
💡Sở thích: Chơi Game, Viết Code, Du lịch, Nghe Nhạc, Nấu Ăn...
» Welcome «`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100014919796400}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       }