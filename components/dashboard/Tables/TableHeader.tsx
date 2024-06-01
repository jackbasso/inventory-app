"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { RiFileExcel2Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import { File, ListFilter, PlusCircle, Search } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Select from "react-tailwindcss-select";
import { Options, SelectValue } from "react-tailwindcss-select/dist/components/type";

export default function TableHeader() {
  const [status, setStatus] = useState<SelectValue>(null);
  const [date, setDate] = useState<SelectValue>(null); //51:41 VIDEO7 https://www.npmjs.com/package/react-tailwindcss-select
  const options: Options = [
    { value: "true", label: "Active" },
    { value: "false", label: "Disabled" },
    //{ value: "Honeybee", label: "🐝 Honeybee" },
  ];
  const dateOptions: Options = [
    { value: "lastMonth", label: "Last Month" },
    { value: "thisMonth", label: "This Month" },
    //{ value: "Honeybee", label: "🐝 Honeybee" },
  ];
  const handleStatusChange = (item: SelectValue) => {
    console.log("value:", item);
    setStatus(item);
  };
  const handleDateChange = (item: SelectValue) => {
    console.log("value:", item);
    setDate(item);
  };

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 py-3">
        <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">Categories</h2>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <SiMicrosoftexcel className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
          </Button>
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <RiFileExcel2Line className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Import</span>
          </Button>
          <Button size="sm" asChild className="h-8 gap-1">
            <Link href="/dashboard/inventory/categories/new">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Category</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-2 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="text-slate-300 w-4 h-4" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <Select
            primaryColor="blue"
            //isSearchable
            //isMultiple
            value={date}
            onChange={handleDateChange}
            options={dateOptions}
          />
          <Select
            primaryColor="blue"
            //isSearchable
            //isMultiple
            value={status}
            onChange={handleStatusChange}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}
