// import { selectuser } from "@/Feature/Userslice";
import {
  ExternalLink,
  Mail,
  Phone,
  User,
  Linkedin,
  Github,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  //   const user = useSelector(selectuser);
  const user = {
    name: 'Rishi',
    email: 'rishi@gmail.com',
    role: 'student',
    photo:
      'https://internshala.com/uploads/profile_picture/student/cropped/f8ebeb7158433bd8a7ce21951e9a2b78.jpg',
    phone: '9876543210',
    appliedInternships: [
      '684827eeb7ebd311e52327b4',
      '68482dab26c4ea6beaa24b7f',
    ],
    acceptedApplications: ['684bf165a5081d14d3adcad4'],
    createdAt: '2025-06-13T09:37:41.900+00:00',
    linkedIn: 'https://linkedin.com/in/...',
    github: 'https://github.com/...',
    portfolio: 'https://rishi.dev',
    bio: 'Passionate full-stack developer...',
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="relative h-32 bg-gradient-to-r from-blue-500 to-blue-600">
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              {user?.photo ? (
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-16 pb-8 px-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
            <p className="text-gray-500 flex justify-center items-center mt-2">
              <Mail className="h-4 w-4 mr-2" /> {user?.email}
            </p>
            {user?.phone && (
              <p className="text-gray-500 flex justify-center items-center mt-1">
                <Phone className="h-4 w-4 mr-2" /> {user.phone}
              </p>
            )}
            <div className="flex justify-center space-x-4 mt-4">
              {user?.linkedIn && (
                <a
                  href={user.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline flex items-center"
                >
                  <Linkedin className="h-4 w-4 mr-1" /> LinkedIn
                </a>
              )}
              {user?.github && (
                <a
                  href={user.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline flex items-center"
                >
                  <Github className="h-4 w-4 mr-1" /> GitHub
                </a>
              )}
              {user?.portfolio && (
                <a
                  href={user.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" /> Portfolio
                </a>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <span className="text-blue-600 font-bold text-2xl">
                  {user?.appliedInternships?.length ?? 0}
                </span>
                <p className="text-blue-600 text-sm mt-1">
                  Internship Applications
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <span className="text-green-600 font-bold text-2xl">
                  {user?.acceptedApplications?.length ?? 0}
                </span>
                <p className="text-green-600 text-sm mt-1">Accepted</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center pt-6">
              <Link
                href="/userapplication"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View My Applications
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
