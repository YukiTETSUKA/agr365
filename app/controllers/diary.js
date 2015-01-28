var args = arguments[0] || {};

/* 日付と開始時間の取得 */
var now = new Date(Date.now());
var date = now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日';
var start = now.getHours() + '時' + now.getMinutes() + '分';
/* 天気情報の取得 */
var url = "http://weather.livedoor.com/forecast/webservice/json/v1?city=030010";
var client = Ti.Network.createHTTPClient({
  onload : function(e) {
    var response = JSON.parse(this.responseText);
    $.weather.setImage(response.forecasts[0].image.url);
    Ti.API.info("Received text: " + response);
  },
  onerror : function(e) {
    Ti.API.debug(e.error);
  },
  timeout : 5000
});
client.open("GET", url);
client.send();

var works = [];
var section = Ti.UI.createListSection();
for(var i = 0; i < Alloy.Globals.works.length; i++){
  works.push({work: {text: Alloy.Globals.works[i]}});
}
Ti.API.debug(works);
section.setItems(works);
$.works.setSections([section]);

$.date.setText(date + 'の日誌');
$.start.setText('時間 : ' + start + '〜');
$.temperature.setText('気温 : -℃');
