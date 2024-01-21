// Client Component
"use client";
import { useRouter } from "@/node_modules/next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import * as z from "zod";

// Compnents
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  input: z.string().min(2).max(50),
});

const SearchInput = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/search/${values.input}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="input"
          render={({ field }: any) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchInput;
