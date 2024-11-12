import { Form } from "@remix-run/react";

export default function LoginForm() {
    return (
        <Form method="post">
            <input type="email" name="email" required />
            <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
            />
            <button>Sign In</button>
        </Form>
    );
}