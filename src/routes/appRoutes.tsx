import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPages from "../pages/dashboard/AnalyticsPages";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DefaultPages from "../pages/dashboard/DefaultPages";
import SaasPages from "../pages/dashboard/SaasPages";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index",
      },
      {
        path: "/dashboard/default",
        element: <DefaultPages />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default",
        },
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPages />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Analytics",
        },
      },
      {
        path: "/dashboard/saas",
        element: <SaasPages />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Saas",
        },
      },
    ],
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "ChangeLog",
      icon: <FormatListBulletedOutlinedIcon/>
    },
  },
];

export default appRoutes;
