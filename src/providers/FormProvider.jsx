import { createContext, useContext, useRef } from 'react';

const FormContext = createContext(null);

export default function FormProvider({ children }) {
  const fieldsRef = useRef(new Map());

  const register = (name, getValueFn) => {
    fieldsRef.current.set(name, getValueFn);
  };

  const unregister = (name) => {
    fieldsRef.current.delete(name);
  };

  const getFormState = () => {
    const formState = {};
    fieldsRef.current.forEach((getValue, name) => {
      formState[name] = getValue();
    });
    return formState;
  };

  const contextValue = {
    register,
    unregister,
    getFormState,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}
