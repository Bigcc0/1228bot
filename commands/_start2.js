/*CMD
  command: /start2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
var qq = Libs.Random.randomInt(1, 100)
var question = Libs.Random.randomInt(1, 100)
var solve = qq + question
Bot.setProperty("solve", solve, "string")
var button = [[{ title: "Continue", command: "/bbbbb" }]]
Bot.sendInlineKeyboard(
  button,
  "➡️Before we start the airdrop, please prove\nyou are human by answering the question\nbelow.\n\nPlease answer: " +
    question +
    " + " +
    qq +
    " =\n*Click on Continue before typing the code*"
)
var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
  function hello(message) {
    var greetings = ""

    Bot.sendMessage(greetings + message)
  }

  function doTouchOwnLink() {
    Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
  }

  function doAttracted(channel) {
    hello("Referal: " + channel)
  }

  function doAtractedByUser(refUser) {
    hello("")
    var balance = Libs.ResourcesLib.anotherUserRes(
      "balance",
      refUser.telegramid
    )
    balance.add(1)
    Bot.sendMessageToChatWithId(refUser.chatId, "*🏧 New Referral : +1⭐️*")
  }

  function doAlreadyAttracted() {
    Bot.sendMessage("*You Already Started The Bot ❌*")
  }

  var trackOptions = {
    onTouchOwnLink: doTouchOwnLink,
    onAttracted: doAttracted,
    onAtractedByUser: doAtractedByUser,
    onAlreadyAttracted: doAlreadyAttracted
  }

  Libs.ReferralLib.currentUser.track(trackOptions)
}
