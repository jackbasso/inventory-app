"use client";
import { Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

export default function VerifyAccountForm() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  const [password, setPassword] = useState("");

  return (
    <div className="w-full py-5 lg:px-8 px-6">
      <div className="">
        <div className="py-4">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">Enter the code</h2>
          <p className="text-xs">We sent a one-time code to your email address to confirm</p>
        </div>

        <div className="">
          <form className="space-y-6">
            <div>
              <div className="mt-2 relative">
                <InputOTP maxLength={6} className="w-full">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verify Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
