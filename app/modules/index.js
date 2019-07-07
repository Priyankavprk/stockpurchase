import config from '../config';

var Airtable = require('airtable');
var base = new Airtable({apiKey: config.AIRTABLE_API_KEY}).base('appmKbfPqv55DJonJ');

export function getData() {
  let data = [];
  base('stockbydate').select({
    view: 'Grid view'
  }).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        data.push({
          date: record.get('date'),
          price: record.get('price')
        })
    });
  })
}
