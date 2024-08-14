"use client";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import { Calendar } from "../../../components/ui/calendar";
import { setCookie } from "cookies-next";
import React, { useEffect } from "react";
import { Event } from "../../../types";

interface DatePickerProps {
  event?: Event;
}

export function DatePicker({ event }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(
    event
      ? new Date(
          new Date(event.event_date_time).setDate(
            new Date(event.event_date_time).getDate() + 1
          )
        )
      : undefined
  );

  useEffect(() => {
    if (date) {
      setCookie("event_date", date.toString());
    }
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          required
        />
      </PopoverContent>
    </Popover>
  );
}
