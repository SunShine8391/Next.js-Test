"use client";

import { Fragment, useState } from "react";
import { Person } from "@/types";
import { people } from "@/config";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AutoComplete } from "@/components/ui/auto-complete";
import TaskTable from "./task-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SecondSection() {
  const interval = 15;
  const timeSlots = Array.from({ length: (12 * 60) / interval }, (_, i) => {
    const hours = String(Math.floor((i * interval) / 60)).padStart(2, "0");
    const minutes = String((i * interval) % 60).padStart(2, "0");
    return { label: `${hours}:${minutes}`, value: `${i}` };
  });
  timeSlots.push({ label: "12:00", value: "48" });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Working Hours
        </h2>
        <p className="text-sm leading-6 text-gray-600">
          Please record the entire working time for a day here.
        </p>
      </div>

      <div className="grid sm:grid-cols-4 gap-4 grid-cols-1">
        <div className="flex flex-col gap-3 col-span-1 sm:col-span-3">
          <Label
            htmlFor="task"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Task
          </Label>
          <AutoComplete
            id="task"
            options={people.map(({ id, name }) => ({
              label: name,
              value: `${id}`,
            }))}
            emptyMessage="No Task"
            placeholder="Select a Task"
          />
        </div>
        <div className="flex flex-col gap-3 col-span-1">
          <Label
            htmlFor="length"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Duration
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a Duration" />
            </SelectTrigger>
            <SelectContent className="h-[250px]">
              <SelectGroup>
                {timeSlots.map((slot, index) => (
                  <SelectItem key={index} value={slot.label}>
                    {slot.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col gap-3 col-span-3">
          <Textarea rows={4} placeholder="Write your thoughts here..." />
        </div>
        <div className="flex flex-col gap-3 col-span-1 justify-end items-end">
          <Button className="hover:bg-sky-500">Save</Button>
        </div>
      </div>

      <TaskTable />
    </div>
  );
}
