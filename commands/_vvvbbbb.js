/*CMD
  command: /vvvbbbb
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg_id = options.result.message_id;
User.setProperty("ok", msg_id,"Integer")
Bot.runCommand("cvse123")


// Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
// if (request.data) {
//   var message_id = request.message.message_id
//   var chat_id = request.message.chat.id

//   Api.deleteMessage({
//     chat_id: chat_id,
//     message_id: message_id
//   })
// }
