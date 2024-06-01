import { Button } from "@/components/ui/button";
import { Loader, Plus } from "lucide-react";
import React from "react";

type SubmitButtonProps = {
  title: string;
  loadingTitle?: string;
  loading: boolean;
};

export default function SubmitButton({ title, loadingTitle = "Saving, Please wait...", loading }: SubmitButtonProps) {
  return (
    <>
      {loading ? (
        <Button disabled type="button">
          <Loader className="w-4 h-4 animate-spin mr-2" />
          {loadingTitle}
        </Button>
      ) : (
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          {title}
        </Button>
      )}
    </>
  );
}
