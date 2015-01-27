var args = arguments[0] || {};
args.title = args.title || "";

$.title.setText(args.title);

function back(e){
  Alloy.Globals.index.remove(e.source.getParent().getParent());
}
