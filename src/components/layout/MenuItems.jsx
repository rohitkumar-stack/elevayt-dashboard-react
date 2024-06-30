import { MdOutlineDashboard, MdCalculate ,MdOutlineAssessment  } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";


  const menuItems = [
    {
      key: '1',
      icon: <MdOutlineDashboard />,
      label: 'Dashboard',
      link: '/'
    },
    {
      key: '2',
      icon: <FaUserFriends  />,
      label: 'Candidates',
      link: '/candidate'
    },
    {
      key: '3',
      icon: <PiBagFill />,
      label: 'Jobs',
      link: '/jobs'
    },
    {
      key: '4',
      icon: <MdCalculate />,
      label: 'Hiring Calculator',
      link: '/hiring-calculator'
    },
    {
      key: '5',
      icon: <MdOutlineAssessment />,
      label: 'Assessment',
      link: '/assessment'
    },
    {
      key: '6',
      icon: <IoIosSettings />,
      label: 'Administration',
      link: '/administration'
    },
  ];

  export default menuItems;