import { agnetsRouter } from '@/modules/agents/server/procedures';
import { baseProcedure, createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
  agents: agnetsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;