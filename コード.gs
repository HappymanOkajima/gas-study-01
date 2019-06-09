function doGet(e) {
  var template = 'index';
  return HtmlService.createTemplateFromFile(template).evaluate();
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}
// データベースに見立てたシートに格納されたデータを文字列の配列として返す
function getSheetData() {
  // シートはリンクを知る全員に閲覧権限で共有されている
  var ss = SpreadsheetApp.openById('1Lzso4AScXo3t-NTzyxRJRRy9Nds0yz0DMcWFkMVXrlc');
  var sheet = ss.getSheets()[0];
  return sheet.getDataRange().getDisplayValues();
}
// すべてのデータを返す
function findAll() {
  var data = getSheetData().slice(1);
  return data.map(function (row) {
    return {
      location: row[2],
      name: row[1]
    };
  });
}
// location が一致するデータのみ返す
function findByLocation(location) {
  // 指定がない場合はすべて返す
  if (!location) {
    return findAll();
  }
  var data = getSheetData().slice(1);
  return data.filter(function (row) {
    return row[2] === location;
  }).map(function (row) {
    return {
      location: row[2],
      name: row[1]
    };
  });
}
