/*CMD
  command: checkchannel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/bharokaro2b")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*❌ Must join Channel*")
}
