var args = arguments[0] || {};
args.title = args.title || "";

$.title.setText(args.title);

function back(e){
  Alloy.Globals.parent.remove(Alloy.Globals.viewStack.pop());
}
