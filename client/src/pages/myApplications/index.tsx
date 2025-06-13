import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApplicationFilter from '@/components/ApplicationFilter';
import ApplicationTable from '@/components/ApplicationTable';
import { toast } from 'react-toastify';

const MyApplicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [data, setData] = useState<any>([]);
  const user = {
    name: 'John Doe',
    emailId: 'rishi.bethapudi8@gmail.com',
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://internshalarepo.onrender.com/api/application/user/${user.emailId}`
        );
        setData(res.data);
      } catch (error) {
        toast.error('Failed to fetch applications');
      }
    };
    fetchData();
  }, []);

  const handleAction = async (id: string, action: string) => {
    try {
      const res = await axios.put(
        `https://internshalarepo.onrender.com/api/application/${id}`,
        { action }
      );
      const updated = data.map((app: any) =>
        app._id === id ? res.data.data : app
      );
      setData(updated);
      toast.success('Application status updated');
    } catch (error) {
      toast.error('Error updating application');
    }
  };

  const filteredApplications = data.filter((app: any) => {
    const searchMatch =
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.user.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'all') return searchMatch;
    return searchMatch && app.status.toLowerCase() === filter;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200 px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              My Applications
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage and review your applications
            </p>
          </div>
          <ApplicationFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filter={filter}
            setFilter={setFilter}
          />
          <ApplicationTable
            applications={filteredApplications}
            handleAction={handleAction}
          />
        </div>
      </div>
    </div>
  );
};

export default MyApplicationsPage;
