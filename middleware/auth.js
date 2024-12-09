import { getCookie } from "h3";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) {
    const jwtModule = await import("jsonwebtoken");
    const jwt = jwtModule.default || jwtModule;
    const event = useRequestEvent();
    const token = getCookie(event, "authToken");

    try {
      const decoded = jwt.verify(token, process.env.CORRECT_PASSWORD);

      if (!decoded.verified && ["/protected", "/emails"].includes(to.path)) {
        return navigateTo("/");
      }
    } catch (error) {
      return navigateTo("/");
    }
  }
});
