import { getData } from '../modules';

export function getStockData() {
  getData()
  return {
    type: 'LOAD_STOCK_DATA',
    items: 'data'
  }
}
