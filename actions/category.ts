"use server";

import prisma from "@/lib/db";
import { CategoryProps } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createCategory(data: CategoryProps) {
  try {
    const newCategory = await prisma.category.create({
      data,
    });
    revalidatePath("/dashboard/inventory/categories");
    return newCategory;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllCategories() {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    console.log(error);
    return null;
  }
}
