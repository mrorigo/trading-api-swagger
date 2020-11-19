var fs = require('fs');
var instruments = fs.readFileSync('instruments.json');
var parsedInstruments = JSON.parse(instruments);
for (var _i = 0, _a = parsedInstruments.folders; _i < _a.length; _i++) {
    var folder = _a[_i];
    var name_1 = '';
    folder.readableCaption = folder.readableCaption.toString().replace('&', '');
    folder.readableCaption = folder.readableCaption.toString().replace(',', '');
    if (folder.readableCaption.includes(' ')) {
        if (folder.readableCaption.indexOf(' ') ===
            folder.readableCaption.lenght - 1) {
            name_1 = folder.readableCaption.replace(' ', '');
        }
        name_1 = folder.readableCaption.split(' ').join('_');
    }
    else {
        name_1 = folder.readableCaption;
    }
    fs.appendFileSync('folder.enum.ts', name_1 + " = '" + folder.id + "', \n");
}
