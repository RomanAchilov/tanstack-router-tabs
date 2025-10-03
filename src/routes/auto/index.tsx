import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/auto/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Link to="/auto/tabs/tab-a">go tabs</Link>
		</div>
	);
}
