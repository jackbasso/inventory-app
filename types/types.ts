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

export type CategoryProps = {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  status: boolean;
};

export type SelectOption = {
  label: string;
  value: number | string | boolean;
};
