import { useState, useCallback } from 'react';
import validationRules from '../utils/validationRules';
import FieldValidator from '../validators/FieldValidator';

const useDynamicForm = () => {
  const [fields, setFields] = useState([{ type: 'text', name: 'Campo 1', value: '' }]);
  const [errors, setErrors] = useState({});

  const addField = () => {
    setFields([...fields, { type: 'text', name: `Campo ${fields.length + 1}`, value: '' }]);
  };

  const removeField = () => {
    setFields(fields.slice(0, -1));
  };

  const handleInputChange = useCallback((index) => (event) => {
    const { name, value } = event.target;
    const newFields = [...fields];
    newFields[index].value = value;
    setFields(newFields);
    const validationError = FieldValidator(newFields[index], validationRules);
    setErrors((prevErrors) => ({...prevErrors, [index]: validationError }));
  }, [fields]);

  return { fields, addField, removeField, handleInputChange, errors };
};

export default useDynamicForm;