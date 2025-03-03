import { ReactNode } from "react";
import { Outlet } from "@remix-run/react";

export default function blog(): ReactNode {
    return (
        <div>
            <Outlet />
        </div>
    );
}