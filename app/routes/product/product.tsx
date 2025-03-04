import { ReactNode } from "react";
import { Outlet } from "@remix-run/react";

export default function product(): ReactNode {
    return (
        <div>
            <Outlet />
        </div>
    );
}