"use client";
import Image from "next/image";
import Link from "next/link";
import { Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import FormHeader from "./FormHeader";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { CategoryProps, SelectOption } from "@/types/types";
import { cn } from "@/lib/utils";
import TextInput from "@/components/global/FormInputs/TextInput";
import TextArea from "@/components/global/FormInputs/textArea";
import { UploadButton } from "@/lib/uploadthing";

export default function CategoryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryProps>();
  const [imageUrl, setImageUrl] = useState("/placeholder.svg");
  const router = useRouter();
  const [status, setStatus] = useState<SelectOption | null>(null); //30:00 VIDEO6 https://www.npmjs.com/package/react-tailwindcss-select
  const options: SelectOption[] = [
    { value: true, label: "Active" },
    { value: false, label: "Disabled" },
    //{ value: "Honeybee", label: "🐝 Honeybee" },
  ];

  // const options: SelectOption[] = [
  //   { value: true, label: "Active" },
  //   { value: false, label: "Disabled" },
  //];
  async function saveCategory(data: CategoryProps) {
    console.log(data);
  }

  const handleChange = (item: SelectOption) => {
    console.log("value:", item);
    setStatus(item);
  };
  console.log(status);

  return (
    <form onSubmit={handleSubmit(saveCategory)} className="">
      <FormHeader title="Category" />
      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="col-span-full lg:col-span-8">
          <Card x-chunk="">
            <CardHeader>
              <CardTitle>Category Title</CardTitle>
              <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <TextInput register={register} errors={errors} label="Title" type="text" name="title" />
                </div>

                <div className="grid gap-3">
                  <TextArea register={register} errors={errors} label="Description" name="description" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-4 col-span-full">
          <div className="grid auto-rows-max items-start gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Select
                      primaryColor="blue"
                      isSearchable
                      isMultiple
                      value={status}
                      onChange={handleChange}
                      options={options}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>Category Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Image
                    alt="Product image"
                    className="h-40 w-full rounded-md object-cover"
                    height="300"
                    src={imageUrl}
                    width="300"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="w-full ml-10 flex items-center justify-center">
                      <UploadButton
                        className="col-span-full"
                        endpoint="categoryImage"
                        onClientUploadComplete={(res) => {
                          // Do something with the response
                          console.log("Files: ", res);
                          setImageUrl(res[0].url);
                        }}
                        onUploadError={(error: Error) => {
                          // Do something with the error.
                          alert(`ERROR! ${error.message}`);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>Archive Product</CardTitle>
                <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
              </CardHeader>
              <CardContent>
                <div></div>
                <Button size="sm" variant="secondary">
                  Archive Product
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 py-4">
        <Button onClick={() => router.back()} variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm">Save Category</Button>
      </div>
    </form>
  );
}
