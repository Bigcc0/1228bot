/*CMD
  command: /catchtwitter
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
if (message.includes("@")) {
  User.setProperty("tw", message, "string")
  Bot.runCommand("checkaddress")
  var msgid1 = User.getProperty("ok")
  var tokenad = Bot.getProperty("tokenad", "BSC(ERC20)")
  var yu = "\n🔘Please submit your " + tokenad + " wallet address below.\n\n "
  Api.sendPhoto({
    chat_id: chat.chatid,
    photo: "https://soyking.finance/static/image/STEP4-01.png", // it is picture!
    caption: yu,
    message_id: msgid1,
    parse_mode: "Markdown",
    disable_web_page_preview: "true"
  })
  
} else {
  Bot.sendMessage("*🚫Invalid Format,Please Try Again*")
  Bot.runCommand("/catchtwitter")
}
