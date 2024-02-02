"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useMemo, useState } from "react";

export interface TimeSlot {
  label: string;
  value: string;
}

const interval = 15;

export default function MainSection() {
  const timeSlots = useMemo(() => {
    const temp = Array.from({ length: (24 * 60) / interval }, (_, i) => {
      const hours = String(Math.floor((i * interval) / 60)).padStart(2, "0");
      const minutes = String((i * interval) % 60).padStart(2, "0");
      return { label: `${hours}:${minutes}`, value: `${i}` };
    });

    temp.push({ label: "24:00", value: "97" });

    return temp;
  }, []);

  const pauseSlots = useMemo(() => {
    const temp = Array.from({ length: (3 * 60) / interval }, (_, i) => {
      const hours = String(Math.floor((i * interval) / 60)).padStart(2, "0");
      const minutes = String((i * interval) % 60).padStart(2, "0");
      return { label: `${hours}:${minutes}`, value: `${i}` };
    });

    temp.push({ label: "3:00", value: "13" });

    return temp;
  }, []);

  const [endSlots, setEndSlots] = useState<TimeSlot[]>(timeSlots);

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

      <div className="flex flex-col gap-3">
        <Label
          htmlFor="workdate"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Working Day
        </Label>
        <Input
          type="date"
          name="workdate"
          id="workdate"
          autoComplete="workdate"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3 col-span-1">
          <Label
            htmlFor="start"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Start Time
          </Label>
          <Select
            onValueChange={(e) => {
              setEndSlots(
                timeSlots.filter(({ value }) => parseInt(value) > parseInt(e))
              );
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a Start Time" />
            </SelectTrigger>
            <SelectContent className="h-[250px]">
              <SelectGroup>
                {timeSlots.map((slot, index) => (
                  <SelectItem key={index} value={slot.value}>
                    {slot.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-3 col-span-1">
          <Label
            htmlFor="end"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            End Time
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a End Time" />
            </SelectTrigger>
            <SelectContent className="h-[250px]">
              <SelectGroup>
                {endSlots.map((slot, index) => (
                  <SelectItem key={index} value={slot.label}>
                    {slot.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3 col-span-1">
          <Label
            htmlFor="break"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Break
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a Break" />
            </SelectTrigger>
            <SelectContent className="h-[250px]">
              <SelectGroup>
                {pauseSlots.map((slot, index) => (
                  <SelectItem key={index} value={slot.label}>
                    {slot.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1 flex justify-end items-end">
          <Button className="hover:bg-sky-500">Save</Button>
        </div>
      </div>
      <Separator />
    </div>
  );
}
