import { MapPin, Mail, Phone, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              Annapurna English School
            </h3>
            <p className="text-sm text-muted mb-4">
              We believe in student-centered learning and focus on both
              academics and extracurricular activities for wholesome
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Admission
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span>Ratuwamai-9, Morang, Nepal</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+977-9841424691"
                  className="hover:text-primary transition-colors"
                >
                  +977-9841424691
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:annapurnaenglishschool@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  annapurnaenglishschool@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/annapurnaenglishschool2053/photos"
                target="_blank"
                className="h-10 w-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-hover transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@annapurnaenglishs"
                target="_blank"
                className="h-10 w-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-hover transition-colors"
              >
                <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-hover transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-sm">
          <p className="text-muted">
            © 2025 Annapurna English School. All rights reserved.
          </p>
          <p className="text-muted mt-2">
            Maintained by{" "}
            <span className="text-primary font-semibold">
              Sigmoit Pvt. Ltd.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
