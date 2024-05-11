"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch } from "@/redux/redux.hooks";
import { createCommentThunk } from "@/redux/thunks/comment.thunk";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

interface CreateCommentProps {
  postId: number;
  authorId: string;
}

const FormSchema = z.object({
  comment: z
    .string()
    .min(5, {
      message: "Comment must be at least 10 characters.",
    })
    .max(160, {
      message: "Comment must not be longer than 160 characters.",
    }),
});

const CreateComment: React.FC<CreateCommentProps> = ({ postId, authorId }) => {
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const input = {
      text: data.comment,
      postId,
      authorId,
    };

    try {
      await dispatch(createCommentThunk(input)).unwrap();
      toast.success("Comment submitted successfully.");
      form.reset();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="my-4 max-w-screen-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="comment"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel htmlFor="comment">Comment</FormLabel>
                <FormControl>
                  <Textarea id="comment" {...field} />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" className="my-3">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateComment;
