"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
import { createShop } from "../../../serverActions/shop/addShop";
import { startSellingFormSchema } from "../../../utils/accountsFormSchema";

export default function StartSellingForm({ userId }) {
  const form = useForm({
    resolver: zodResolver(startSellingFormSchema),
    defaultValues: {
      shopName: "",
      description: "",
      logo: "",
    },
  });

  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const response = await createShop({ payload: values, userId });

    response.success &&
      toast.success(response.success, {
        // description: 'My description',
        duration: 1500,
      });
    response.error &&
      toast.error(response.error, {
        // description: 'My description',
        duration: 1500,
      });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 w-[65dvw] space-y-8"
      >
        <FormField
          control={form.control}
          name="shopName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shop Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter a name for your shop" {...field} />
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Describe your shop" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shop's Logo</FormLabel>
              <FormControl>
                {/* TODO add logo function */}
                <Input placeholder="upload logo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create Store</Button>
      </form>
    </Form>
  );
}
