import VerifyAccountForm from "@/components/frontend/VerifyAccountForm";
import React from "react";

export default function page() {
  return (
    <section>
      <div className="md:container px-4 md:px-0">
        <div className="grid grid-cols-1 max-w-md mx-auto border border-gray-200 my-3 shadow-2xl rounded-md">
          <VerifyAccountForm />
        </div>
      </div>
    </section>
  );
}
