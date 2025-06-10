import {
  Briefcase,
  Calendar,
  MapPin,
  Clock,
  User,
  DollarSign,
  Users,
  TrendingUp,
} from 'lucide-react';
import React from 'react';

interface InternshipHeaderProps {
  internship: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    duration: string;
    stipend: string;
    applyBy: string;
    posted: string;
    applicantsCount: number;
  };
}

const InternshipHeader: React.FC<InternshipHeaderProps> = ({ internship }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex items-center text-green-600 font-medium mb-2">
        <TrendingUp className="h-5 w-5 mr-2" />
        Actively Hiring
      </div>

      <div className="text-xl font-bold text-gray-900">{internship.title}</div>
      <div className="text-lg text-gray-600 mb-4">{internship.company}</div>
      <div className="flex items-center space-x-2 text-gray-800 mb-3">
        <MapPin className="h-5 w-5" />
        <span>{internship.location}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Start Date */}
        <div className="flex items-start space-x-3">
          <Calendar className="h-5 w-5 text-gray-600 mt-1" />
          <div>
            <div className="text-sm text-gray-600">Start Date</div>
            <div className="text-base text-[#7f7f7f]">
              {internship.startDate}
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-gray-600 mt-1" />
          <div>
            <div className="text-sm text-gray-600">Duration</div>
            <div className="text-base text-[#7f7f7f]">
              {internship.duration}
            </div>
          </div>
        </div>

        {/* Stipend */}
        <div className="flex items-start space-x-3">
          <DollarSign className="h-5 w-5 text-gray-600 mt-1" />
          <div>
            <div className="text-sm text-gray-600">Stipend</div>
            <div className="text-base text-[#7f7f7f]">{internship.stipend}</div>
          </div>
        </div>

        {/* Apply By */}
        <div className="flex items-start space-x-3">
          <Calendar className="h-5 w-5 text-gray-600 mt-1" />
          <div>
            <div className="text-sm text-gray-600">Apply By</div>
            <div className="text-base text-[#7f7f7f]">{internship.applyBy}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 text-gray-700">
        <User className="h-5 w-5" />
        <span>Posted {internship.posted}</span>
      </div>
      <div>
        <div className="text-sm text-gray-500 mt-2 bg-orange-200 rounded-3xl">
          Internship
        </div>
      </div>
      {/* <div className="flex items-center space-x-2 text-sm text-blue-600">
        <Users className="h-5 w-5" />
        <span>{applicantsCount} applicants</span>
      </div> */}
    </div>
  );
};

export default InternshipHeader;
