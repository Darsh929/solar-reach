"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const zString = z.string().trim().min(1).max(10000);

const emailSchema = z.object({
  email: zString.email(),
});

const fieldIds = {
  email: "1825697131",
};

export function EmailForm() {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof emailSchema>) {
    const baseUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSck7xgzEnACKgVz1LkIPcRAqTafc01DUwpEhAqeoIVRW1TF1A/formResponse?";
    const params = new URLSearchParams();

    Object.entries(values).forEach(([key, value]) => {
      const id = fieldIds[key as keyof typeof fieldIds];
      if (id) {
        if (Array.isArray(value)) {
          value.forEach((val) => params.append("entry." + id, val));
        } else {
          params.append("entry." + id, value);
        }
      }
    });

    axios.post(`${baseUrl}${params.toString()}`);
    form.reset();
    window.location.href = window.location.pathname + "?success=1";
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-6 sm:flex sm:max-w-md lg:mt-0"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl className="bg-white/5">
                  <Input
                    placeholder="Enter your email"
                    className="w-full min-w-0 rounded-md bg-white/5 px-3 py-1.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 sm:w-56 sm:text-sm/6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
            <Button
              type="submit"
              className="w-full items-center justify-center rounded-md bg-(--yellow-5) px-3 py-2 text-sm font-semibold text-(--background) shadow-xs hover:bg-(--yellow-4) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--yellow-5)"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
