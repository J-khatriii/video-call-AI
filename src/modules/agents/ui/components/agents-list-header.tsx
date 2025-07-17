"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { NewAgentDialog } from "./new-agent-dialoge";
import { useState } from "react";

export const AgentsListHeader = () => {
    const [isDialogeOpen, setIsDialogeOpen] = useState(false);
    return (
        <>
        <NewAgentDialog open={isDialogeOpen} onOpenChange={setIsDialogeOpen}/>
        <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
                <h5 className="font-medium font-xl">My Agents</h5>
                <Button onClick={() => setIsDialogeOpen(true)}>
                    <PlusIcon />
                    New Agent
                </Button>
            </div>
        </div>
        </>
    )
}