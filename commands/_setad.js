/*CMD
  command: /setad
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("PaytmWallet")
User.setProperty("PaytmWallet" , data.message ,"string")
Bot.sendMessage("✅ Paytm wallet address set To :* "+data.message+"")
