"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { loginFormSchema } from "../../../../lib/formSchema";
import { loginAction } from "../../../../serverActions/auth/loginAction";
import { toast } from "sonner";

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    try {
      const res = await loginAction(values);

      // Generating the toaster message
      res.success &&
        toast.success(res.success, {
          // description: 'My description',
          duration: 1500,
        });
      res.error &&
        toast.error(res.error, {
          // description: 'My description',
          duration: 1500,
        });
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email address" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  {...field}
                  type="password"
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="remember"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-start gap-2 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Remember Me</FormLabel>
                {/* <FormDescription>
                  You can manage your mobile notifications in the{" "}
                  <Link href="/examples/forms">mobile settings</Link> page.
                </FormDescription> */}
              </div>
              <Link
                href="#"
                className="text-primary-600  ml-auto w-fit space-y-1 text-sm font-medium leading-none hover:underline"
              >
                Forgot password?
              </Link>
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Sign in
        </Button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <Link
            href="/auth/register"
            className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </Form>
  );
}
