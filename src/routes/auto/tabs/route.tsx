import { createFileRoute, Outlet, redirect, Link, useLocation } from "@tanstack/react-router";
import { z } from "zod";

import { type RouterTabItem, RouterTabs } from "@/components/RouterTabs";
import { Button } from "@/components/ui/button";

const tabs: RouterTabItem[] = [
	{ label: "Tab A", to: "/auto/tabs/tab-a" },
	{ label: "Tab B", to: "/auto/tabs/tab-b" },
	{ label: "Tab C", to: "/auto/tabs/tab-c" },
];

const searchSchema = z.object({
	editing: z.boolean().optional().default(false),
});

export const Route = createFileRoute("/auto/tabs")({
	validateSearch: searchSchema,
	beforeLoad: ({ location }) => {
		const { pathname } = location;

		if (pathname === "/auto/tabs") {
			throw redirect({ to: "/auto/tabs/tab-a", replace: true });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { editing } = Route.useSearch();
	const location = useLocation();

	return (
		<div>
			<div className="mb-4 flex justify-between items-center">
				<RouterTabs tabs={tabs} />
				<Link
					to={location.pathname}
					search={{ editing: !editing }}
					replace
				>
					<Button>
						{editing ? "Сохранить" : "Редактировать"}
					</Button>
				</Link>
			</div>
			<div className="rounded-lg border bg-background p-6">
				<Outlet />
			</div>
		</div>
	);
}
