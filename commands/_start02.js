/*CMD
  command: /start02
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var arr = [
  "🤖",
  "👁",
  "💼",
  "🐟",
  "🌹",
  "🌞",
  "🌎",
  "🍔",
  "🍩",
  "🥃",
  "⚽️",
  "🏋️‍♂️",
  "🏄‍♂️",
  "🤹‍♀️",
  "🎲",
  "🎮",
  "🚗",
  "🚀",
  "🛰",
  "🚦",
  "🏪",
  "📱",
  "💵",
  "💣",
  "🎁",
  "💌",
  "📚",
  "🔐",
  "💔",
  "☢️",
  "♻️",
  "5️⃣",
  "✖️",
  "🔈",
  "🏳️",
  "🏁"
]

function shuffleArray(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

function rndFloat(min, max) {
  return Math.random() * (max - min + 1) + min
}

function rndInt(min, max) {
  return Math.floor(rndFloat(min, max))
}

var index = rndInt(0, 8)

var newArray = shuffleArray(arr)

//Bot.inspect(newArray)

var userAns = newArray[index]

User.setProperty("userAns", userAns, "string")

var quiz1 = newArray[5]
var quiz2 = newArray[0]
var quiz3 = newArray[1]
var quiz4 = newArray[4]
var quiz5 = newArray[3]
var quiz6 = newArray[2]
var quiz7 = newArray[7]
var quiz8 = newArray[6]
var quiz9 = newArray[8]
//var quiz10 = newArray[4]

var inline = [
  [
    { title: quiz1, command: "/ans " + quiz1 },
    { title: quiz2, command: "/ans " + quiz2 },
    { title: quiz3, command: "/ans " + quiz3 }
  ],
  [
    { title: quiz5, command: "/ans " + quiz5 },
    { title: quiz6, command: "/ans " + quiz6 },
    { title: quiz4, command: "/ans " + quiz4 }
  ],
  [
    { title: quiz7, command: "/ans " + quiz7 },
    { title: quiz8, command: "/ans " + quiz8 },
    { title: quiz9, command: "/ans " + quiz9 }
  ]
 
]

Bot.sendInlineKeyboard(
  inline,
  "*❇️ Verify You Are Human Select the Same Emoji as " +
    userAns +
    " From The Keyboard Given below*"
)
// function doTouchOwnLink(){
//   Bot.sendMessage("You click on yours own link!");
// }
// function doAttracted(refUser){
//   Bot.sendMessage(
//     "Hello" + 
//     "\n\n" +
//     "You attracted by user: " + Libs.commonLib.getLinkFor(refUser));
  
//   Bot.sendMessageToChatWithId(
//     refUser.telegramid,
//     "You just attract new user: " + Libs.commonLib.getLinkFor(user)
//   );
// }

// function doAlreadyAttracted(){
//   Bot.sendMessage("You was already attracted");
// }

// let trackOptions = {
//   onTouchOwnLink: doTouchOwnLink,
//   onAttracted: doAttracted,
//   onAlreadyAttracted: doAlreadyAttracted
// }

// Libs.ReferralLib.track(trackOptions);
