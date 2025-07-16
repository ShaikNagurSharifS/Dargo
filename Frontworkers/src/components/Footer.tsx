import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full py-6 text-center text-blue-200 bg-gradient-to-br from-[#0f172a] via-blue-900 to-[#1e293b] mt-12">
    <div className="mb-2">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</div>
    <div className="text-xs">Built with React, Vite, and TailwindCSS</div>
  </footer>
);

export default Footer;
