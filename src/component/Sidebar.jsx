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
      name: "Order", icon: <FaBoxOpen />, link: "/order", dropdown: true,
      subItems: [
        { name: "B2C", link: "/b2c/all" },
        { name: "B2B", link: "/b2b/all" },
        { name: "Document", link: "/document/all" },
      ],
    },
    {
      name: "Shipment", icon: <FaShippingFast />, link: "/shipment", dropdown: true,
      subItems: [
        { name: "B2C", link: "/shipment-b2c/all" },
        { name: "B2B", link: "/shipment-b2b/all" },
        { name: "Document", link: "" },
      ],
    },
    { name: "Exception (NDR)", icon: <FaExclamationTriangle />, link: "/exception" },
    { name: "Weight Reco.", icon: <FaWeight />, link: "/weight-reco" },
    { name: "Reports", icon: <FaChartBar />, link: "" },
    { name: "Billing", icon: <FaFileInvoiceDollar />, link: "/billing" },
    { name: "Addons", icon: <FaPuzzlePiece />, link: "" },
    { name: "Abandoned", icon: <FaShoppingCart />, link: "" },
    { name: "Settings", icon: <FaCog />, link: "/settings" },
    {
      name: "Support", icon: <FaHeadset />, link: "/support",
      dropdown: true,
      subItems: [
        { name: "Nimbuspost SOPs", link: "/support/Nimbuspost-SOPs" },
        { name: "Escalations", link: "/support/escalations" },
        { name: "Create Ticket", link: "/support/create-ticket" },
        // { name: "Training ", link: "/support/training" },
        // { name: "Faq", link: "/support/faq" },
      ],
    },
    { name: "Serviceable Pincodes", icon: <FaMapMarkedAlt />, link: "/serviceable-pincodes" },
  ];

  return (
    <div className='sidebar text-white p-3' style={{ minHeight: '100vh' }}>
      <div className="logo ">
        <img src={sidebarlogo} alt="nimbus" style={{ height: 50 }} />
      </div>
      <div className="menu_items_list">
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
                                <Link key={subIndex} to={sub.link} className='nav-link text-white ' >
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
    </div>
  );
};

export default Sidebar;
