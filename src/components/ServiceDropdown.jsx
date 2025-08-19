import React from 'react'
import { FaCloud, FaShieldAlt, FaNetworkWired, FaBullhorn, FaCode, FaCogs, FaLaptopCode } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

export default function ServiceDropdown() {
  return (
    <div>
      
      <div className="absolute -right-80 top-full mt-2 w-[1300px] bg-white shadow-lg rounded-lg px-10 pt-5 pb-10  z-100">
        <div className="grid grid-cols-3 gap-4 place-items-center text-gray-600">
          {/* Column 1 */}
          <div className='space-y-3'>
            <div className='space-y-2'><div className="flex items-center justify-start gap-2">
              <p className="font-normal">
                <FaLaptopCode />
              </p>
              <p className="font-semibold text-gray-600">
                Digital Transformation
              </p>
            </div>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Business Email Services</li>
              <li>Data Sharing & Protection</li>
              <li>Communication Services</li>
              <li>Mobility & Security Services</li>
              <li>Business Applications Management</li>
              <li>Corporate CRM & ERP solutions</li>
              <li>Data Migration</li>
              <li>Microsoft 365 Platform Implementation</li>
            </ul></div>

           <div className='space-y-2'>
            <div className="flex items-center justify-start gap-2">
              <p className="font-normal">
                <FaShieldAlt />
              </p>
              <p className="font-semibold text-gray-600">
                Cyber Security
              </p>
            </div>
            
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Vulnerability & Pen Test</li>
              <li>Assessments & Audits</li>
              <li>Zero Trust Security</li>
              <li>Security Information & Event Management</li>
              <li>Data Loss Prevention</li>
              <li>Mobile Device Management</li>
              <li>Key Management</li>
            </ul>
           </div>
            <div className='space-y-2'><div className="flex items-center justify-start gap-2">
              <p className="font-normal">
                <FaLaptopCode />
              </p>
              <p className="font-semibold text-gray-600">
                Web Development
              </p>
            </div>
            
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>PHP Laravel Framework</li>
              <li>ASP.NET Framework</li>
              <li>Front-end Development</li>
              <li>Responsive Web Design</li>
              <li>WordPress Themes</li>
              <li>Web API</li>
              <li>Database Management</li>
              <li>Website Maintenance & Support</li>
            </ul></div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-2">Cloud Services</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Virtual Machine & Desktop</li>
              <li>Virtual Networking & Services</li>
              <li>Cloud Storage & Backup services</li>
              <li>Cloud Database Services</li>
              <li>Identity Services</li>
              <li>Security & Monitoring</li>
              <li>Migration Services</li>
              <li>Management & Governance</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">
              IT Infrastructure Virtualization
            </h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>VMware Products & Solutions</li>
              <li>Microsoft Hyper-V Services</li>
              <li>Linux KVM</li>
              <li>Proxmox VE</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">DevOps</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Azure DevOps</li>
              <li>Container Platforms</li>
              <li>Infrastructure as Code</li>
              <li>Version Control & Collaborative Coding</li>
              <li>Configuration Management</li>
              <li>Pipeline (CI/CD)</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-2">
              Enterprise Network & Security Solutions
            </h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>LAN Implementation & Migration</li>
              <li>WAN Implementation & Migration</li>
              <li>WLAN Implementation & Migration</li>
              <li>Advanced Networking Features Implementation</li>
              <li>Network Security Implementation</li>
              <li>Site to Site VPN Implementation</li>
              <li>Firewall Security Solutions</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">Digital Marketing</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>SEO – Search Engine Optimization</li>
              <li>Social Media Marketing</li>
              <li>Email Marketing</li>
              <li>Telemarketing</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">
              IT Managed & Consulting Services
            </h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Service Desk</li>
              <li>Microsoft 365 Platform Administration</li>
              <li>IT Network and Security Maintenance</li>
              <li>System Windows and Linux Support</li>
              <li>IT Consulting Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
