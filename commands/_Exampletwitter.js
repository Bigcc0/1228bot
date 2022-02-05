/*CMD
  command: /Exampletwitter
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = request.message.message_id
    var chat_id = request.message.chat.id

    Api.deleteMessage({
        chat_id: chat_id,
        message_id: message_id
    })

Bot.runCommand("/sendtwitter")
