import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-sm border-b border-border transition-shadow duration-300 hover:shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="group rounded-md">
              <Link
                href="/"
                className="text-lg font-medium transition-colors duration-300 group-hover:text-primary group-hover:bg-white/10 group-hover:shadow-[0_0_18px_4px_rgba(255,255,255,0.35)] rounded-md px-2 py-1"
              >
                Weston Clark
              </Link>
            </div>
            <div className="flex items-center space-x-8 gap-8">
              <div className="group rounded-md">
                <Link href="#work" className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary group-hover:bg-white/10 group-hover:shadow-[0_0_18px_4px_rgba(255,255,255,0.35)] rounded-md px-2 py-1">
                  Work
                </Link>
              </div>
              <div className="group rounded-md">
                <Link href="#about" className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary group-hover:bg-white/10 group-hover:shadow-[0_0_18px_4px_rgba(255,255,255,0.35)] rounded-md px-2 py-1">
                  About
                </Link>
              </div>
              <div className="group rounded-md">
                <Link href="#contact" className='text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary group-hover:bg-white/10 group-hover:shadow-[0_0_18px_4px_rgba(255,255,255,0.35)] rounded-md px-2 py-1'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Nav;
