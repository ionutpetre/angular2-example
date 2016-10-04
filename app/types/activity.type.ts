import {user} from "./user.type";

export type activity = {
    id: number;
    title: string;
    description: string;
    date: number;
    seen: boolean;
    user: user;
};