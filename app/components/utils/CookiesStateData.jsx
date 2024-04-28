import { createCookie } from "@remix-run/node";
import { json } from "@remix-run/node";

const prefs = createCookie("prefs");

// read the state from the cookie
async function LoadCookiesData (request, key) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await prefs.parse(cookieHeader)) || {};
  return { [key]: cookie[key] };
}

// write the state to the cookie
async function StoreCookiesData (request, key) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await prefs.parse(cookieHeader)) || {};
  const formData = await request.formData();

  const receivedData = formData.get(key)
  cookie[key] = receivedData;

  return json(key, {
    headers: {"Set-Cookie": await prefs.serialize(cookie),},
  });
}

export {
  LoadCookiesData,
  StoreCookiesData
}
