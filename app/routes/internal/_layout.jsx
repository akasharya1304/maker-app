import { Outlet, json } from "@remix-run/react";
import { getUserFromSession, requireUserSession } from "data/auth.server";
import InternalPageLayout from "~/Layout/InternalPageLayout";
import { LoadCookiesData, StoreCookiesData } from "~/components/utils/CookiesStateData";

export const meta = () => {
  return [
    { title: "App Generator" },
    { name: "description", content: "Welcome to Remix App Generator!" },
  ];
};

export default function Index() {
  return (
    <InternalPageLayout>
      <Outlet />
    </InternalPageLayout>
  );
}

export async function loader({request}) {
  const userId = await requireUserSession(request)
  const cookieData = await LoadCookiesData(request, 'UITheme')
  const userID = getUserFromSession(request)
  return json({cookieData, userID} )
  // return getUserFromSession(request)
}
export async function action({ request }) {
  return StoreCookiesData(request, 'UITheme')
}
