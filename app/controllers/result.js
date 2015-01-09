var args = arguments[0] || {};
var result = Alloy.Collections.diary;

function doTransform(model){
  var transform = model.toJSON();
  return transform;
}

if(args.from === "work"){
  $.titlebar.title.setText(Alloy.Globals.works[args.id]);
  result.fetch({query: 'SELECT * FROM diary WHERE workId=' + args.id});
} else if(args.from === "date"){
  Ti.API.debug('date');
}
