/*CMD
  command: checkaddress
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
if (message.includes("0x")){
User.setProperty("ad", message,"string")

var user = User.getProperty("status")
if (user=="member" | user =="administrator" | user=="creator"){
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Bot.runCommand("/reffer")
}


}else{

Bot.sendMessage("*🚫Please enter the correct wallet address*")
Bot.runCommand("checkaddress")
}
