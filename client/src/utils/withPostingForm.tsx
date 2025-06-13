// utils/withPostingForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';

type FormType = 'job' | 'internship';

interface FormData {
  title: string;
  company: string;
  location: string;
  category: string;
  aboutCompany: string;
  aboutJob?: string;
  aboutInternship?: string;
  whoCanApply: string;
  perks: string[]; // Changed from [] to string[]
  numberOfOpening: string;
  CTC?: string;
  stipend?: string;
  startDate: string;
  AdditionalInfo?: string;
  additionalInfo?: string;
}

export function withPostingForm<P>(
  Component: React.ComponentType<
    P & {
      formData: FormData;
      handleChange: (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      ) => void;
      handlePerksChange: (updatedPerks: string[]) => void;
      onSubmit: (e: React.FormEvent) => void; // Fixed casing
      isLoading: boolean;
      type: FormType;
    }
  >,
  type: FormType
) {
  return function WithPostingFormWrapper(props: P) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const initialFormData: FormData = {
      title: '',
      company: '',
      location: '',
      category: '',
      aboutCompany: '',
      [type === 'job' ? 'aboutJob' : 'aboutInternship']: '',
      whoCanApply: '',
      perks: [],
      numberOfOpening: '',
      [type === 'job' ? 'CTC' : 'stipend']: '',
      startDate: '',
      [type === 'job' ? 'AdditionalInfo' : 'additionalInfo']: '',
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handlePerksChange = (updatedPerks: string[]) => {
      if (!Array.isArray(updatedPerks)) {
        console.error('Perks must be an array, received:', updatedPerks);
        return;
      }
      setFormData((prev) => ({
        ...prev,
        perks: updatedPerks.filter((perk) => typeof perk === 'string'),
      }));
    };

    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      if (!e?.target) {
        console.warn('Received non-event value in handleChange:', e);
        return;
      }

      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // Improved validation
      const requiredFields = {
        title: formData.title,
        company: formData.company,
        location: formData.location,
        category: formData.category,
        aboutCompany: formData.aboutCompany,
        [type === 'job' ? 'aboutJob' : 'aboutInternship']:
          type === 'job' ? formData.aboutJob : formData.aboutInternship,
        whoCanApply: formData.whoCanApply,
        numberOfOpening: formData.numberOfOpening,
        startDate: formData.startDate,
        perks: formData.perks.length > 0, // Ensure at least one perk is selected
        [type === 'job' ? 'CTC' : 'stipend']:
          type === 'job' ? formData.CTC : formData.stipend,
      };

      const missingFields = Object.entries(requiredFields)
        .filter(([_, value]) => !value)
        .map(([key]) => key);

      if (missingFields.length > 0) {
        toast.error(`Missing required fields: ${missingFields.join(', ')}`);
        return;
      }

      try {
        setIsLoading(true);
        const endpoint = `https://internshalarepo.onrender.com/api/${type}`;
        await axios.post(endpoint, formData);
        toast.success(
          `${type === 'job' ? 'Job' : 'Internship'} posted successfully`
        );
        router.push('/adminPanel');
      } catch (error: any) {
        console.error('Posting error:', error);
        const message =
          error?.response?.data?.message ||
          error?.message ||
          'Something went wrong';
        toast.error(`Error posting ${type}: ${message}`);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <Component
        {...props}
        formData={formData}
        setFormData={setFormData}
        handlePerksChange={handlePerksChange}
        handleChange={handleChange}
        onSubmit={handleSubmit} // Fixed casing
        isLoading={isLoading} // Fixed casing
        type={type}
      />
    );
  };
}
