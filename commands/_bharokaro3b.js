/*CMD
  command: /bharokaro3b
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
}else{

let channel = "@DogeKingDao_Channel";
let id = user.telegramid
Api.getChatMember({ 
chat_id : channel,
user_id : id,
on_result :"checkgroup"})
}
