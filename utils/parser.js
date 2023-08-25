import { parseString } from 'xml2js';

const parser = (xml) =>
  new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });

export default parser;
