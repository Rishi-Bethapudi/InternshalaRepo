'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, MessagesSquare } from 'lucide-react';
import logo from '../Assets/logo.png';
import TwoColumnDropdown from './ui/TwoColumnDropdown';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const internshipsMenu = {
  'Top Locations': [
    'Work from Home',
    'Internship in Bangalore',
    'Internship in Delhi',
    'Internship in Hyderabad',
    'Internship in Mumbai',
    'Internship in Chennai',
    'Internship in Pune',
    'Internship in Kolkata',
    'Internship in Jaipur',
    'International Internship',
    'View all internships',
  ],
  'Top Profiles': [
    'Web Development Internship',
    'Data Science Internship',
    'Machine Learning Internship',
    'UI/UX Design Internship',
    'Digital Marketing Internship',
    'Content Writing Internship',
    'Graphic Design Internship',
    'Finance Internship',
    'Human Resources Internship',
    'Software Engineering Internship',
    'Android App Development Internship',
    'Business Development Internship',
  ],
  'Top Categories': [
    'Engineering Internships',
    'Management Internships',
    'Business/MBA Internship',
    'Part-Time Jobs/Internships',
    'Humanities Internship',
    'Science Internship',
    'Internships with Job Offer',
    'Internships for Women',
    'View all internships',
  ],
  'Explore More Internships': ['NGO Internships', 'Startup Internships'],
  'Placement Guarantee Courses': [
    'Full Stack Development Course',
    'Data Science Course',
    'UI/UX Design Course',
    'Human Resource Management Course',
    'Product Management Course',
    'Electric Vehicle Course',
    'Digital Marketing Course',
    'Financial Modelling Course',
    'Supply Chain Logistics Course',
  ],
};
const JobsMenu = {
  'Top Locations': [
    'Work from Home',
    'Jobs in Bangalore',
    'Jobs in Delhi',
    'Jobs in Hyderabad',
    'Jobs in Mumbai',
    'Jobs in Chennai',
    'Jobs in Pune',
    'Jobs in Kolkata',
    'Jobs in Jaipur',
  ],
  'Top Categories': [
    'Software Development',
    'Data Science',
    'Marketing',
    'Design',
  ],
  'Explore More Jobs': ['NGO Jobs', 'Startup Jobs'],
};

const CoursesMenu = {
  'Certification Courses': [
    'Web Development',
    'Programming with Python',
    'Machine Learning',
    'React',
    'Core Java',
    'Digital Marketing',
    'Advanced Excel',
    'AutoCAD',
    'View 70+ more courses',
  ],
  'Placement Guarantee Courses': [
    'Full Stack Development Course',
    'Data Science Course',
    'UI/UX Design Course',
    'Human Resource Management Course',
    'Product Management Course',
    'Electric Vehicle Course',
    'Digital Marketing Course',
    'Financial Modelling Course',
    'Supply Chain Logistics Course',
  ],
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="text-xl font-bold text-blue-600">Internshala</span>
        </div>

        {/* Right: Desktop Nav */}
        <NavigationMenu className="hidden lg:flex ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Internships</NavigationMenuTrigger>
              <NavigationMenuContent>
                <TwoColumnDropdown data={internshipsMenu} />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Courses
                <span className="bg-amber-400 rounded-xl ml-2 py-1 px-2 font-bold text-amber-50 ">
                  OFFER
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <TwoColumnDropdown data={CoursesMenu} />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <TwoColumnDropdown data={JobsMenu} />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <MessagesSquare />
              <NavigationMenuContent>
                <TwoColumnDropdown data={JobsMenu} />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
              <NavigationMenuContent
                className="min-w-[300px] p-4 bg-white shadow-md rounded-md align-end"
                style={{
                  marginRight: '10px', // spacing from the edges
                }}
              >
                <div className="space-y-3 text-sm text-gray-800">
                  {/* User Info */}
                  <div className="border-b pb-2">
                    <div className="font-semibold text-base">
                      Rishi Bethapudi
                    </div>
                    <div className="text-xs text-gray-500">
                      rishi.bethapudi7@gmail.com
                    </div>
                    <div className="mt-1 text-xs text-gray-500">Level 4</div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-1 pt-2">
                    <Link
                      href="#"
                      className="block hover:text-blue-600 transition"
                    >
                      Know More
                    </Link>
                    <Link
                      href="#"
                      className="block hover:text-blue-600 transition"
                    >
                      Home
                    </Link>
                    <Link
                      href="#"
                      className="block hover:text-blue-600 transition"
                    >
                      My Applications
                    </Link>
                    <Link
                      href="#"
                      className="block hover:text-blue-600 transition"
                    >
                      My Bookmarks
                    </Link>
                    <Link
                      href="#"
                      className="block hover:text-blue-600 transition"
                    >
                      Edit Resume
                    </Link>
                    <Link
                      href="#"
                      className="block hover:text-blue-600 transition"
                    >
                      Edit Preferences
                    </Link>
                    <Link
                      href="#"
                      className="block hover:text-blue-600 transition"
                    >
                      Safety Tips
                    </Link>
                    <Link
                      href="#"
                      className="block hover:text-blue-600 transition"
                    >
                      Help Center
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Hamburger Button - Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - optional: implement later */}
    </nav>
  );
};

export default Navbar;

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
