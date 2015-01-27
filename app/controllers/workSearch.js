var args = arguments[0] || {};
var works = [];
var section = Ti.UI.createListSection();

for(var i = 0; i < Alloy.Globals.works.length; i++){
  var item = 
  works.push({
    name: {text: Alloy.Globals.works[i]},
    count: {text: "0件"}
  });
}

section.setItems(works);
$.works.setSections([section]);

$.works.addEventListener('itemclick', function(e){
  var properties = {from: "work", id: e.itemIndex};
  Ti.API.debug(properties);
  var resultView = Alloy.createController('result', properties).getView();
  Alloy.Globals.index.add(resultView);
});
