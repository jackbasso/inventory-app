import { ShoppingBag } from "lucide-react";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-slate-50">
        <ShoppingBag className="w-6 h-6" />
      </div>
      <h2 className="text-xl font-semibold">Stokify</h2>
    </div>
  );
}
