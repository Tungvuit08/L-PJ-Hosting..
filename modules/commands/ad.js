module.exports.config = {
  name: "ad",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "",
  description: "",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Lunar")==0 || (event.body.indexOf("lunar")==0) || event.body.indexOf("khoii")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/2qIoBV5.mp4",
"https://i.imgur.com/79jzpbx.mp4",
"https://i.imgur.com/dK4hhhq.mp4",
"https://i.imgur.com/Smq7Qll.mp4",
"https://i.imgur.com/WnfXKkc.mp4",
"https://i.imgur.com/RY6a6DT.mp4",
"https://i.imgur.com/MQq7adp.mp4",
"https://i.imgur.com/Faz0ykr.mp4",
"https://i.imgur.com/GjODha9.mp4",
"https://i.imgur.com/3K4ZXk5.mp4",
"https://i.imgur.com/GHFkSas.mp4",
"https://i.imgur.com/FDcniGD.mp4",
"https://i.imgur.com/MXBCO04.mp4",
"https://i.imgur.com/QziLZ5T.mp4",
"https://i.imgur.com/wyLlSjp.mp4",
"https://i.imgur.com/WWHhgUo.mp4",
"https://i.imgur.com/FpVGQvg.mp4",
"https://i.imgur.com/tX1HhnB.mp4",
"https://i.imgur.com/43hcp7K.mp4",
"https://i.imgur.com/b56mgCs.mp4",
"https://i.imgur.com/rS7SECt.mp4",
"https://i.imgur.com/DVV0eAc.mp4",
"https://i.imgur.com/FEwRuK6.mp4",
"https://i.imgur.com/Oc7MLna.mp4",
"https://i.imgur.com/HBujAIX.mp4",
"https://i.imgur.com/JOktkFG.mp4",
"https://i.imgur.com/1yvrny6.mp4",
"https://i.imgur.com/QDrkzYA.mp4",
"https://i.imgur.com/7mxze5j.mp4",
"https://i.imgur.com/M6ilfjP.mp4",
"https://i.imgur.com/QPqnHuw.mp4",
"https://i.imgur.com/bLKUpXt.mp4",
"https://i.imgur.com/ZdaGqQX.mp4",
"https://i.imgur.com/pGJM2a8.mp4",
"https://i.imgur.com/SEGFWdk.mp4",
"https://i.imgur.com/BcMQLuV.mp4",
"https://i.imgur.com/5IZZC8W.mp4",
"https://i.imgur.com/3okceOs.mp4",
"https://i.imgur.com/d5Udi48.mp4",
"https://i.imgur.com/EhlxbER.mp4",
"https://i.imgur.com/Cl444C5.mp4",
"https://i.imgur.com/IpEGPSq.mp4",
"https://i.imgur.com/7Q2GWcX.mp4",
"https://i.imgur.com/hBeP341.mp4",
"https://i.imgur.com/j9vxFp5.mp4",
"https://i.imgur.com/DEzypDA.mp4",
"https://i.imgur.com/BdIHyaY.mp4",
"https://i.imgur.com/J6DKrNy.mp4",
"https://i.imgur.com/jJy46kE.mp4",
"https://i.imgur.com/i3wt6Ck.mp4",
"https://i.imgur.com/0Zwbq5U.mp4",
"https://i.imgur.com/RDESoQv.mp4",
"https://i.imgur.com/NoyRVWP.mp4",
"https://i.imgur.com/XlkdoJy.mp4",
"https://i.imgur.com/CcKm8YL.mp4",
"https://i.imgur.com/2OZOdDj.mp4",
"https://i.imgur.com/V0GJSAv.mp4",
"https://i.imgur.com/BJfIA3h.mp4",
"https://i.imgur.com/naH1P9q.mp4",
"https://i.imgur.com/VF4FXVC.mp4",
"https://i.imgur.com/wemdzix.mp4",
"https://i.imgur.com/Bpsp5CO.mp4",
"https://i.imgur.com/pbslDJQ.mp4",
"https://i.imgur.com/jK8M2PX.mp4",
"https://i.imgur.com/ZYULudI.mp4",
"https://i.imgur.com/WYiXpy4.mp4",
"https://i.imgur.com/U7uciI6.mp4",
"https://i.imgur.com/o4feCzH.mp4",
"https://i.imgur.com/WkprA6W.mp4",
"https://i.imgur.com/cQJTrl4.mp4",
"https://i.imgur.com/4x4lPTp.mp4",
"https://i.imgur.com/meH3WPP.mp4",
"https://i.imgur.com/c5aypQw.mp4",
"https://i.imgur.com/np1m3NK.mp4",
"https://i.imgur.com/rF68W4C.mp4",
"https://i.imgur.com/WiPQGdU.mp4",
"https://i.imgur.com/G6qLAGS.mp4",
"https://i.imgur.com/SSn5dqo.mp4",
"https://i.imgur.com/4Ua2sJx.mp4",
"https://i.imgur.com/B2kiHXM.mp4",
"https://i.imgur.com/0raIKAg.mp4",
"https://i.imgur.com/zkSBhNj.mp4",
"https://i.imgur.com/K4589L0.mp4",
"https://i.imgur.com/YBdP3VB.mp4",
"https://i.imgur.com/haIAeqL.mp4",
"https://i.imgur.com/AZNfNDa.mp4",
"https://i.imgur.com/7OFlUpe.mp4",
"https://i.imgur.com/eXnCOxy.mp4",
"https://i.imgur.com/oSMEkny.mp4",
"https://i.imgur.com/RXfVQIB.mp4",
"https://i.imgur.com/rlbarQC.mp4",
"https://i.imgur.com/PzCgItp.mp4",
          ];
     var callback = () => api.sendMessage({body:`===== [𝙵𝚋 𝙰𝚍𝚖𝚒𝚗] =====\n━━━━━━━━━━━━━━━━━━\n\n→ [🧸] 𝐅𝐛: ${config.FACEBOOK_ADMIN}\n→ [💤] 𝗥𝗲𝗹𝗮 : 𝗛𝗮̀ 𝗧𝗵𝗶̣ 𝗛𝗮̉𝗶 𝗬𝗲̂́𝗻\n\n━━━━━━━━━━━━━━━━━━\n→ [🍓] 𝐘𝐞̂𝐮 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐍𝐡𝐢𝐞̂̀𝐮 <𝟑`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
api.sendMessage(`ghi ad`,event.threadID,event.messageID)
};