"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type FormHeaderProps = {
  title: string;
};
export default function FormHeader({ title }: FormHeaderProps) {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <div className="flex items-center justify-between">
      <Button onClick={goBack} variant="outline" size="icon" className="h-7 w-7">
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Back</span>
      </Button>
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        Create {title}
      </h1>
      <Badge variant="outline" className="ml-auto sm:ml-0">
        In stock
      </Badge>
      <div className="hidden items-center gap-2 md:ml-auto md:flex">
        <Button onClick={goBack} variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm">Save {title}</Button>
      </div>
    </div>
  );
}
