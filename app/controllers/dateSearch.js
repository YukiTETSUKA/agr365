var args = arguments[0] || {};

function movePreYear(){
  var year = parseInt($.year.getText().replace("年", ""), 10) - 1;
  $.year.setText(year + "年");
}

function moveNextYear(){
  var year = parseInt($.year.getText().replace("年", ""), 10) + 1;
  $.year.setText(year + "年");
}

function searchByDate(e){
  var title = $.year.getText() + e.source.getText();
  var date = parseInt($.year.getText().replace("年", ""), 10) + "-" + parseInt(e.source.getText().replace("月", ""), 10) + "-";
  var properties = {
    from: "date",
    date: date,
    title: title
  };
  var resultView = Alloy.createController('result', properties).getView();

  Alloy.Globals.index.add(resultView);
}

var date = new Date();
$.year.setText(date.getFullYear() + "年");
