import { useNavigation } from "@remix-run/react";
import { cn } from "~/utils/tailwind";

export default function GlobalLoading() {
    const navigation = useNavigation();
    const active = navigation.state !== "idle";

    return (
        <div
            role="progressbar"
            aria-valuetext={active ? "Loading" : undefined}
            aria-hidden={!active}
            className={cn(
                "pointer-events-none fixed left-0 top-0 z-50",
                active ? "opacity-1 loading" : "opacity-0 "
            )}
        >
            <div className="h-[3px] bg-blue-dinum"></div>
        </div>
    );
}

export { GlobalLoading };