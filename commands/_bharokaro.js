/*CMD
  command: /bharokaro
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var yes = Bot.getProperty("channel", "https://t.me/DogekingGlobalCommunity")
var msgid = User.getProperty("ok")
var b5 = [[{ text: "Done", callback_data: "/bharokaro1b" }]]
var yu =
  "🔘Please Join [🇨🇳 Telegram Group](" +
  yes +
  ") To View Information About The Project."
Api.sendPhoto({
  chat_id: chat.chatid,
  caption: yu,
  photo: "https://soyking-bigcc0.vercel.app/static/image/DSTEP1-01-01.png",
  message_id: msgid,
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: b5 },
  disable_web_page_preview: "true"
})
