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
  var token = Bot.getProperty("token", "SOY")
  var tokenval = Bot.getProperty("tokenval", "x1")
  var tokenprice = Bot.getProperty("tokenp", "0.08BNB≈$43.2")
  var yes = Bot.getProperty("grouplink", "https://t.me/SoyKingOfficial_Chat")
  var yes3 = Bot.getProperty("twitter", "https://twitter.com/SoyKingBSC")
  var abouttoken = Bot.getProperty(
    "aboutok",
    "https://whitepaper.soyking.finance/play-to-earn/soy-nft"
  )
  var abouttoken2 = Bot.getProperty("aboutok", "https://soyking.finance/")
  var abouttoken3 = Bot.getProperty("aboutok", "https://app.soyking.finance/")
  var date = Bot.getProperty("date", "2022/02/01")
  var tokenad = Bot.getProperty("tokenad", "Bsc")
  var yes2 = Bot.getProperty("channel", "https://t.me/SoyKingGameAnnouncements")
  var yu =
    "🔸*Welcome to participate in* *" +
    token +
    "**NFT Airdrop*\n\n🔹*Please perform the tasks below to earn*** *" + tokenval + "* *" + token + "* *NFTs.*(**" + tokenprice + "**)* *\n\n*🔻About SOYNFT*:\n [🌐Websit](" +
    abouttoken2 +
    ")   [📕Whitepaper](" +
    abouttoken +
    ")   [🕹Dapp](" +
    abouttoken3 +
    ")\n\n🎁*Our Airdrop rules:*\n1: Join On SoyKingGame [Telegram Group](" +
    yes +") and[Channel](" +
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
  var c5 = Bot.getProperty("https://soyking.finance/static/image/telegram bot-01.png")
  Api.sendPhoto({
    chat_id: chat.chatid,
    photo: "https://soyking.finance/static/image/telegram bot-01.png",   
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
