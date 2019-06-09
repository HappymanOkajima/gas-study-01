function doGet(e) {
    var template = 'index';
    return HtmlService.createTemplateFromFile(template).evaluate();
}
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}
function getSheetData() {
    var ss = SpreadsheetApp.openById('1Lzso4AScXo3t-NTzyxRJRRy9Nds0yz0DMcWFkMVXrlc');
    var sheet = ss.getSheets()[0];
    return sheet.getDataRange().getDisplayValues();
}
function findAll() {
    var data = getSheetData().slice(1);
    return data.map(function (row) {
        return {
            location: row[2],
            name: row[1]
        };
    });
}
function findByLocation(location) {
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
