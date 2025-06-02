'use client';

import { motion } from 'framer-motion';

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = ['Basic Info', 'Address', 'Review'];

  return (
    <div className="flex justify-between mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 flex items-center">
          <div className="relative">
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                currentStep > index + 1
                  ? 'bg-green-500 border-green-500 text-white'
                  : currentStep === index + 1
                  ? 'bg-blue-500 border-blue-500 text-white'
                  : 'bg-white border-gray-300 text-gray-500'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: currentStep === index + 1 ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep > index + 1 ? '✓' : index + 1}
            </motion.div>
            <span className="absolute top-12 -left-4 text-xs text-gray-600 whitespace-nowrap">
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-2 ${
              currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-300'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}