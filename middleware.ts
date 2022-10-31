import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

// middleware being used for main.nabu.xyz protection
export const middleware = createNextAuthMiddleware();

export const config = {
  matcher: ["/(.*)", "/_next/static/chunks/(.*)"],
};
