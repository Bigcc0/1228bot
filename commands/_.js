/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message){
   Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
   return
}
