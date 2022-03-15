export const formatNumber = (priceValue) => {
  const formatNumber = new Intl.NumberFormat('es-AR').format(priceValue);
  return formatNumber;
};

export const calculateRates = (price) => {
  //Devuelve la parte entera del número price que pasamos por parametro, elimina los dígitos fraccionarios.
  const calculate = Math.trunc(price / 12);
  return calculate;
};
