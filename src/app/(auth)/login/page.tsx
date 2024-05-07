"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/redux.hooks";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginThunk } from "@/redux/thunks/auth.thunk";
import { useRouter } from "next/navigation";

// Define a TypeScript interface to describe the form data structure
interface LoginFormData {
  email: string;
  password: string;
}

const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address.")
    .nonempty("Email is required."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .nonempty("Password is required."),
});

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await dispatch(loginThunk(data)).unwrap();
      router.push("/");
      toast.success("Login Successfully!");
    } catch (error: any) {}
  };

  return (
    <div className="px-20 lg:max-w-screen-md mx-auto my-10 overflow-hidden">
      <h1 className="text-2xl font-semibold my-8">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@example.com"
                    {...field}
                  />
                </FormControl>
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
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
