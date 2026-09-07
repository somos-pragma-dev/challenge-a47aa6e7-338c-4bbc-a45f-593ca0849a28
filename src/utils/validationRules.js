export default {
  text: (value) => value.trim()!== '' || 'Campo requerido',
  number: (value) =>!isNaN(value) || 'Ingrese un número válido',
  date: (value) =>!isNaN(Date.parse(value)) || 'Ingrese una fecha válida',
};