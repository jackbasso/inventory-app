import React from "react";
import { Copyright, Facebook, Headset, Instagram, X, Youtube } from "lucide-react";
import Link from "next/link";
import { footer } from "@/config/footer";

export default function Footer() {
  return (
    <footer className="px-10 py-8">
      <div className="container">
        <div className="grid gap-6 grid-cols-12 border-b border-gray-200 py-10">
          <div className="col-span-full lg:col-span-4">
            {footer.logo}
            <p className="my-3 text-xs line-clamp-3">{footer.summary}</p>
            <div className="space-y-2">
              {footer.contacts.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-1">
                    <Icon className="w-4 h-4" />
                    <p>{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {footer.navigation.map((item, i) => {
            return (
              <div key={i} className="col-span-full lg:col-span-2">
                <h2 className="font-semibold text-base">{item.title}</h2>
                <div className="flex flex-col gap-3 py-2">
                  {item.links.map((link, i) => {
                    return (
                      <Link key={i} className="text-xs" href="#">
                        {link.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {/* Temporal - Agregar items a footer.tsx en config para usar un solo map */}
          {footer.navigation.map((item, i) => {
            return (
              <div key={i} className="col-span-full lg:col-span-2">
                <h2 className="font-semibold text-base">{item.title}</h2>
                <div className="flex flex-col gap-3 py-2">
                  {item.links.map((link, i) => {
                    return (
                      <Link key={i} className="text-xs" href="#">
                        {link.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bootom footer section  */}
        <div className="py-3 flex items-center justify-between flex-wrap text-xs space-y-1">
          <div className="flex items-center space-x-2">
            <Copyright className="w-4 h-4" />
            <span>{new Date().getFullYear()}</span>
            <span>Stokify - </span>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex items-center space-x-2 space-y-1 flex-wrap">
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#">
              <X className="w-4 h-4" />
            </Link>
            <Link href="#">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="#">
              <Youtube className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
