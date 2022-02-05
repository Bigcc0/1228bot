/*CMD
  command: tryAgain
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [[{ title: "🔄 Try Again ", command: "checkaddress" }]]
Bot.sendInlineKeyboard(button,"*❌ You Are Not Verified You Selected Wrong Emoji Try again*")
