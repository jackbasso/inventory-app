import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { CircleUserRound, LayoutGrid, ShoppingBasket } from "lucide-react";
import Image from "next/image";

export default function ShopHeader() {
  return (
    <header className="py-3 px-8 border-b border-gray-200">
      <div className="container">
        <nav className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="mr-4">
              <Logo />
            </div>
            <button className="flex items-center gap-2 bg-slate-900 py-2 px-3 rounded-md text-slate-50">
              <LayoutGrid className="w-4 h-4" />
              <span className="text-xs">Catalog</span>
            </button>
          </div>
          <div className="flex-1">
            <input
              type="search"
              placeholder="Search for products.."
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex items-center gap-2">
            <button>
              <ShoppingBasket className="w-5 h-5" />
            </button>
            <button>
              <CircleUserRound className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
