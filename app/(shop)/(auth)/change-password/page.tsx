import ChangePasswordForm from "@/components/frontend/ChangePasswordForm";
import React from "react";

export default function page() {
  return (
    <section>
      <div className="md:container px-4 md:px-0">
        <div className="grid grid-cols-1 max-w-md mx-auto border border-gray-200 my-3 shadow-2xl rounded-md">
          <ChangePasswordForm />
          <div className="bg-blue-600 h-full text-center hidden lg:block">
            {/* <p>Connect with Every Application</p>
            <p className="text-xs text-gray-300">Everything you need is Customizable on the dashboard</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
