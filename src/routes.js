/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import About from "views/About.jsx";


const dashboardRoutes = [
  {path:"/about",
  name:"About",
  icon:"pe-7s-info",
  component:About,
  layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Organization List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "County Map",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {path: "/forgotpassword",
   component: TableList
  }
];

export default dashboardRoutes;
