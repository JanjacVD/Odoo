import { useState } from "react";

interface ValidationRules<T> {
  [key: string]: (value: T[keyof T]) => string | null;
}

export const useFormWithValidation = <T extends Record<string, unknown>>(
  defaultValues: T,
  validationRules: ValidationRules<T>
) => {
  const [formValues, setFormValues] = useState<T>(defaultValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (key: keyof T, value: T[keyof T]) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));

    // Validate the field
    const validationRule = validationRules[key as string];
    if (validationRule) {
      const error = validationRule(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [key]: error || "",
      }));
    }
  };

  const isValid = () => {
    const newErrors: Partial<Record<keyof T, string>> = {};

    // Validate all fields
    Object.keys(validationRules).forEach((key) => {
      const validationRule = validationRules[key];
      const value = formValues[key as keyof T];
      const error = validationRule ? validationRule(value) : null;
      newErrors[key as keyof T] = error || "";
    });

    // Set errors and return validity
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => !!error);
  };

  return {
    formValues,
    errors,
    handleChange,
    isValid,
  };
};
