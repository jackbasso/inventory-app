import { getAllCategories } from "@/actions/category";
import CustomDataTable from "@/components/dashboard/Tables/CustomDataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import DataTable from "@/components/DataTableComponents/DataTable";
import { columns } from "./columns";

export default async function page() {
  const categories = (await getAllCategories()) || [];
  return (
    <div>
      <TableHeader title="Categories" linkTitle="Add Category" href="/dashboard/inventory/categories/new" />
      {/* <CustomDataTable categories={categories} /> */}
      <DataTable columns={columns} data={categories} />
    </div>
  );
}
