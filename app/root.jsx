import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import ErrorPage from "./components/utils/ErrorPage";
// import SnackbarComponent from "./components/utils/SnackbarComponent";
import stylesheet from "~/tailwind.css?url";

const styles = {
  bodyCSS: {
    margin: 0,
    fontFamily: `"Poppins", sans-serif`,
    userSelect: "none",
    scrollBehavior: "smooth",
  },
};

export const meta = () => {
  return [
    { title: "App Generator" },
    { name: "description", content: "Welcome to Remix App Generator!" },
  ];
};

function Document({ title, children }) {
  return (
    <html lang="en">
      <head>
        {title && <title>{title}</title>}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={styles.bodyCSS}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={styles.bodyCSS}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  // console.log(error.data);

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <Document title={error.statusText}>
        {/* <SnackbarComponent
          snackbarOpen={true}
          snackbarMessage={error.data?.message || "Something went wrong"}
          snackbarType={"error"}
        /> */}
        <ErrorPage title={error.statusText}>
          <p>{"here" + error.data?.message || 'wrong'}</p>
        </ErrorPage>
      </Document>
    );
  }

  // 'ErrorBoundary'
  return (
    <Document title="An error!">
      <ErrorPage title="An error!">
        <p>{error.message || "Something went wrong !"}</p>
      </ErrorPage>
    </Document>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: stylesheet },
  ];
}
