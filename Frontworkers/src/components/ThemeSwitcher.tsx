import React, { useState } from 'react';


const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    // System preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

const ThemeSwitcher: React.FC = () => {
  const [dark, setDark] = useState(getInitialTheme);
  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);
  return (
    <button
      className="px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition-colors"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeSwitcher;
