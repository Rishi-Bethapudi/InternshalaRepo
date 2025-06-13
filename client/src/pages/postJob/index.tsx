'use client';

import JobForm from '../../components/JobForm';
import { withPostingForm } from '../../utils/withPostingForm';

const PostJobPage = ({
  formData,
  handleChange,
  handlePerksChange,
  onSubmit,
  isLoading,
}: any) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Post New Job</h1>
            <p className="mt-2 text-sm text-gray-600">
              Create a new job opportunity
            </p>
          </div>
          <JobForm
            type="job"
            formData={formData}
            handleChange={handleChange}
            handlePerksChange={handlePerksChange}
            isLoading={isLoading}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default withPostingForm(PostJobPage, 'job');
