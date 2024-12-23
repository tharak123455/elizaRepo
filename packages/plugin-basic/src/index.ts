import { Plugin } from "@ai16z/eliza";
import { helloWorldAction } from "./actions/helloWorldAction.ts";
import {seleniumProfilesAction} from "./actions/seleniumProfilesAction.ts"
import {seleniumflexibleAction} from "./actions/seleniumflexibleAction.ts"
export * as actions from "./actions";
export * as evaluators from "./evaluators";
export * as providers from "./providers";

export const seleniumPlugin: Plugin = {
    name: "seleniumPlugin",
    description: "Agent bootstrap with basic actions and evaluators",
    actions: [
      helloWorldAction,
      seleniumflexibleAction,
      seleniumProfilesAction
    ],
    evaluators: [],
    providers: [],
};
