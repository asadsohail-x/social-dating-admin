import { Route, Routes } from "react-router-dom";

import { Suspense, lazy } from "react";

import { MdSpaceDashboard, MdSettings } from "react-icons/md";
import { BsPeopleFill, BsFillCreditCard2BackFill } from "react-icons/bs";

import Loader from "../Loader";

const Dashboard = lazy(() => import("../views/dashboard/Dashboard"));
const Users = lazy(() => import("../views/users/Users"));
const Genders = lazy(() => import("../views/genders/Genders"));
const Professions = lazy(() => import("../views/professions/Professions"));
const Subscriptions = lazy(() =>
  import("../views/subscriptions/Subscriptions")
);
const PrivacyPolicy = lazy(() =>
  import("../views/privacyPolicy/PrivacyPolicy")
);
const TnC = lazy(() => import("../views/tnc/TnC"));
const FilterPrefs = lazy(() => import("../views/filterPrefs/FilterPrefs"));
const UpdateCreds = lazy(() => import("../views/updateCreds/UpdateCreds"));

export const adminRoutes = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdSpaceDashboard size={21} />,
  },
  {
    title: "Users",
    icon: <BsPeopleFill size={21} />,
    children: [
      {
        title: "Users",
        path: "/users",
      },
      {
        title: "Genders",
        path: "/genders",
      },
      {
        title: "Professions",
        path: "/professions",
      },
    ],
  },
  {
    title: "Subscriptions",
    path: "/subscriptions",
    icon: <BsFillCreditCard2BackFill size={21} />,
  },
  {
    title: "Settings",
    icon: <MdSettings size={21} />,
    children: [
      {
        title: "Filter Preferences",
        path: "/filter-prefs",
      },
      {
        title: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        title: "Terms & Conditions",
        path: "/terms-n-conditions",
      },
      {
        title: "Update Credentials",
        path: "/update-credentails",
      },
    ],
  },
];

export const AdminRouter = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/genders" element={<Genders />} />
      <Route path="/professions" element={<Professions />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/filter-prefs" element={<FilterPrefs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-n-conditions" element={<TnC />} />
      <Route path="/update-credentails" element={<UpdateCreds />} />
    </Routes>
  </Suspense>
);
