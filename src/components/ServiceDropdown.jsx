import React from "react";
import {
  FaCloud,
  FaShieldAlt,
  FaNetworkWired,
  FaBullhorn,
  FaCode,
  FaCogs,
  FaLaptopCode,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

export default function ServiceDropdown() {
  return (
    <div>
      <div className="absolute -left-230 right-0 top-full mt-2 w-screen bg-[linear-gradient(90deg,#FFFFFF_0%,#DDE4FF_100%)] shadow-lg px-10 pt-5 pb-10 z-[1000]">
        <div className="grid grid-cols-3 gap-4 place-items-start text-gray-600">
          {/* Column 1 */}
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-start gap-2">
                <p className=" text-2xl">
                  <FaLaptopCode />
                </p>
                <p className="font-semibold text-gray-600">
                  Digital Transformation
                </p>
              </div>
             <ul className="space-y-1 px-8 text-gray-600 text-sm">
                <li>Business Email Services</li>
                <li>Data Sharing & Protection</li>
                <li>Communication Services</li>
                <li>Mobility & Security Services</li>
                <li>Business Applications Management</li>
                <li>Corporate CRM & ERP solutions</li>
                <li>Data Migration</li>
                <li>Microsoft 365 Platform Implementation</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-start gap-2">
                <p className=" text-2xl">
                  <FaShieldAlt />
                </p>
                <p className="font-semibold text-gray-600">Cyber Security</p>
              </div>

             <ul className="space-y-1 px-8 text-gray-600 text-sm">
                <li>Vulnerability & Pen Test</li>
                <li>Assessments & Audits</li>
                <li>Zero Trust Security</li>
                <li>Security Information & Event Management</li>
                <li>Data Loss Prevention</li>
                <li>Mobile Device Management</li>
                <li>Key Management</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-start gap-2">
                <p className=" text-2xl">
                  <FaLaptopCode />
                </p>
                <p className="font-semibold text-gray-600">Web Development</p>
              </div>

             <ul className="space-y-1 px-8 text-gray-600 text-sm">
                <li>PHP Laravel Framework</li>
                <li>ASP.NET Framework</li>
                <li>Front-end Development</li>
                <li>Responsive Web Design</li>
                <li>WordPress Themes</li>
                <li>Web API</li>
                <li>Database Management</li>
                <li>Website Maintenance & Support</li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-start gap-2">
                <p className=" text-2xl">
                  <FaCloud />
                </p>
                <p className="font-semibold text-gray-600">Cloud Services</p>
              </div>

             <ul className="space-y-1 px-8 text-gray-600 text-sm">
                <li>Virtual Machine & Desktop</li>
                <li>Virtual Networking & Services</li>
                <li>Cloud Storage & Backup services</li>
                <li>Cloud Database Services</li>
                <li>Identity Services</li>
                <li>Security & Monitoring</li>
                <li>Migration Services</li>
                <li>Management & Governance</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-start gap-2">
                <p className=" text-2xl">
                  <FaCode />
                </p>

                <p className="font-semibold text-gray-600">
                  IT Infrastructure Virtualization
                </p>
              </div>
             <ul className="space-y-1 px-8 text-gray-600 text-sm">
                <li>VMware Products & Solutions</li>
                <li>Microsoft Hyper-V Services</li>
                <li>Linux KVM</li>
                <li>Proxmox VE</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-start gap-2">
                <p className=" text-2xl">
                  <FaCogs />
                </p>
                <p className="font-semibold text-gray-600">DevOps</p>
              </div>
              <ul className="px-8 space-y-1 text-gray-600 text-sm">
                <li>Azure DevOps</li>
                <li>Container Platforms</li>
                <li>Infrastructure as Code</li>
                <li>Version Control & Collaborative Coding</li>
                <li>Configuration Management</li>
                <li>Pipeline (CI/CD)</li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
         <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-start gap-2">
                <p className=" text-2xl">
                  <FaNetworkWired />
                </p>
                <p className="font-semibold text-gray-600">
                  Enterprise Network & Security Solutions
                </p>
              </div>
             <ul className="space-y-1 px-8 text-gray-600 text-sm">
                <li>LAN Implementation & Migration</li>
                <li>WAN Implementation & Migration</li>
                <li>WLAN Implementation & Migration</li>
                <li>Advanced Networking Features Implementation</li>
                <li>Network Security Implementation</li>
                <li>Site to Site VPN Implementation</li>
                <li>Firewall Security Solutions</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-start gap-2">
                <p className=" text-2xl">
                  <FaBullhorn />
                </p>
                <p className="font-semibold text-gray-600">Digital Marketing</p>
              </div>

             <ul className="space-y-1 px-8 text-gray-600 text-sm">
                <li>SEO – Search Engine Optimization</li>
                <li>Social Media Marketing</li>
                <li>Email Marketing</li>
                <li>Telemarketing</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-start gap-2">
                <p className=" text-2xl">
                  <MdSecurity />
                </p>
                <p className="font-semibold text-gray-600">
                  IT Managed & Consulting Services
                </p>
              </div>

             <ul className="space-y-1 px-8 text-gray-600 text-sm">
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
    </div>
  );
}
