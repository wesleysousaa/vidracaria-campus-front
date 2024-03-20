export default function useProductSelectState() {
  const categrories = ['REGULAR', 'TEMPERED'];
  const unitOfMeasure = ['CENTIMETER', 'METER', 'MILIMETER'];

  return {
    categrories,
    unitOfMeasure,
  };
}
