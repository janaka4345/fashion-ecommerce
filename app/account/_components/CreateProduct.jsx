"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createProductFormSchema } from "../../../utils/accountsFormSchema";

import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { createAProduct } from "../../../serverActions/products/getProducts";

export default function CreateProduct({ categories, session }) {
  // console.log(categories);
  const form = useForm({
    resolver: zodResolver(createProductFormSchema),
    defaultValues: {
      name: "",
      description: "",
      images: "",
      categoryId: "",
    },
  });

  const fileRef = form.register("images");

  async function onSubmit(values) {
    const data = new FormData();

    for (const key in values) {
      const value = values[key];
      if (key != "images") {
        data.append(key, value);
      } else {
        for (const key2 in value) {
          const value2 = value[key2];
          data.append(key2, value2);
        }
      }
    }

    await createAProduct({ data, session });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="name of you product" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Description</FormLabel>
              <FormControl>
                <Input placeholder="Description of your product" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload project images</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  placeholder="images of your product"
                  // onChange={(event) => {
                  //   field.onChange(event.target?.files?.[0] ?? undefined);
                  // }}
                  {...fileRef}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Choose category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.name} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
