import config from '../config';

var Airtable = require('airtable');
var base = new Airtable({apiKey: config.AIRTABLE_API_KEY}).base('appmKbfPqv55DJonJ');

export function getData() {
  base('stockbydate').select({
      maxRecords: 30,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {

      records.forEach(function(record) {
          console.log('Retrieved', record);
      });
      fetchNextPage();
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
}
