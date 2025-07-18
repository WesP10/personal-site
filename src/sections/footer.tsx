const Footer = () => (

  <footer id="contact" className="container mx-auto px-6 py-8 gap-8 border-t border-border">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-16 w-full mb-12 py-8">
      <div>
        <h3 className="text-2xl font-light mb-4 animate-fade-in">Let's Connect</h3>
        <p className="text-muted-foreground">
          Thanks for stopping by! Here's more about me if you're interested.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-2 text-sm h-full py-2 md:pt-4">
        <a href="https://linkedin.com/in/westonclark" className="text-muted-foreground hover:text-primary transition-colors duration-300">
          LinkedIn
        </a>
        <a href="https://github.com/westonclark" className="text-muted-foreground hover:text-primary transition-colors duration-300">
          GitHub
        </a>
        <a href="mailto:wc123@cornell.edu" className="text-muted-foreground hover:text-primary transition-colors duration-300">
          Email
        </a>
        <a href="res/resume.pdf" className="text-muted-foreground hover:text-primary transition-colors duration-300">
          Resume
        </a>
      </div>
    </div>

    <div className="mt-20 py-8 border-t border-border text-center block">
      <p className="text-xs text-muted-foreground">
        © 2025 Weston Clark. Cornell Engineering Computer Science Student.
      </p>
    </div>
  </footer>
);

export default Footer;