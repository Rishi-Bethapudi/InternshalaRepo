import { Facebook, Twitter, Instagram, Download } from 'lucide-react';

interface FooterSectionProps {
  title: string;
  items: string[];
  links?: boolean;
}

function FooterSection({ title, items, links = false }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-bold text-gray-300">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            {links ? (
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 hover:underline transition-colors"
              >
                {item}
              </a>
            ) : (
              <span className="text-gray-400 hover:text-blue-400 hover:underline cursor-pointer transition-colors">
                {item}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <FooterSection
            title="Internship by places"
            items={[
              'New York',
              'Los Angeles',
              'Chicago',
              'San Francisco',
              'Miami',
              'Seattle',
            ]}
          />
          <FooterSection
            title="Internship by stream"
            items={[
              'About us',
              'Careers',
              'Press',
              'News',
              'Media kit',
              'Contact',
            ]}
          />
          <FooterSection
            title="Job Places"
            items={[
              'Blog',
              'Newsletter',
              'Events',
              'Help center',
              'Tutorials',
              'Supports',
            ]}
            links
          />
          <FooterSection
            title="Jobs by streams"
            items={[
              'Startups',
              'Enterprise',
              'Government',
              'SaaS',
              'Marketplaces',
              'Ecommerce',
            ]}
            links
          />
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-600" />

        {/* Bottom Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <FooterSection
            title="About us"
            items={['Startups', 'Enterprise']}
            links
          />
          <FooterSection
            title="Team diary"
            items={['Startups', 'Enterprise']}
            links
          />
          <FooterSection
            title="Terms and conditions"
            items={['Startups', 'Enterprise']}
            links
          />
          <FooterSection title="Sitemap" items={['Startups']} links />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            <Download className="w-4 h-4" /> Get Android App
          </button>
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6 hover:text-blue-400 transition-colors cursor-pointer" />
            <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-pink-400 transition-colors cursor-pointer" />
          </div>
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
