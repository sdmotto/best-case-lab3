import { getCookie } from 'h3';

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) {
    const jwt = await import('jsonwebtoken');
    const event = useRequestEvent();
    const token = getCookie(event, 'authToken');

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!decoded.verified && ['/protected', '/emails'].includes(to.path)) {
        return navigateTo('/');
      }
    } catch (error) {
      return navigateTo('/');
    }
  }
});