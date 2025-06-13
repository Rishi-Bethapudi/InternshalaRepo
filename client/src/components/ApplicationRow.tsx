import Link from 'next/link';
import {
  Building2,
  Calendar,
  CheckCircle2,
  Tag,
  User,
  XCircle,
} from 'lucide-react';
import { StatusBadge } from './ApplicationStatusBadge';
import { useRouter } from 'next/router';
export default function ApplicationRow({ application, handleAction }: any) {
  const router = useRouter();
  return (
    <tr
      key={application._id}
      className="hover:bg-gray-50"
      onClick={() => router.push(`/applications/${application._id}`)}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 rounded-full">
            <Building2 className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {application.company}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Tag className="h-4 w-4 mr-1" />
              {application.category}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full">
            <User className="h-5 w-5 text-gray-600" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {application.user.name}
            </div>
            <div className="text-sm text-gray-500">
              {application.user.email}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          {new Date(application.createdAt).toISOString().split('T')[0]}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusBadge status={application.status} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex items-center space-x-3">
          <Link
            href={`/applications/${application._id}`}
            className="text-blue-600 hover:text-blue-900"
          >
            View Details
          </Link>
          <div
            onClick={() => handleAction(application._id, 'accepted')}
            className="text-green-600 hover:text-green-900 cursor-pointer"
          >
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div
            onClick={() => handleAction(application._id, 'rejected')}
            className="text-red-600 hover:text-red-900 cursor-pointer"
          >
            <XCircle className="h-5 w-5" />
          </div>
        </div>
      </td>
    </tr>
  );
}
