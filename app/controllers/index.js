function openRetrievalMethod(){
  var view = Alloy.createController('retrievalMethod').getView();
  $.index.add(view);
}

function openWriteWin(){
  Ti.API.debug('openWriteWin');
}

Alloy.Globals.index = $.index;

$.index.open();
