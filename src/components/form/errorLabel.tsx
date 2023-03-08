import React from 'react';

interface IProps {
  error: string;
}

const FormErrorLabel: React.FC<IProps> = ({ error }) => {
  return <>{error && <label className="form__error">{error}</label>}</>;
};

export default FormErrorLabel;
