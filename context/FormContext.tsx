'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { FormData } from '@/types/user';

interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  resetForm: () => void;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  street: '',
  city: '',
  zip: '',
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('formProgress');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData(parsed.formData);
      setCurrentStep(parsed.currentStep);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('formProgress', JSON.stringify({ formData, currentStep }));
  }, [formData, currentStep]);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    localStorage.removeItem('formProgress');
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, currentStep, setCurrentStep, resetForm }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within FormProvider');
  }
  return context;
};