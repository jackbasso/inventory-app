import { LucideIcon } from "lucide-react";
import { BaseOptions } from "vm";

export interface ISidebarLink {
  title: string;
  href?: string;
  icon: LucideIcon;
  dropdown: boolean;
  dropdownMenu?: MenuItem[];
}

type MenuItem = {
  title: "Categories";
  href: "/dashboard/products";
};
