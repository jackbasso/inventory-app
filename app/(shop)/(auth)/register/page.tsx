import RegisterForm from "@/components/frontend/RegisterForm";
import React from "react";

export default function page() {
  return (
    <section>
      <div className="md:container px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto border border-gray-200 my-3 shadow-2xl rounded-md">
          <RegisterForm />
          <div className="bg-blue-600 h-full text-center hidden lg:block">
            {/* <p>Connect with Every Application</p>
            <p className="text-xs text-gray-300">Everything you need is Customizable on the dashboard</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
