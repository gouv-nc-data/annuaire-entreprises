import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { Button } from "~/presentation/ui/button";

export default function SearchAdvancesLink() {
    return (
        <Link to="/rechercher" className="group">
            <Button variant={"link"}>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                Effectuez une recherche avancée
            </Button>
        </Link>
    )
}
