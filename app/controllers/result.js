var args = arguments[0] || {};

if(args.from === "work"){
  $.titlebar.title.setText(Alloy.Globals.works[args.id]);
} else if(args.from === "date"){
  Ti.API.debug('date');
}
