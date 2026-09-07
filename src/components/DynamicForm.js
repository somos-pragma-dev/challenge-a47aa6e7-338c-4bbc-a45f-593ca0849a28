import React from 'react';
import useDynamicForm from '../hooks/useDynamicForm';
import FieldValidator from '../validators/FieldValidator';

const DynamicForm = () => {
  const { fields, addField, removeField, handleInputChange, errors } = useDynamicForm();

  return (
    <form>
      {fields.map((field, index) => (
        <div key={index}>
          <label>{field.name}</label>
          <input
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={handleInputChange(index)}
          />
          {errors[index] && <p>{errors[index]}</p>}
        </div>
      ))}
      <button type="button" onClick={addField}>Añadir Campo</button>
      {fields.length > 1 && <button type="button" onClick={removeField}>Eliminar Último Campo</button>}
    </form>
  );
};

export default DynamicForm;