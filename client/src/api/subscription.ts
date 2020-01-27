import { Do, Method, Request } from "./index";

// A subscription.
export class Subscription {
    constructor(public id: number, public firstName: string,
        public lastName: string, public course: number) {
    }
};

export const list = async (): Promise<Subscription[]> =>
    Do<Subscription[]>(new Request("/subscription", Method.Get));

export const post = async (subscription: Subscription): Promise<Subscription> =>
    Do<Subscription>(new Request("/subscription", Method.Post, subscription));