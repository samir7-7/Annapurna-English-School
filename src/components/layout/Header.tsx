import { MapPin, Mail, Phone, Menu, X, IdCardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logo from "@/assets/Annapurna School Logo.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-background shadow-sm sticky top-0 z-[9999]">
      {/* Top Contact Bar */}
      <div
        className={`border-b border-border hidden md:block lg:block transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-96 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-10 w-10 text-primary" />
              <div>
                <div className="font-semibold text-foreground text-xl uppercase">
                  Location
                </div>
                <div>Ratuwamai-9 , Morang</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-10 w-10 text-primary" />
              <div>
                <div className="font-semibold text-foreground text-xl uppercase">
                  Email Us
                </div>
                <a
                  href="mailto:mannapurnaedu@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  annapurnaedu@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-10 w-10 text-primary font-semibold" />
              <div>
                <div className="font-semibold text-foreground text-xl uppercase">
                  Call Us
                </div>
                <a
                  href="tel:+977-9841424691"
                  className="hover:text-primary transition-colors"
                >
                  +977-9841424691
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} width={70} alt="" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 text-lg">
              <Link
                to="/"
                className={`${
                  location.pathname === "/" ? "text-primary" : "text-foreground"
                } font-semibold hover:text-primary-hover transition-colors`}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about"
                    ? "text-primary"
                    : "text-foreground"
                }  font-semibold hover:text-primary-hover transition-colors`}
              >
                ABOUT
              </Link>
              <Link
                to="/digital-annapurna"
                className={`${
                  location.pathname === "/digital-annapurna"
                    ? "text-primary"
                    : "text-foreground"
                } font-medium hover:text-primary transition-colors`}
              >
                DIGITAL ANNAPURNA
              </Link>
              <Link
                to="/blogs"
                className={`${
                  location.pathname === "/blogs"
                    ? "text-primary"
                    : "text-foreground"
                } font-medium hover:text-primary transition-colors`}
              >
                BLOGS
              </Link>
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact"
                    ? "text-primary"
                    : "text-foreground"
                } font-medium hover:text-primary transition-colors`}
              >
                CONTACT US
              </Link>
              <Link to="/admission">
                <Button variant="admission" className="ml-4">
                  <IdCardIcon className="text-2xl" /> ADMISSION →
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-border py-4 space-y-2">
              <Link to="/" className="block py-2 text-primary font-semibold">
                HOME
              </Link>
              <Link
                to="/about"
                className="block py-2 hover:text-primary transition-colors"
              >
                ABOUT US
              </Link>
              <Link
                to="/digital-annapurna"
                className="block py-2 hover:text-primary transition-colors"
              >
                DIGITAL ANNAPURNA
              </Link>
              <Link
                to="/blogs"
                className="block py-2 hover:text-primary transition-colors"
              >
                BLOGS
              </Link>
              <Link
                to="/contact"
                className="block py-2 hover:text-primary transition-colors"
              >
                CONTACT US
              </Link>
              <Link to="/admission" className="block py-2">
                <Button variant="admission" className="w-full">
                  📋 ADMISSION →
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
