/*CMD
  command: cvse123
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
var solve = Bot.getProperty("solve")
//if (message == solve) {
  var token = Bot.getProperty("token", "DogeKing")
  var tokenval = Bot.getProperty("tokenval", "")
  var tokenprice = Bot.getProperty("tokenp", "10000000≈$3.2")
  var yes = Bot.getProperty("grouplink", "https://t.me/DogekingGlobalCommunity")
  var yes3 = Bot.getProperty("twitter", "https://twitter.com/DogeKing_Dao")
  var abouttoken = Bot.getProperty(
    "aboutok",
    "https://coinmarketcap.com/currencies/dogeking/"
  )
  var abouttoken2 = Bot.getProperty("aboutok", "https://dogekingdao.org/")
  var abouttoken3 = Bot.getProperty("aboutok", "https://www.coingecko.com/en/coins/dogeking")
  var date = Bot.getProperty("date", "2022/03/01")
  var tokenad = Bot.getProperty("tokenad", "Bsc")
  var yes2 = Bot.getProperty("channel", "https://t.me/DogeKingDao_Channel")
  var yu =
    "🔸*Welcome to participate in* *" +
    token +
    "** Airdrop*\n\n🔹*Please perform the tasks below to earn*** *" + tokenval + "* *" + token + "* *.*(**" + tokenprice + "**)* *\n\n*🔻About DogeKing*:\n [🌐Websit](" +
    abouttoken2 +
    ")   [💠Coinmarketcap](" +
    abouttoken +
    ")   [🐸coingecko](" +
    abouttoken3 +
    ")\n\n🎁*Our Airdrop rules:*\n1: Join On DogeKing [🇨🇳 Telegram Group](" +
    yes +") and[💬 DogeKing Channel](" +
    yes2 +
    ")\n\n2: Follow Us on [Twitter](" +
    yes3 +
    ") and Retweet pinned post.\n\n3: Submit your " +
    tokenad +
    " address.\n\n4: Airdrop rewards will be distributed on " +
    date +
    "\n\n*🚫Note: We will manually check the participants, Mandatory tasks must be completed, Unfinished will not get any tokens.*"
  var msgid = User.getProperty("ok")
  var b5 = [[{ text: "Done", callback_data: "/bharokaro" }]]
  var c5 = Bot.getProperty("https://pbs.twimg.com/media/FKwevacVQAEl-Fb?format=jpg&name=large")
  Api.sendPhoto({
    chat_id: chat.chatid,
    photo: "https://pbs.twimg.com/media/FKwevacVQAEl-Fb?format=jpg&name=large",   
    caption: yu,
    message_id: msgid,
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: b5 },
    disable_web_page_preview: "true"
  })
//} else {
  //var msgi3d = User.getProperty("ok")
  //Bot.editMessage("😒Wrong answer! Please try again.", msgi3d)
  //Bot.runCommand("cvse123")
//}


