
import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { FormStrategy } from "remix-auth-form";

import { IUser, fakeAgentUser } from "~/domain/entity/user";

export let authenticator = new Authenticator<IUser>(sessionStorage);

authenticator.use(
    new FormStrategy(async ({ form }) => {
        let email = form.get("email") as string;
        let password = form.get("password") as string;
        let user = fakeLogin(email, password);
        return user;
    }),
    "user-pass"
);

const fakeLogin = (email: string, password: string) => {

    if (email !== fakeAgentUser.email) {
        throw Error('invalid email')
    }

    if (password !== process.env.FAKE_AGENT_PASSWORD) {
        throw Error('invalid password')
    }

    return fakeAgentUser
}