import React, { useState } from 'react';
import { sidebarlogo } from '../utils/images';
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import {
  FaBoxOpen, FaShippingFast, FaExclamationTriangle, FaWeight, FaChartBar,
  FaFileInvoiceDollar, FaPuzzlePiece, FaShoppingCart, FaCog, FaHeadset, FaMapMarkedAlt
} from 'react-icons/fa';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const dropdownToggle = (index) => {
    setOpenDropdown(prev => (prev === index ? null : index));
  };

  const MenuBar = [
    { name: "Dashboard", icon: <HiOutlineRectangleGroup />, link: "/dash" },
    {
      name: "Order", icon: <FaBoxOpen />, link: "#", dropdown: true,
      subItems: [
        { name: "B2C", link: "/b2c/all" },
        { name: "B2B", link: "/b2b/all" },
        { name: "Document", link: "" },
      ],
    },
    {
      name: "Shipment", icon: <FaShippingFast />, link: "", dropdown: true,
      subItems: [
        { name: "B2C", link: "" },
        { name: "B2B", link: "" },
        { name: "Document", link: "" },
      ],
    },
    { name: "Exception (NDR)", icon: <FaExclamationTriangle />, link: "" },
    { name: "Weight Reco.", icon: <FaWeight />, link: "/weight" },
    { name: "Reports", icon: <FaChartBar />, link: "/reports" },
    { name: "Billing", icon: <FaFileInvoiceDollar />, link: "" },
    { name: "Addons", icon: <FaPuzzlePiece />, link: "/addons" },
    { name: "Abandoned", icon: <FaShoppingCart />, link: "" },
    { name: "Settings", icon: <FaCog />, link: "/settings" },
    { name: "Support", icon: <FaHeadset />, link: "/support" },
    { name: "Serviceable Pincodes", icon: <FaMapMarkedAlt />, link: "" },
  ];

  return (
    <div className='sidebar bg-dark text-white p-3' style={{ minHeight: '100vh' }}>
      <div className="logo ">
        <img src={sidebarlogo} alt="nimbus" style={{ height: 40, filter: 'brightness(0) invert(1)' }} />
      </div>
      <nav className='nav flex-column'>
        {
          MenuBar.map((item, index) => (
            <div key={index} className='nav-item m-1'>
              {
                item.dropdown ? (
                  <>
                    <div
                      className='nav-link text-white d-flex align-items-center justify-content-between'
                      onClick={() => dropdownToggle(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-center">
                        {item.icon}
                        <span className='ms-2'>{item.name}</span>
                      </div>
                      <span>{openDropdown === index ? "▾" : "▸"}</span>
                    </div>
                    {
                      openDropdown === index && (
                        <div className="ms-4">
                          {
                            item.subItems.map((sub, subIndex) => (
                              <Link key={subIndex} to={sub.link} className='nav-link text-white ' style={{ backgroundColor: "#12263f" }}>
                                {sub.name}
                              </Link>
                            ))
                          }
                        </div>
                      )
                    }
                  </>
                ) : (
                  <Link to={item.link} className='nav-link text-white d-flex align-items-center'>
                    {item.icon}
                    <span className='ms-2'>{item.name} </span>
                  </Link>
                )
              }
            </div>
          ))
        }
      </nav>
    </div>
  );
};

export default Sidebar;
