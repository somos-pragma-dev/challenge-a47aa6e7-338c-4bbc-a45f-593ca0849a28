import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DynamicForm from '../src/components/DynamicForm';

describe('DynamicForm', () => {
  test('renders form with initial field', () => {
    const { getByLabelText } = render(<DynamicForm />);
    expect(getByLabelText('Campo 1')).toBeInTheDocument();
  });

  test('adds a new field when button is clicked', () => {
    const { getByText, getByLabelText } = render(<DynamicForm />);
    fireEvent.click(getByText('Añadir Campo'));
    expect(getByLabelText('Campo 2')).toBeInTheDocument();
  });

  test('removes the last field when button is clicked', () => {
    const { getByText, queryByLabelText } = render(<DynamicForm />);
    fireEvent.click(getByText('Añadir Campo'));
    fireEvent.click(getByText('Eliminar Último Campo'));
    expect(queryByLabelText('Campo 2')).toBeNull();
  });

  test('validates fields on input change', () => {
    const { getByLabelText, getByText } = render(<DynamicForm />);
    fireEvent.change(getByLabelText('Campo 1'), { target: { value: '' } });
    expect(getByText('Campo requerido')).toBeInTheDocument();
  });
});