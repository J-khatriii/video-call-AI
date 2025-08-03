import { ResponsiveDialoge } from "@/components/responsive-dialog";
import { AgentForm } from "./agents-form";

interface NewAgentDialogeProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const NewAgentDialog = ({
    open,
    onOpenChange,
}: NewAgentDialogeProps) => {
    return (
        <ResponsiveDialoge
        title="New Agent"
        description="Create a new agent"
        open={open}
        onOpenChange={onOpenChange}
        >
            <AgentForm 
            onSuccess={() => onOpenChange(false)}
            onCancel={() => onOpenChange(false)}
            />
        </ResponsiveDialoge>
    )
}