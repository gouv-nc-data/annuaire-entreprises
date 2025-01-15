import { Form } from "@remix-run/react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

import { CornerDownRight, Send } from "lucide-react";

export default function LoginForm() {
    return (
        <Form method="POST" action="/agent-public" className="w-full py-2">
            <div className="flex items-center gap-2">
                <CornerDownRight className="mb-4 text-blue-dinum" />
            </div>
            <div className="flex flex-col w-full items-center relative gap-4">
                <div className="w-full flex flex-col gap-2">
                    <Label>Votre E-mail</Label>
                    <Input
                        type="email"
                        required
                        name="email"
                        placeholder="Votre adresse E-mail" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Label>Comment aimeriez-vous utiliser le service ?</Label>
                    <Input
                        type="text"
                        name="reason"
                        placeholder="Raison" />
                </div>
                <Button>Me tenir informé <Send className="w-4 h-4" /></Button>
            </div>
        </Form>
    );
}