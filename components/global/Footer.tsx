import React from "react";
import { Headset } from "lucide-react";
import Link from "next/link";
import { footer } from "@/config/footer";

export default function Footer() {
  return (
    <footer className="px-10 py-8">
      <div className="container">
        <div className="grid gap-6 grid-cols-12 border-b border-gray-200 py-14">
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
          {/* COL 2 */}
        </div>
        <div className="">
          <p>
            Lorem Ipsum is simply dummy text of the printing. It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
