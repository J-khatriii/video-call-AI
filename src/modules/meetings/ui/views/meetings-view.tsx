"use client";

import { DataTable } from "@/components/data-table";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query";

export const MeetingsView = () => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <div className="overflow-x-scroll">
      {/* <DataTable data={data.items}/> */}
    </div>
  )
}

export const MeetingsViewLaoding = () => {
    return (
        <LoadingState
         title="Loading Meetings" 
         description="This may take a few seconds"
        />
    )
}

export const MeetingsViewError = () => {
    return (
        <ErrorState
         title="Failed to load meetings"
        description="something went wrong"
        />
    )
}

//8.31.22  