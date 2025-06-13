'use client';

import { useState, useRef, useEffect } from 'react';
import { Info, X } from 'lucide-react';

interface PerkSelectorProps {
  selectedPerks: string[];
  onChange: (updated: string[]) => void;
}

const PERKS = {
  job: [
    '💰 Annual Bonus / Performance-Based Incentives',
    '🩺 Health Insurance / Medical Benefits',
    '🧳 Paid Time Off / Vacation Leaves',
    '💻 Company Laptop / Workstation Provided',
    '💸 Reimbursement for Work Expenses',
    '🧘 Wellness Programs / Gym Membership',
    '🚕 Travel Allowance / Cab Facilities',
    '🏠 Relocation Assistance',
    '🏦 Provident Fund / Gratuity Benefits',
  ],
  internship: [
    '🔄 Flexible Internship Duration',
    '🔍 Real-World Project Exposure',
    '🧑‍💻 Opportunity to Work with Senior Developers',
    '💼 Pre-placement Offer (PPO) for Top Performers',
    '🏅 Best Intern Award / Recognition Program',
    '🎤 Participation in Team Stand-ups and Client Meetings',
  ],
};

export default function PerkSelector({
  selectedPerks,
  onChange,
}: PerkSelectorProps) {
  const [perkInput, setPerkInput] = useState('');
  const [filteredPerks, setFilteredPerks] = useState([
    ...PERKS.job,
    ...PERKS.internship,
  ]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAddPerk = (perk: string) => {
    const trimmed = perk.trim();
    if (trimmed && !selectedPerks.includes(trimmed)) {
      onChange([...selectedPerks, trimmed]);
    }
    setPerkInput('');
    setShowDropdown(false);
  };

  const handleRemovePerk = (perk: string) => {
    onChange(selectedPerks.filter((p) => p !== perk));
  };

  const handleCustomPerk = () => {
    handleAddPerk(perkInput);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPerkInput(value);
    setShowDropdown(true);
    setFilteredPerks(
      [...PERKS.job, ...PERKS.internship].filter((perk) =>
        perk.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        <div className="flex items-center mb-1">
          <Info className="h-4 w-4 mr-1" />
          Perks*
        </div>
      </label>

      {/* Display Selected Perks */}
      <div className="flex flex-wrap gap-2 mb-2">
        {selectedPerks.map((perk, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {perk}
            <div
              onClick={() => handleRemovePerk(perk)}
              className="ml-2 text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Search and Add Perks */}
      <div className="relative" ref={wrapperRef}>
        <div className="flex gap-2">
          <input
            type="text"
            value={perkInput}
            onChange={handleSearch}
            onFocus={() => setShowDropdown(true)}
            placeholder="Search or add perks..."
            className="text-black mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <button
            type="button"
            onClick={handleCustomPerk}
            className="mt-1 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>

        {showDropdown && filteredPerks.length > 0 && (
          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto sm:text-sm">
            {filteredPerks.map((perk) => (
              <div
                key={perk}
                className={`cursor-pointer py-2 pl-3 pr-9 ${
                  selectedPerks.includes(perk)
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => handleAddPerk(perk)}
              >
                {perk}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
