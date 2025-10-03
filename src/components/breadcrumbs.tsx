import { Link, useLocation } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
	const { breadcrumb_routes } = useTSRBreadCrumbs();
	const location = useLocation();
	if (breadcrumb_routes.length < 1) return null;
	return (
		<div className="w-full flex flex-wrap">
			{breadcrumb_routes.map((crumb) => {
				if (
					breadcrumb_routes.length - 1 ===
					breadcrumb_routes?.indexOf(crumb)
				) {
					return (
						<span key={crumb.path} className="text-xs bread-crumbs-links">
							{crumb.name}
						</span>
					);
				}
				return (
					<span
						key={crumb.path}
						className="flex gap-1 justify-center items-center"
					>
						<Link
							className="text-xs bread-crumbs-links"
							state={(prev) => ({ ...prev, from: location.pathname })}
							to={crumb.path}
						>
							{crumb.name}
						</Link>
						<ChevronRight className="size-4" />
					</span>
				);
			})}
		</div>
	);
}

function useTSRBreadCrumbs() {
	const current = useLocation();

	const route_history = current.pathname
		.split("/")
		.filter((x) => x && x.length > 0);

	const breadcrumb_routes = route_history.reduce(
		(acc: { name: string; path: string }[], route) => {
			const prev_path = acc[acc.length - 1]?.path ?? "";
			acc.push({ name: route, path: `${prev_path}/${route}` });
			return acc;
		},
		[],
	);
	return { breadcrumb_routes };
}
