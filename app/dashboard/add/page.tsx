'use client';

import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { useFormContext } from '@/context/FormContext';
import StepIndicator from '@/components/MultiStepForm/StepIndicator';
import BasicInfoStep from '@/components/MultiStepForm/BasicInfoStep';
import AddressStep from '@/components/MultiStepForm/AddressStep';
import ReviewStep from '@/components/MultiStepForm/ReviewStep';
import { AnimatePresence } from 'framer-motion';

export default function AddUserPage() {
  const { currentStep } = useFormContext();

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster position="top-right" />
      
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
        >
          ← Back to Dashboard
        </Link>
      </div>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Add New User</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <StepIndicator currentStep={currentStep} />
          
          <AnimatePresence mode="wait">
            {currentStep === 1 && <BasicInfoStep key="step1" />}
            {currentStep === 2 && <AddressStep key="step2" />}
            {currentStep === 3 && <ReviewStep key="step3" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}