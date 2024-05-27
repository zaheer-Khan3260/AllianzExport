import React, { useState } from 'react';
import dashboard from "../Image/dashboard.png"
import logo from "../Image/logo.png"
import historicalTrading from "../Image/analytics.png"
import Scanner from "../Image/scan.png"
import alerts from "../Image/alert.png"
import basicBackets from "../Image/shopping-basket.png"
import advanceBackets from "../Image/cart.png"
import pricing from "../Image/price.png"
import myearning from "../Image/earnings.png"

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { 
      id:1,
      name: "LeaderBoard",
      image: dashboard
    },
    {
      id:2,
      name: "Historical Trading",
      image:  historicalTrading
    },
    {
      id:3,
      name: "Scanners",
      image:  Scanner
    },
    {
      id:4,
      name: "Alerts",
      image:  alerts
    },
    {
      id:5,
      name: "Basic Backets",
      image:  basicBackets
    },
    {
      id:6,
      name: "Advance Backets",
      image:  advanceBackets
    },
    {
      id:7,
      name: "Pricing",
      image:  pricing
    },  
      {
        id:8,
      name: "My Earning",
      image:  myearning
    },
  ]

  return (
    <div className={`fixed top-0 left-0 h-screen bg-[#202020] text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex items-center justify-between p-4">
          <h3 className={`text-xl font-semibold transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <img src={logo} alt="" className='w-32 h-10' />
          </h3>
        <button className="focus:outline-none" onClick={toggleSidebar}>
          <svg
            className={`w-6 h-6 transition-all duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      <nav className={`mt-6`}>
        <ul>
          {
            navItems.map((data) => (
          <li className="mb-2" key={data.id} >
            <a href="#" className="flex items-center px-4 py-2 hover:bg-blue-600 rounded-md">
             <img src={data.image} alt="" className={` filter invert mr-3 ${isOpen ? 'w-7 h-7' : 'w-7 h-7'}`} />
              <span className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-300`}>{data.name}</span>
            </a>
          </li>
            ))
          }
         
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;