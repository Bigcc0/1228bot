/*CMD
  command: /dopost
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var rowIndex;
let newRow = {
  'twitter': User.getProperty("tw"),
  'address': User.getProperty("ad")
  //'fromreffer': User.getProperty("fromre")
}

let prms = {
  sheetName: "Users",
  row: newRow,
  onSuccess: "onSuccess",
  onError: "onError"
}

var rowIndex = User.getProperty("rowIndex");
if(rowIndex){
  prms.rowIndex = rowIndex;
  Libs.GoogleSpreadSheet.editRow(prms);
  return
}

Libs.GoogleSpreadSheet.addRow(prms)


