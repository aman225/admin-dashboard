'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormContext } from '@/context/FormContext';
import { motion } from 'framer-motion';

const schema = z.object({
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
  zip: z.string().regex(/^\d{5}$/, 'ZIP must be 5 digits'),
});

type AddressData = z.infer<typeof schema>;

export default function AddressStep() {
  const { formData, updateFormData, setCurrentStep } = useFormContext();
  
  const { register, handleSubmit, formState: { errors } } = useForm<AddressData>({
    resolver: zodResolver(schema),
    defaultValues: {
      street: formData.street,
      city: formData.city,
      zip: formData.zip,
    },
  });

  const onSubmit = (data: AddressData) => {
    updateFormData(data);
    setCurrentStep(3);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Street
        </label>
        <input
          {...register('street')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.street && (
          <p className="text-red-500 text-sm mt-1">{errors.street.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          City
        </label>
        <input
          {...register('city')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ZIP Code
        </label>
        <input
          {...register('zip')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.zip && (
          <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
        )}
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => setCurrentStep(1)}
          className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </motion.form>
  );
}