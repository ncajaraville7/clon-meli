export const formatNumber = (priceValue) => {
  const formatNumber = new Intl.NumberFormat('es-AR').format(priceValue);
  return formatNumber;
};
