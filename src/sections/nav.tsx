import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-shadow duration-300 hover:shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-medium hover:text-primary transition-colors duration-300">
              Weston Clark
            </Link>
            <div className="flex items-center space-x-8 gap-8">
              <Link href="#work" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Work
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                About
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Nav;
