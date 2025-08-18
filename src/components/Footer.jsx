import Image from 'next/image';
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#03091D] text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <Image src="/Hosting Logo 1 1.png" alt='logo' className='my-2' width={50} height={50} />
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">How We Serve</a></li>
              <li><a href="#" className="hover:text-white">Who Do We Serve</a></li>
            </ul>
          </div>

          {/* Services 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-white">Cloud Services</a></li>
              <li><a href="#" className="hover:text-white">Enterprise Network & Security Solutions</a></li>
              <li><a href="#" className="hover:text-white">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white">IT Infrastructure Virtualization</a></li>
            </ul>
          </div>

          {/* Services 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4 invisible md:visible">‎</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white">Web Development</a></li>
              <li><a href="#" className="hover:text-white">DevOps</a></li>
              <li><a href="#" className="hover:text-white">IT Managed & Consulting Services</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-700 pt-4">
          Copyright © taposdeysujog@gmail.com
        </div>
      </div>
    </footer>
  );
}

