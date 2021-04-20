/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Unarchive from "@material-ui/icons/Unarchive";
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,

    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users Management",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,

    layout: "/admin",
  },
  {
    path: "/categories",
    name: "Categories Management",
    rtlName: "قائمة الجدول",
    icon: FolderOpenIcon,

    layout: "/admin",
  },
  {
    path: "/documents",
    name: "Documents Management",
    rtlName: "قائمة الجدول",
    icon: "content_paste",

    layout: "/admin",
  },
  {
    path: "/upgrade-to-pro",
    name: "Upload documents",
    rtlName: "التطور للاحترافية",
    icon: CloudUploadIcon,

    layout: "/admin",
  },
  {
    path: "/logout",
    name: "Logout",
    rtlName: "التطور للاحترافية",
    icon:  PowerSettingsNewIcon,

    layout: "/admin",
  },
];

export default dashboardRoutes;
