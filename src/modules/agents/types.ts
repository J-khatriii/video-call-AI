import { inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "@/trpc/routers/_app";

export type AgentManyOne = inferRouterOutputs<AppRouter>["agents"]["getMany"]["items"];
export type AgentGetOne = inferRouterOutputs<AppRouter>["agents"]["getOne"];