import React from 'react';

export default function applyModel() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 px-2 sm:px-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Apply to {internshipData.company}
          </h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-6 text-sm sm:text-base">
          {/* Resume Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Your Resume</h3>
            <p className="text-gray-600">
              Your current resume will be submitted with the application.
            </p>
          </div>

          {/* Cover Letter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Cover Letter</h3>
            <p className="text-gray-600 mb-2">
              Why should you be selected for this internship?
            </p>
            <textarea
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Write your cover letter here..."
            />
          </div>

          {/* Availability Options */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Your Availability
            </h3>
            <div className="space-y-3">
              {[
                'Yes, I am available to join immediately',
                'No, I am currently on notice period',
                'No, I will have to serve notice period',
                'Other',
              ].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={option}
                    checked={availability === option}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            {user ? (
              <button
                onClick={handlesubmitapplication}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            ) : (
              <Link
                href="/"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-center"
              >
                Sign up to apply
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
