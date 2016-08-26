import pl from "piglatin";
import et from "elementtree";
import {pd} from "pretty-data";

const translate = data => {
    const xml = et.parse(data);
    const tu = xml.findall(".//trans-unit");

    for(let i = 0; i < tu.length; i++) {
        const temp = tu[i];
        const text = temp.findtext("./source");
        const trans = pl(text);

        // eslint-disable-next-line babel/new-cap
        const el = et.SubElement(temp, "target");
        el.text = trans;
    }

    const file = xml.find("./file");
    file.set("target-language", "en-pl");

    const output = xml.write({"xml_declartion": false});
    const pretty = pd.xml(output);

    return pretty;
};

module.exports = translate;
