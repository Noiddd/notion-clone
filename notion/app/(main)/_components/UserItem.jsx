"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronsLeftRight } from "lucide-react";

import React from "react";

export default function UserItem() {
  const user = "Dion";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full hover:bg-primary/5"
        >
          <div className="gap-x-2 flex items-center max-w-[200px]">
            <Avatar className="h-5 w-5">
              <AvatarImage src="/vercel.svg" />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              Dion Ang's Notion
            </span>
            <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            dionang11@gmail.com
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/vercel.svg" />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1">Dion Ang's Notion</p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="w-full cursor-pointer text-muted-foreground"
        >
          <Button variant="ghost">Log Out</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
