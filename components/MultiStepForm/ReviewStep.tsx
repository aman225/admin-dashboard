'use client';

import { useFormContext } from '@/context/FormContext';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ReviewStep() {
  const { formData, setCurrentStep, resetForm } = useFormContext();
  const router = useRouter();

  const handleSubmit = () => {
    // Log to console as required
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast.success('User added successfully!');
    
    // Reset form and redirect
    resetForm();
    router.push('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      <h3 className="text-lg font-semibold text-gray-900">Review Your Information</h3>
      
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div>
          <h4 className="font-medium text-gray-700">Basic Information</h4>
          <p className="text-gray-600">Name: {formData.name}</p>
          <p className="text-gray-600">Email: {formData.email}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-700">Address</h4>
          <p className="text-gray-600">Street: {formData.street}</p>
          <p className="text-gray-600">City: {formData.city}</p>
          <p className="text-gray-600">ZIP: {formData.zip}</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Confirm & Submit
        </button>
      </div>
    </motion.div>
  );
}