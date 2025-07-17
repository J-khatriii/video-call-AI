import z from "zod";
import { db } from "@/db";
import { agents } from "@/db/schema";
import { createTRPCRouter, baseProcedure, protectedProcedure } from "@/trpc/init";
import { agentsInsertSchema } from "../schemas";
import { eq } from "drizzle-orm";

export const agnetsRouter = createTRPCRouter({
    getOne: baseProcedure.input(z.object({id: z.string()})).query(async ({ input }) => {
        const [exitingAgent] = await db
            .select()
            .from(agents)
            .where(eq(agents.id, input.id))

    return exitingAgent;
    }),

    getMany: baseProcedure.query(async () => {
        const data = await db
            .select()
            .from(agents);

    //await new Promise((resolve) => setTimeout(resolve, 5000));
    //  throw new TRPCError({code: "BAD_REQUEST"});
    return data;
    }),

    create: protectedProcedure
        .input(agentsInsertSchema)
        .mutation(async ({input, ctx}) => {
            const [createdAgent] = await db
            .insert(agents)
            .values({
                ...input,
                userId: ctx.auth.user.id,
            })
            .returning();
        return createdAgent
        }),
})