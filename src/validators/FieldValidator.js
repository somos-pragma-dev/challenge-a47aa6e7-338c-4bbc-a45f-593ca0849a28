import validationRules from '../utils/validationRules';

const FieldValidator = (field, rules) => {
  const rule = rules[field.type];
  if (rule) {
    const errorMessage = rule(field.value);
    return errorMessage || null;
  }
  return null;
};

export default FieldValidator;