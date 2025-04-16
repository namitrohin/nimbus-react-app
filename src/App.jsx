import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./component/ErrorPage";
import Home from "./component/Home";
import Mainlayout from "./component/Mainlayout";
import Login from "./page/auth/Login";
import OrdersB2BMain from "./page/Orders/b2b/OrdersB2BMain";
import CreateOrder from "./page/Orders/B2B/CreateOrder";
import OrderB2CMain from "./page/Orders/b2c/OrderB2CMain";
import CreateForwardOrder from "./page/Orders/b2c/CreateForwardOrder";
import CreateReverseOrder from "./page/Orders/b2c/CreateReverseOrder";
import CreateQc from "./page/Orders/b2c/CreateQc";
import BillingMain from "./page/billing/BillingMain";
import PriceCalculator from "./page/billing/PriceCalculator";
import Cod from "./page/billing/Cod";
import OrderDocument from "./page/Orders/orderdocument/OrderDocument";
import CreateForwardDocument from "./page/Orders/orderdocument/CreateForwardDocument";
import ShipmentB2BMain from "./page/shipments/b2b/ShipmentB2BMain";
import ShipmentB2CMain from "./page/shipments/b2c/ShipmentB2CMain";
import ManifestB2B from "./page/shipments/b2b/ManifestB2B";
import ManifestB2C from "./page/shipments/b2c/ManifestB2C";
import SettingsMain from "./page/Settings/SettingsMain";
import CompanyProfile from "./page/Settings/companyProfile/CompanyProfile";
import Warehouse from "./page/Settings/warehouse/Warehouse";
import Employees from "./page/Settings/Employees";
import NimbuspostSOPs from "./page/Support/Nimbuspost SOPs";
import Escalations from "./page/Support/Escalations";
import CreateTicket from "./page/Support/CreateTicket";
import Training from "./page/Support/Training";
import Pincodes from "./page/Serviceable Pincodes/Pincodes";
import Faq from "./page/Support/Faq";
import Exception from "./page/exception/Exception";
// import Weight from "./page/weight reconciliation/WeightReconciliation";
import WeightReconciliation from "./page/weight reconciliation/WeightReconciliation";
import EscalationShipment from "./page/Support/Escalation-Shipment";
import BillingAndRemittance from "./page/Support/Escalation-BillingAndRemittance";
import TechQueries from "./page/Support/Escalation-TechQuery";
import AddWareHouse from "./page/Settings/warehouse/AddWarehouse";
import AccountSettingDetails from "./page/Settings/AccountSettings/AccountSettingDetails";
import Register from './page/auth/Register'



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/dash",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dash",
        element: <Home />,
      },

    ],
  },
  {
    path: "/b2b",
    element: <Mainlayout />,
    children: [
      {
        path: "all",
        element: <OrdersB2BMain />,
      },
      {
        path: "create",
        element: <CreateOrder />,
      },
    ],
  },

  {
    path: "/b2c",
    element: <Mainlayout />,
    children: [
      {
        path: "all",
        element: <OrderB2CMain />,
      },
      {
        path: "create-forward",
        element: <CreateForwardOrder />,
      },
      {
        path: "create-Reverse",
        element: <CreateReverseOrder />,
      },
      {
        path: "create-Qc",
        element: <CreateQc />,
      },
    ],
  },
  {
    path: "/document",
    element: <Mainlayout />,
    children: [
      {
        path: "all",
        element: <OrderDocument />,
      },
      {
        path: "create-forward",
        element: <CreateForwardDocument />,
      },
    ],
  },
  {
    path: "/shipment-b2b",
    element: <Mainlayout />,
    children: [
      {
        path: "all",
        element: <ShipmentB2BMain />,
      },
      {
        path: "manifest-b2b",
        element: <ManifestB2B />,
      },
    ],
  },
  {
    path: "/shipment-b2c",
    element: <Mainlayout />,
    children: [
      {
        path: "all",
        element: <ShipmentB2CMain />,
      },
      {
        path: "manifest-b2c",
        element: <ManifestB2C />,
      },
    ],
  },
  {
    path: "/exception",
    element: <Mainlayout />,
    children: [
      {
        path: "",
        element: <Exception />,
      },
    ],
  },
  {
    path: "/weight-reco",
    element: <Mainlayout />,
    children: [
      {
        path: "",
        element: <WeightReconciliation />,
      },
    ],
  },
  {
    path: "/billing",
    element: <Mainlayout />,
    children: [
      {
        path: "",
        element: <BillingMain />,
      },
    ],
  },
  {
    path: "/billing",
    element: <Mainlayout />,
    children: [
      {
        path: "price-calculator",
        element: <PriceCalculator />,
      },
      {
        path: "cod-remittance",
        element: <Cod />,
      },
    ],
  },
  {
    path: "/Settings",
    element: <Mainlayout />,
    children: [
      {
        path: "",
        element: <SettingsMain />,
      },
      {
        path: "company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "warehouse",
        element: <Warehouse />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "AccountSettingDetails",
        element: <AccountSettingDetails />,
      },
    ],
  },
  {
    path: "warehouse",
    element: <Mainlayout />,
    children: [
      {
        path: "AddWarehouse",
        element: <AddWareHouse />,
      },
    ],
  },
  {
    path: "/support",
    element: <Mainlayout />,
    children: [
      {
        path: "Nimbuspost-SOPs",
        element: <NimbuspostSOPs />,
      },
      {
        path: "escalations",
        element: <Escalations />,
      },
      {
        path: "create-ticket",
        element: <CreateTicket />,
      },
      {
        path: "training",
        element: <Training />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "/Create-ticket",
    element: <Mainlayout />,
    children: [
      {
        path: "EscalationShipment",
        element: <EscalationShipment />,
      },
      {
        path: "BillingAndRemittance",
        element: <BillingAndRemittance />,
      },
      {
        path: "TechQueries",
        element: <TechQueries />,
      },
    ],
  },
  {
    path: "/Serviceable-pincodes",
    element: <Mainlayout />,
    children: [
      {
        path: "",
        element: <Pincodes />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
