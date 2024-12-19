import { Form } from "@remix-run/react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Send } from "lucide-react";

export default function LoginForm() {
    return (
        <Form method="POST" action="/agent-public" className="w-full py-2">
            <div className="flex w-full items-center relative gap-4">
                <Input
                    type="email"
                    required
                    name="email"
                    placeholder="Votre adresse E-mail" />
                <Button>Me tenir informer <Send className="w-4 h-4" /></Button>
            </div>
        </Form>
    );
}