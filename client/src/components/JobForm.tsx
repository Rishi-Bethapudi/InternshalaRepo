'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Briefcase,
  Building2,
  MapPin,
  Tags,
  Info,
  Users,
  DollarSign,
  Calendar,
  X,
} from 'lucide-react';
import PerkSelector from './PerkSelector';
interface CommonFormData {
  title: string;
  company: string;
  location: string;
  category: string;
  aboutCompany: string;
  aboutJob?: string;
  aboutInternship?: string;
  whoCanApply: string;
  perks: string[];
  numberOfOpening: string;
  CTC?: string;
  stipend?: string;
  startDate: string;
  AdditionalInfo?: string;
  additionalInfo?: string;
}
interface JobFormProps {
  type: string;
  formData: any;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handlePerksChange: (perks: string[]) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const JobForm: React.FC<JobFormProps> = ({
  type,
  formData,
  handleChange,
  handlePerksChange,
  isLoading,
  onSubmit,
}) => {
  const isInternship = type === 'internship';
  const [showPerkDropdown, setShowPerkDropdown] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowPerkDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Basic Information */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center mb-1">
                <Briefcase className="h-4 w-4 mr-1" />
                Title*
              </div>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder={
                isInternship
                  ? 'e.g. Frontend Developer Intern'
                  : 'e.g. Frontend Developer'
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center mb-1">
                <Building2 className="h-4 w-4 mr-1" />
                Company Name*
              </div>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="e.g. Tech Solutions Inc"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center mb-1">
                <MapPin className="h-4 w-4 mr-1" />
                Location*
              </div>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="e.g. Mumbai, India"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center mb-1">
                <Tags className="h-4 w-4 mr-1" />
                Category*
              </div>
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="e.g. Software Development"
            />
          </div>
        </div>
      </div>

      {/* Company & Position Details */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center mb-1">
              <Info className="h-4 w-4 mr-1" />
              About Company*
            </div>
          </label>
          <textarea
            name="aboutCompany"
            value={formData.aboutCompany}
            onChange={handleChange}
            rows={4}
            className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Describe your company..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center mb-1">
              <Briefcase className="h-4 w-4 mr-1" />
              {isInternship ? 'About Internship*' : 'About Job*'}
            </div>
          </label>
          <textarea
            name={isInternship ? 'aboutInternship' : 'aboutJob'}
            value={isInternship ? formData.aboutInternship : formData.aboutJob}
            onChange={handleChange}
            rows={4}
            className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder={
              isInternship
                ? 'Describe the internship role...'
                : 'Describe the job role...'
            }
          />
        </div>
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center mb-1">
              <Users className="h-4 w-4 mr-1" />
              Who Can Apply*
            </div>
          </label>
          <textarea
            name="whoCanApply"
            value={formData.whoCanApply}
            onChange={handleChange}
            rows={3}
            className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Eligibility criteria..."
          />
        </div>

        <PerkSelector
          selectedPerks={formData.perks}
          onChange={handlePerksChange}
        />
      </div>

      {/* Final Details */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center mb-1">
              <Users className="h-4 w-4 mr-1" />
              Number of Openings*
            </div>
          </label>
          <input
            type="number"
            name="numberOfOpening"
            value={formData.numberOfOpening}
            onChange={handleChange}
            min="1"
            className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center mb-1">
              <DollarSign className="h-4 w-4 mr-1" />
              {isInternship ? 'Stipend*' : 'CTC*'}
            </div>
          </label>
          <input
            type="text"
            name={isInternship ? 'stipend' : 'CTC'}
            value={isInternship ? formData.stipend : formData.CTC}
            onChange={handleChange}
            className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder={isInternship ? 'e.g. ₹15,000/month' : 'e.g. ₹10 LPA'}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center mb-1">
              <Calendar className="h-4 w-4 mr-1" />
              Start Date*
            </div>
          </label>
          <input
            aria-required="true"
            aria-label="Title"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center mb-1">
              <Info className="h-4 w-4 mr-1" />
              Additional Information*
            </div>
          </label>
          <textarea
            name={isInternship ? 'additionalInfo' : 'AdditionalInfo'}
            value={
              isInternship ? formData.additionalInfo : formData.AdditionalInfo
            }
            onChange={handleChange}
            rows={3}
            className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Any additional details..."
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
              {isInternship ? 'Posting Internship...' : 'Posting Job...'}
            </div>
          ) : isInternship ? (
            'Post Internship'
          ) : (
            'Post Job'
          )}
        </button>
      </div>
    </form>
  );
};

export default JobForm;
