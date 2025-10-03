import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { type RouterTabItem, RouterTabs } from "@/components/RouterTabs";

const tabs: RouterTabItem[] = [
	{ label: "Tab A", to: "/auto/tabs/tab-a" },
	{ label: "Tab B", to: "/auto/tabs/tab-b" },
	{ label: "Tab C", to: "/auto/tabs/tab-c" },
];

export const Route = createFileRoute("/auto/tabs")({
	beforeLoad: ({ location }) => {
		const { pathname, state } = location;

		if (pathname === "/auto/tabs") {
			throw redirect({ to: state.from, replace: true });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<RouterTabs tabs={tabs} />
			<div className="rounded-lg border bg-background p-6">
				<Outlet />
			</div>
		</div>
	);
}
