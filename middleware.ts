export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/protected/:path*"], // Add the paths you want to protect
};
