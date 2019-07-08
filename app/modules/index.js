
export function getMaxProfit(values, maxStock) {
  let min = 0;
  let max = 0;
  let profit = [];
  for (let i = 1; i < values.length; i++) {
    if (values[i] < values[min] && max === 0) {
      min = i; //23
    } else if (values[i] > values[min] && max === 0) {
      max = i; //76
    } else if (max !== 0 && values[i] > values[max]) {
      max = i; // 1000
    } else if (max !== 0 && values[i] < values[max]) {
      profit.push([min,max]);
      min = i;
      max = 0;
    }
    if (i === values.length - 1 && values[i] >= values[max]) {
      profit.push([min,max]);
    }
  }
  let profitArray = profit.map((p) => values[p[1]] - values[p[0]])
  let maxProfitIndex = 0;
  for (let i = 1; i < profitArray.length; i++) {
    if (profitArray[i] > profitArray[maxProfitIndex]) {
      maxProfitIndex = i;
    }
  }
  return [profitArray[maxProfitIndex], profit[maxProfitIndex]]
}
