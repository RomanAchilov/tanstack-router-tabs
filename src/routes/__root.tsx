import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<Breadcrumbs />
			<Outlet />
		</>
	),
});
