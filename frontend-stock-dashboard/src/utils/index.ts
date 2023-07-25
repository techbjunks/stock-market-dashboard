export const getStockPrice = (EPS: number | string, PE:number | string, Currency:string):string => {
  const price:number = EPS * PE;
  return `${price.toFixed(2)} ${Currency}`;
};
