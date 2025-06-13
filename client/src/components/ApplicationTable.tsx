import ApplicationRow from './ApplicationRow';

export default function ApplicationTable({ applications, handleAction }: any) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {[
              'Company & Category',
              'Applicant',
              'Applied Date',
              'Status',
              'Actions',
            ].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {applications.map((application: any) => (
            <ApplicationRow
              key={application._id}
              application={application}
              handleAction={handleAction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
