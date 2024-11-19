"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FilterBoxState } from "./filter-box"

const status = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "disabled",
    label: "Disabled",
  },
]

interface StatusBoxProps {
  state: FilterBoxState
  setState: (state: FilterBoxState) => void
}

export function StatusBox({ state, setState }: StatusBoxProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {state.status
            ? status.find((status) => status.value === state.status)?.label
            : "Select Status..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {status.map((stt) => (
                <CommandItem
                  key={stt.value}
                  value={stt.value}
                  onSelect={(currentValue) => {
                    setState(currentValue === state.status ? {...state} : {...state, status: currentValue})
                    setOpen(false)
                  }}
                >
                  {stt.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      state.status === stt.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
