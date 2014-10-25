var pl = require("piglatin");
var et = require("elementtree");
var pd  = require('pretty-data').pd;

var translate = function(data) {
    var xml = et.parse(data);
    var tu = xml.findall('.//trans-unit');

    for(var i=0; i<tu.length; i++) {
        var temp = tu[i];
        var text = temp.findtext('./source');
        var trans = pl(text);
        var el = et.SubElement(temp, 'target');
        el.text = trans;
    }

    var file = xml.find('./file');
    file.set('target-language', 'en-pl');

    var output = xml.write({'xml_declartion' : false});

    var pretty = pd.xml(output);

    return pretty;
}

module.exports = translate;
