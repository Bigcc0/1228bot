/*CMD
  command: /joinshequ
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("ad", message,"string")
var token = Bot.getProperty("token")
var msgid1 = User.getProperty("ok")
var b5 = [[{text:"Done",callback_data:"/checkshequ"}],[{text:"Pass",callback_data:"/bharokaro6"}]]
var am = Bot.getProperty("amount77")
var yes = Bot.getProperty("averchanne","https://t.me/gamblersgroup")
var yu = "🔘Please Join Our Cooperative community [Advertiser Channel]("+yes+")\n"
Api.sendMessage({chat_id:chat.chatid,text:yu,message_id:msgid1,parse_mode:"Markdown",reply_markup: {inline_keyboard:b5 },disable_web_page_preview: "true"
})
