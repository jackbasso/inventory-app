//8 18:30 https://desishub-docs.vercel.app/programming-tutorials/nextjs/datatable
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

type ActionColumnProps = {
  row: any;
  title: string;
  editEndpoint: string;
  id: string | undefined;
};
export default function ActionColumn({ row, title, editEndpoint, id }: ActionColumnProps) {
  const isActive = row.isActive;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete here</DropdownMenuItem>
        <DropdownMenuItem>Edit here</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
