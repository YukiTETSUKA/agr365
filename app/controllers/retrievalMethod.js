var args = arguments[0] || {};

function openWorkSearch(){
  var view = Alloy.createController('workSearch').getView();

  Alloy.Globals.index.add(view);
}

function openDateSearch(){
  var view = Alloy.createController('dateSearch').getView();

  Alloy.Globals.index.add(view);
}
