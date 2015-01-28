function openRetrievalMethod(){
  var view = Alloy.createController('retrievalMethod').getView();
  $.index.add(view);
}

function openWriteWin(){
  $.index.add(Alloy.createController('diary').getView());
}

Alloy.Globals.index = $.index;

$.index.open();
