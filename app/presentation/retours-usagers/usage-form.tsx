import { Form } from "@remix-run/react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

import { Send } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";

export default function UsageForm() {
    return (
        <Form method="POST" action="/retours-usagers" className="w-full py-2">
            <div className="flex flex-col w-full items-center relative gap-4">
                <div className="w-full flex flex-col gap-2">
                    <RadioGroup defaultValue="option-one" name="type">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="feature" id="option-feature" />
                            <Label htmlFor="option-feature">
                                Demande de fonctionnalités
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bug" id="option-bug" />
                            <Label htmlFor="option-bug">Bug</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="option-other" />
                            <Label htmlFor="option-other">Autre retours</Label>
                        </div>
                    </RadioGroup>
                </div>
                <Textarea placeholder="Décrivez votre retour" name="reason" />
                <p className="text-muted-foreground text-sm font-light">
                    Les données de ce formulaire sont anonymes et sont traitées par la DINUM pour permettre d&apos;améliorer le service annuaire-entreprise.gouv.nc.
                </p>
                <Button>Envoyer <Send className="w-4 h-4" /></Button>
            </div>
        </Form>
    );
}