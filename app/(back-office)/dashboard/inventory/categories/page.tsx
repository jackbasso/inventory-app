import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function categories() {
  return (
    <div>
      <Button asChild>
        <Link href="/dashboard/inventory/categories/new">New Category</Link>
      </Button>
      categories
    </div>
  );
}
