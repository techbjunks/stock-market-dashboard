export const getStockPrice = (EPS: number | string, PE:number | string, Currency:string):string => {
  const epsValue: number = +EPS ?? 0;
  const peValue: number = +PE ?? 0;

  if (!Number.isFinite(epsValue) || !Number.isFinite(peValue)) {
    return "--";
  }
  const price:number = Math.abs(+EPS) * Math.abs(+PE);
  return `${price.toFixed(2)} ${Currency ?? ''}`;
};


export const isValidSymbol = (symbol:string | undefined):boolean => {
  const regex = /^[a-zA-Z0-9\.\-_]+$/;
  return symbol ? regex.test(symbol) : false;
}