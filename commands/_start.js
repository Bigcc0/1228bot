/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

function doTouchOwnLink(){
  Bot.sendMessage("You click on yours own link!");
}

function doAttracted(refUser){
  
  //User.setProperty("fromre",refUser.username, "string");
  let balance = Libs.ResourcesLib.anotherUserRes("money", refUser.telegramid);
  balance.add(1);
  Bot.sendMessage(
    "Hello" + 
    "\n\n" +
    "You attracted by user: " + Libs.commonLib.getLinkFor(refUser));
  
  Bot.sendMessageToChatWithId(
    refUser.telegramid,
    "You just attract new user: " + Libs.commonLib.getLinkFor(user)
  );
  
}

function doAlreadyAttracted(){
  Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.track(trackOptions);
Bot.runCommand("/start02")
