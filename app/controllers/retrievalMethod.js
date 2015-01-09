var args = arguments[0] || {};

function openWorkSearch(){
  var view = Alloy.createController('workSearch').getView();

  Alloy.Globals.parent.add(view);
  Alloy.Globals.viewStack.push(view);
}

function openDateSearch(){
  Ti.API.debug('openDateSearch');
}
