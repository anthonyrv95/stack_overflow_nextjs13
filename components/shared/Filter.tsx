"use client";

import React from "react";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterProps {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasess: string;
  containerClasses: string;
}

const Filter = ({ filters, otherClasess, containerClasses }: FilterProps) => {
  return (
    <>
      <div className={`relative ${containerClasses}`}>
        <Select>
          <SelectTrigger
            className={`${otherClasess} body-regular light-border background-light800_dark300 border px-5 py-2.5`}
          >
            <div className="line-clamp-1">
              <SelectValue placeholder="Select a Filter" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {filters.map((filter) => (
                <SelectItem key={filter.value} value={filter.value}>
                  {filter.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Filter;
