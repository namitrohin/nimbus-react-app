import Header from './Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaBars, FaArrowRightLong } from 'react-icons/fa6';
export default function Mainlayout() {
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const toggleMenu = () => {
    setSideBarVisible((prev) => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setSideBarVisible(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="mainpage">
      <aside
        className={`sidebar_main border-end ${sideBarVisible ? 'hide' : ''}`}
      >
        <Sidebar />
        <Button
          size="sm"
          onClick={toggleMenu}
          variant="none"
          className="toggle_btn"
        >
          {sideBarVisible ? <FaArrowRightLong /> : <FaBars />}
        </Button>
      </aside>
      <main className={`main_wrapper ${sideBarVisible ? 'hide' : ''}`}>
        <Header fromLeft={sideBarVisible} />
        <div className="innerWrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
