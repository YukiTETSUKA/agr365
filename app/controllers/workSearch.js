var args = arguments[0] || {};
var works = [];
var section = Ti.UI.createListSection();

for(var i = 0; i < Alloy.Globals.works.length; i++){
  works.push({
    name: {text: Alloy.Globals.works[i]},
    count: {text: "0件"}
  });
}

section.setItems(works);
$.works.setSections([section]);
