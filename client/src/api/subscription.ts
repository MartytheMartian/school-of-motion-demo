import { Do, Method, Request } from "./index";

// A subscription.
export class Subscription {
    constructor(public id: number, public firstName: string,
        public lastName: string) {
    }
};

export const listSubscriptions = async (): Promise<Subscription[]> =>
    Do<Subscription[]>(new Request("/subscription", Method.Get));