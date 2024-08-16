import React from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from 'axios';

// Updated Zod schema based on the backend fields
const formSchema = z.object({
  name: z.string().min(2).max(50),
  unit: z.string().min(1),
  item: z.string().min(1),
  poweronpassword: z.string().min(6),
  user_name: z.string().min(1),
  defect: z.string().optional(),
  status: z.string().min(1),
  phoneNumber: z.string().min(10),
  deadline: z.string().nonempty().transform(val => new Date(val)),
  currentStatus: z.string().min(1),
  takenForRepairDateTime: z.string().optional().transform(val => val ? new Date(val) : new Date()),
  delivery_status: z.string().optional(),
  dummyField2: z.string().optional()
});

export default function Form1() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      unit: "",
      item: "",
      poweronpassword: "",
      user_name: "",
      defect: "",
      status: "",
      phoneNumber: "",
      deadline: "",
      currentStatus: "",
      takenForRepairDateTime: "",
      delivery_status: "",
      dummyField2: ""
    },
  });

  const post = 'http://localhost:3000';

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await axios.post(`${post}/save_complaint`, values);
      console.log(res);
    } catch (error) {
      console.log(values)
      console.error('Error submitting form:', error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-10 mx-auto bg-white p-8 rounded-lg shadow-lg w-full max-w-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Complaint Form</h2>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Name</FormLabel>
              <FormControl>
                <Input
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="John Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Unit</FormLabel>
              <FormControl>
                <Input
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Unit"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="item"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Item</FormLabel>
              <FormControl>
                <Input
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Item"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="poweronpassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Power On Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">User Name</FormLabel>
              <FormControl>
                <Input
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="User Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="defect"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Defect</FormLabel>
              <FormControl>
                <Input
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Defect description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Status</FormLabel>
              <FormControl>
                <Input
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Status"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Phone Number</FormLabel>
              <FormControl>
                <Input
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="(123) 456-7890"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Deadline</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="currentStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Current Status</FormLabel>
              <FormControl>
                <Input
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Current Status"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="takenForRepairDateTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Taken For Repair Date and Time</FormLabel>
              <FormControl>
                <Input
                  type="datetime-local"
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />





<FormField
          control={form.control}
          name="delivery_status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Delivery Status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="with_us">With Us</SelectItem>
                  <SelectItem value="give_back">Gave Back</SelectItem>
                </SelectContent>
              </Select>
              
              <FormMessage />
            </FormItem>
          )}
        />




        <FormField
          control={form.control}
          name="dummyField2"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">delivery_status 2</FormLabel>
              <FormControl>
                <Input
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Dummy Field 2"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
