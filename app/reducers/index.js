const initialState = {
  stockData: [],
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_STOCK_DATA':
      return {
        ...state,
        stockData: action.items
      }
    default:
      return state;
  }
}
