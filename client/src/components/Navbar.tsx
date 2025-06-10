'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  X,
  MessageSquareDot,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import logo from '../Assets/logo.png';
import TwoColumnDropdown from './ui/TwoColumnDropdown';
import { useSelector } from 'react-redux';
// import { selectuser } from '@/Feature/Userslice';

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
  // const user = useSelector(selectuser);
  const user = {
    name: 'John Doe',
    email: 'rishi.bethapudi8@gmial.com',
    photo:
      'https://internshala.com/uploads/profile_picture/student/cropped/f8ebeb7158433bd8a7ce21951e9a2b78.jpg',
  };
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMAOpen, setIsMAOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  // const auth = getAuth();
  const handlelogin = async () => {
    // try {
    //   await signInWithPopup(auth, provider);
    //   toast.success("logged in successfully");
    // } catch (error) {
    //   console.error(error);
    //   toast.error("login failed");
    // }
    // setuser({
    //   name: "Rahul",
    //   email: "xyz@gmail.com",
    //   photo:
    //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces",
    // });
  };
  const handlelogout = () => {
    // signOut(auth);
  };
  return (
    <div className="relative">
      <nav className="w-full bg-white border-b shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="logo" width={40} height={40} />
            <span className="text-xl font-bold text-blue-600">Internshala</span>
          </div>

          {/* Navigation Menu */}
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
                  <span className="bg-amber-400 rounded-xl ml-2 py-1 px-2 font-bold text-amber-50">
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
            </NavigationMenuList>
            <div>
              {user ? (
                <div className="flex items-center">
                  <div className="mx-2  flex-row transition-transform duration-150 hover:scale-110 active:scale-95 cursor-pointer">
                    <MessageSquareDot />
                  </div>
                  <div className="relative">
                    <div
                      className="w-10 h-10 rounded-full overflow-hidden ml-2 cursor-pointer"
                      onMouseOver={() => setOpen(true)}
                    >
                      <img
                        src={user?.photo || '/default-user.png'}
                        alt="profile image"
                      />
                    </div>
                    {open && (
                      <div
                        ref={dropdownRef}
                        className="fixed right-2 top-14 z-50 min-w-[250px] rounded-md bg-white p-4 shadow-md border"
                      >
                        <div className="space-y-3 text-sm text-gray-800">
                          <div className="border-b pb-2">
                            <div className="font-semibold text-base">
                              {user?.name || 'Guest User'}
                            </div>
                            <div className="text-xs text-gray-500">
                              {user?.email || 'example@example.com'}
                            </div>
                            <div className="mt-1 text-xs text-gray-500">
                              Level 4
                            </div>
                          </div>

                          <div className="space-y-1 pt-2">
                            {[
                              'Know More',
                              'Home',
                              'My Applications',
                              'My Bookmarks',
                              'Edit Resume',
                              'Edit Preferences',
                              'Safety Tips',
                              'Help Center',
                            ].map((label) => (
                              <Link
                                key={label}
                                href="#"
                                className="block hover:text-blue-600 transition"
                              >
                                {label}
                              </Link>
                            ))}
                          </div>
                          <div>
                            <ul>
                              <li>
                                <button
                                  onClick={handlelogout}
                                  className="w-full text-left text-red-600 hover:text-red-700 font-semibold"
                                >
                                  Logout
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handlelogin}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-center space-x-2 hover:bg-gray-50 "
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-gray-700">Continue with google</span>
                  </button>
                  {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                    {" "}
                    <Link href={"/"}>Register</Link>
                  </button> */}
                  <a
                    href="/adminlogin"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Admin
                  </a>
                </div>
              )}
            </div>
          </NavigationMenu>

          {/* Mobile Menu */}
          <div className="lg:hidden flex justify-end items-center px-4 py-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div
              className={`fixed inset-0 z-40 transition-opacity duration-300 bg-black/50 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onClick={() => setIsOpen(false)}
            ></div>

            <div
              className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              } overflow-y-auto`}
            >
              <div className="flex items-center gap-4 p-4 border-b sticky top-0 bg-white z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={user?.photo || '/default-user.png'}
                    alt="profile image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center text-sm">
                  <div className="font-medium text-gray-800">
                    {user?.name || 'Guest User'}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {user?.email || 'example@example.com'}
                  </div>
                </div>
              </div>

              <ul className="flex flex-col p-4 space-y-3 text-sm text-gray-700">
                {/* Main Navigation */}
                <li className="font-semibold text-gray-800">Explore</li>
                {[
                  'Internships',
                  'Jobs',
                  'Certification Courses',
                  'OFFER',
                  'Placement Guarantee Courses',
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="block hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}

                <hr className="my-3" />

                {/* Personal Tools */}
                <li className="font-semibold text-gray-800">My Stuff</li>
                {[
                  'My Applications',
                  'My Bookmarks',
                  'Edit Resume',
                  'Edit Preferences',
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="block hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}

                <hr className="my-3" />

                {/* Help & Settings */}
                <li>
                  <button
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className="w-full flex justify-between items-center font-semibold text-gray-800 hover:text-blue-600"
                  >
                    More
                    <span>{isMoreOpen ? <ChevronUp /> : <ChevronDown />}</span>
                  </button>
                  {isMoreOpen && (
                    <ul className="mt-2 ml-2 space-y-2 text-gray-600">
                      <li>
                        <a href="#" className="block hover:text-blue-600">
                          Safety Tips
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block hover:text-blue-600">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <button
                          onClick={() => setIsMAOpen(!isMAOpen)}
                          className="w-full flex justify-between items-center font-semibold text-gray-800 hover:text-blue-600"
                        >
                          Manage Account
                          <span>
                            {isMAOpen ? <ChevronUp /> : <ChevronDown />}
                          </span>
                        </button>
                        {isMAOpen && (
                          <ul className="mt-2 ml-2 space-y-2 text-gray-600">
                            <li>
                              <a href="#" className="block hover:text-blue-600">
                                Change Password
                              </a>
                            </li>
                            <li>
                              <a href="#" className="block hover:text-blue-600">
                                Change Email Address
                              </a>
                            </li>
                            <li>
                              <a href="#" className="block hover:text-blue-600">
                                Delete My Account
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>

                <hr className="my-3" />

                {/* Logout */}
                <li>
                  <button
                    onClick={handlelogout}
                    className="w-full text-left text-red-600 hover:text-red-700 font-semibold"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
