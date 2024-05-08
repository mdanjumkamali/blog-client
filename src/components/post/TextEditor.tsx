"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch, useAppSelector } from "@/redux/redux.hooks";
import { createPostThunk } from "@/redux/thunks/post.thunk";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TypeOf, z } from "zod";

const textEditorSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters.",
  }),
});

type TextEditorFormValues = TypeOf<typeof textEditorSchema>;

const TextEditor = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const authorId = useAppSelector((state) => state.user.authorId);
  const form = useForm({
    resolver: zodResolver(textEditorSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit: SubmitHandler<TextEditorFormValues> = (data) => {
    const postWithUserId = {
      ...data,
      authorId,
    };

    dispatch(createPostThunk(postWithUserId))
      .then(() => {
        toast.success("Post created successfully!");
        router.push("/");
      })
      .catch((error) => {
        toast.error(`Failed to create post: ${error}`);
      });
  };
  return (
    <div className="px-10 lg:max-w-screen-md mx-auto my-10 overflow-hidden">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the title" {...field} />
                </FormControl>
                <FormDescription>
                  This is the title of your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your content here" {...field} />
                </FormControl>
                <FormDescription>
                  This is the main content of your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default TextEditor;
