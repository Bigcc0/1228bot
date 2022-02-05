/*CMD
  command: /ckad
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("PaytmWallet")

Bot.sendMessage("✅ Paytm wallet address set To :* "+data.message+"")
