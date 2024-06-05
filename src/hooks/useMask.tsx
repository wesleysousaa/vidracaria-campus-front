const useMask = () => {
  const phoneMask = '(##) # ####-####';
  const cpfMask = '###.###.###-##';

  const maskValue = (mask: string, value: string) => {
    let maskedValue = '';
    let valueIndex = 0;
    if (value.trim().length === 0) return '';
    const cleanedValue = value.replace(/\D/g, '');

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === '#') {
        if (valueIndex < cleanedValue.length) {
          maskedValue += cleanedValue[valueIndex];
          valueIndex++;
        } else {
          maskedValue += '';
        }
      } else {
        maskedValue += mask[i];
      }
    }

    return maskedValue;
  };

  const unmaskValue = (value: string) => {
    return value.replace(/\D/g, '');
  };

  const handleDelete = (mask: string, value: string) => {
    const cleanedValue = value.replace(/\D/g, '');
    const newValue = cleanedValue.substring(0, cleanedValue.length - 1);
    return maskValue(mask, newValue);
  };

  const handleInputChangeWithMask = (
    e: React.ChangeEvent<any>,
    mask: string,
    value: string,
  ) => {
    const newValue = e.target.value;
    if (newValue.length < value.length) {
      return handleDelete(mask, value);
    } else {
      return maskValue(mask, newValue);
    }
  };

  return {
    maskValue,
    unmaskValue,
    cpfMask,
    phoneMask,
    handleDelete,
    handleInputChangeWithMask,
  };
};

export default useMask;
