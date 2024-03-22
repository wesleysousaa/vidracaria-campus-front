export default function useProductSelectState() {
  const categories = ['REGULAR', 'TEMPERED'];
  const unitOfMeasure = ['CENTIMETER', 'METER', 'MILIMETER'];

  function translateCategory(category: string): string {
    const categoryTranslated: { [key: string]: string } = {
      REGULAR: 'Regular',
      TEMPERED: 'Temperado',
    };

    return categoryTranslated[category];
  }

  function translateUnitOfMeasure(unit: string): string {
    const unitOfMeasureTranslated: { [key: string]: string } = {
      CENTIMETER: 'Centímetro',
      METER: 'Metro',
      MILIMETER: 'Milímetro',
    };

    return unitOfMeasureTranslated[unit];
  }

  return {
    categories,
    unitOfMeasure,
    translateCategory,
    translateUnitOfMeasure,
  };
}
