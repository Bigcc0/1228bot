/*CMD
  command: /reffer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
  var minutes_in_day = 12*60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)
  next -= wait_hours * 60
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
  chat_id :  chat_id,
  message_id : message_id
  })
  if(minutes < minutes_in_day){
  let balance = Libs.ResourcesLib.userRes("money");
  var address = User.getProperty("ad")
  var twitter = User.getProperty("tw")
  let link=Libs.ReferralLib.getLink("SoyKingAirdrop_bot","");
  //var msgid = User.getProperty("ok")
  var button = [{title:"🔄Refresh",command:"/reffer"}]
  //var yu = "*   🤴User : @"+user.username+"\n\n\n  📢You invited "+ balance.value() +" people .\n\n\n  🐤Twitter:"+ twitter +" \n\n\n  👛Address:"+ address +"\n\n\n  🔗Referral Link ⬇️\n"+link+"\n\n📛 You have already received a bonus Today\n\n▶️ Come Back After ⏳ "+wait_hours+" h "+wait_minutes+" m "
  //Api.editMessageText({chat_id:chat.chatid,text:yu,message_id:msgid,parse_mode:"Markdown",reply_markup: {inline_keyboard:button },disable_web_page_preview: "true"})
  //📢You invited "+ balance.value() +" people .\n\n\n
   let options = {disable_web_page_preview:true };
   Bot.sendInlineKeyboard(button,"   *🤴User : @"+user.username+"\n\n\n 📢You invited people \n ⚠️Update data every 12 hours\n(▶️ Come Back After ⏳ "+wait_hours+" h "+wait_minutes+" m " + seconds+ " s)\n\n  🐤Twitter:"+ twitter +" \n\n\n  👛Address:"+ address +"\n\n\n  🔗Referral Link ⬇️\n"+link+"\n\n*",options);
   return
  }
  return true;
}

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

// your code here:
// ...
//Bot.runCommand("/dopost")
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{
let balance = Libs.ResourcesLib.userRes("money");
var address = User.getProperty("ad")
var twitter = User.getProperty("tw")
//var balance = Libs.ResourcesLib.userRes("balance");
//let res = Libs.ResourcesLib.userRes("referral");
//let reflink=Libs.ReferralLib.currentUser.getRefLink("SoyKingAirdrop_bot","");
let link=Libs.ReferralLib.getLink("SoyKingAirdrop_bot","");
// let lib = Libs.ReferralLib
//var refList = lib.currentUser.refList.get();
var button = [{title:"🔄Refresh",command:"/reffer"}]
let options = {disable_web_page_preview:true };
 
Bot.sendInlineKeyboard(button,"*   🤴User : @"+user.username+"\n\n\n  📢You invited "+ balance.value() +" people .\n\n\n  🐤Twitter:"+ twitter +" \n\n\n  👛Address:"+ address +"\n\n\n  🔗Referral Link ⬇️\n"+link+"*",options);
Bot.sendMessage(""+link+"",options); 
Api.sendMessage({ 
chat_id: "@testdadadq", 
text: "#simpan User: @"+user.username+"| Twitter:"+ twitter +" | Address:"+ address +" | People:"+ balance.value() +""})
}


//Bot.sendMessage(link);
// 💰 Balance

// var balance = Libs.ResourcesLib.userRes("balance")
// var lib = Libs.ReferralLib
// var refList = lib.currentUser.refList.get();
// Bot.sendMessage("*🤴 User : "+user.first_name+"\n\n💰 Balance : "+balance.value().toFixed()+" ₹\n\n⚜️Refer And Earn More*")
