import React , {useState, useEffect} from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Newsidebar() {
  const [open, setOpen] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      if(windowSize.innerWidth >= 900) {
        setOpen(true)
      }else {
        setOpen(open)
      }
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);
  const closeMenu = () => {
    setOpen(!open);
  }
  return (
    <div className='main-container'>
        <div className="top-bar">
        <div className="logo-web logo-mobile">
            <img className='logo-image' src="/logo.png" alt="" />
        </div>
        <div className="menu-icon-mobile hidden">
            <a href="#" onClick={closeMenu}>
              {open?<CloseIcon/>:<MenuIcon/>}
              </a>
        </div>
        </div>
        {open && <div className="options hidden">
            <div className="dashboard sidebar-btn"><a className='click-link' href="#"><span><HomeIcon/></span>Dashboard</a></div>
            <div className="Myteam sidebar-btn"><a className='click-link' href="#"><span><GroupsIcon/></span>My Team</a></div>
            <div className="task sidebar-btn"><a className='click-link' href="#"><span><AssignmentIcon/></span>Task</a></div>
            <div className="calender sidebar-btn"><a className='click-link' href="#"><span><CalendarTodayIcon/></span>Calender</a></div>
            <div className="report sidebar-btn"><a className='click-link' href="#"><span><AssessmentIcon/></span>Report</a></div>
            <div className="settings sidebar-btn"><a className='click-link' href="#"><span><SettingsIcon/></span>Settings</a></div>
        </div>}
    </div>
  )
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}