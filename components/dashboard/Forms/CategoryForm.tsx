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
import { generateSlug } from "@/lib/generateSlug";
import { createCategory } from "@/actions/category";
import toast from "react-hot-toast";
import SubmitButton from "@/components/global/FormInputs/SubmitButton";
import ImageInput from "@/components/global/FormInputs/ImageInput";
import { Options, SelectValue } from "react-tailwindcss-select/dist/components/type";

export default function CategoryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryProps>();
  const [imageUrl, setImageUrl] = useState("/placeholder.svg");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<any>(null); //1:04 VIDEO7 https://www.npmjs.com/package/react-tailwindcss-select
  const options: Options = [
    { value: "true", label: "Active" },
    { value: "false", label: "Disabled" },
    //{ value: "Honeybee", label: "🐝 Honeybee" },
  ];

  // const options: SelectOption[] = [
  //   { value: true, label: "Active" },
  //   { value: false, label: "Disabled" },
  //];
  async function saveCategory(data: CategoryProps) {
    try {
      setLoading(true);
      console.log(data);
      data.slug = generateSlug(data.title);
      data.status = status && status.value == "true" ? true : false;
      data.imageUrl = imageUrl;
      await createCategory(data);
      setLoading(false);
      //Toast
      toast.success("Successfully toasted!");
      //Reset
      reset();
      //Route
      router.push("/dashboard/inventory/categories");
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (item: SelectValue) => {
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
                <CardTitle>Category Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <Select
                    primaryColor="blue"
                    //isSearchable
                    //isMultiple
                    value={status}
                    onChange={handleChange}
                    options={options}
                    placeholder="Status"
                  />
                </div>
              </CardContent>
            </Card>
            <ImageInput title="Category Image" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="categoryImage" />
            ``
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
        <Button type="button" onClick={() => router.back()} variant="outline">
          Discard
        </Button>
        <SubmitButton title="Save Category" loading={loading} />
      </div>
    </form>
  );
}
