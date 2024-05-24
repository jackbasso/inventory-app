import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, PlusCircle, Upload } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import FormHeader from "./FormHeader";

export default function CategoryForm() {
  return (
    <div>
      <FormHeader />
      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="col-span-8">
          <Card x-chunk="">
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" className="w-full" defaultValue="Gamer Gear Pro Controller" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                    className="min-h-32"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-4">
          <div className="grid auto-rows-max items-start gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="status">Status</Label>
                    <Select>
                      <SelectTrigger id="status" aria-label="Select status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Active</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Image
                    alt="Product image"
                    className="h-20 w-full rounded-md object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Upload</span>
                    </button>
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
    </div>
  );
}
