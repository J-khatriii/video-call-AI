import { ResponsiveDialoge } from "@/components/responsive-dialog";
import { AgentForm } from "./agents-form";
import { AgentGetOne } from "../../types";

interface UpdateAgentDialogeProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialValues: AgentGetOne;
}

export const UpdateAgentDialog = ({
    open,
    onOpenChange,
    initialValues
}: UpdateAgentDialogeProps) => {
    return (
        <ResponsiveDialoge
        title="Edit Agent"
        description="Edit the agent details"
        open={open}
        onOpenChange={onOpenChange}
        >
            <AgentForm 
            onSuccess={() => onOpenChange(false)}
            onCancel={() => onOpenChange(false)}
            initialValues={initialValues}
            />
        </ResponsiveDialoge>
    )
}