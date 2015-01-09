function openRetrievalMethod(){
  var view = Alloy.createController('retrievalMethod').getView();
  $.index.add(view);

  Alloy.Globals.viewStack.push(view);
}

function openWriteWin(){
  Ti.API.debug('openWriteWin');
}

Alloy.Globals.parent = $.index;

$.index.open();
