import { getAllCategories } from "@/actions/category";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default async function categories() {
  const categories = await getAllCategories();
  return (
    <div>
      <TableHeader />
      {categories &&
        categories.length > 0 &&
        categories.map((item) => {
          return <h2 key={item.title}>{item.title}</h2>;
        })}
    </div>
  );
}
