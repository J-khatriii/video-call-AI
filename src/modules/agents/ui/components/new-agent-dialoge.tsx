import { ResponsiveDialoge } from "@/components/responsive-dialog";

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
            New agent form
        </ResponsiveDialoge>
    )
}