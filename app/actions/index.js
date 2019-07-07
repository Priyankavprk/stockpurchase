import { Alert } from 'react-native';

import config from '../config';

var Airtable = require('airtable');
var base = new Airtable({apiKey: config.AIRTABLE_API_KEY}).base('appmKbfPqv55DJonJ');

export const getStockData = () => async (dispatch) => {
    try {
        await base('stockbydate').select({
          view: 'Grid view'
        }).firstPage(function(err, records) {
          if (err) { console.error(err); return; }
          dispatch(loadData(records))
        })
    } catch (err) {
        console.log('error', err);
    }
};

const loadData = (records) => async (dispatch) => {
    try {
      let data = [];
      await records.forEach(function(record) {
          data.push({
            id: record.getId(),
            date: record.get('date'),
            price: record.get('price')
          })
      });
      dispatch({type: 'LOAD_STOCK_DATA', items: data})
    } catch (err) {
        console.log('error', err);
    }
};

export const updateData = (id, price) => async (dispatch) => {
    try {
        await base('stockbydate').update(id, {
          "price": price
        }, function(err, record) {
        if (err) {
          console.error(err);
          Alert.alert('Failed to save stock price');
          return;
        }
        Alert.alert('Stock price have been saved');
        dispatch(getStockData())
        console.log(record.get('date'));
      });
    } catch (err) {
        Alert.alert('Failed to save stock price');
        console.log('error', err);
    }
};
