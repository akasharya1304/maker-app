import { Outlet } from "@remix-run/react";
import { requireUserSession } from "data/auth.server";


export default function Index() {
  return <Outlet />;
}

export async function loader({ request }) {
  const userId = await requireUserSession(request);
  return userId;
}
