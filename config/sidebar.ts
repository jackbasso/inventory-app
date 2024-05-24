import { ISidebarLink } from "@/types/types";
import {
  BaggageClaim,
  BarChart4,
  Bell,
  Cable,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  FolderTree,
  Home,
  LineChart,
  Package,
  Package2,
  Power,
  Settings,
  Store,
  Users,
} from "lucide-react";

export const sidebarLinks: ISidebarLink[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
    dropdown: false,
  },
  {
    title: "Inventory",
    icon: BaggageClaim,
    dropdown: true,
    dropdownMenu: [
      {
        title: "Categories",
        href: "/dashboard/inventory/categories",
      },
      {
        title: "Brands",
        href: "/dashboard/inventory/brands",
      },
      {
        title: "Units",
        href: "/dashboard/products",
      },
      {
        title: "Products",
        href: "/dashboard/inventory/products",
      },
      {
        title: "Warehouse",
        href: "/dashboard/products",
      },
      {
        title: "Suppliers",
        href: "/dashboard/products",
      },
    ],
  },
  {
    title: "Sales",
    icon: CircleDollarSign,
    dropdown: true,
    dropdownMenu: [
      {
        title: "Sales",
        href: "/dashboard/sales",
      },
      {
        title: "Payments",
        href: "/dashboard/sales/payments",
      },
      {
        title: "Quotations",
        href: "/dashboard/sales/quotations",
      },
      {
        title: "Customers",
        href: "/dashboard/sales/customers",
      },
    ],
  },
  {
    title: "Users",
    icon: Users,
    dropdown: true,
    dropdownMenu: [
      {
        title: "Users",
        href: "/dashboard/users",
      },
      {
        title: "Roles",
        href: "/dashboard/users/roles",
      },
    ],
  },
  {
    title: "POS",
    href: "/dashboard/pos",
    icon: Store,
    dropdown: false,
  },
  {
    title: "Stock",
    icon: FolderTree,
    dropdown: true,
    dropdownMenu: [
      {
        title: "Stock Transfer",
        href: "/dashboard/stock/transfer",
      },
      {
        title: "Stock Adjustment",
        href: "/dashboard/stock/adjustment",
      },
    ],
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    dropdown: false,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    dropdown: false,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart4,
    dropdown: false,
  },
];
