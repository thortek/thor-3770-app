import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

export async function load({ request }: RequestEvent) {
  // Check if user is authenticated
  const isAuthenticated = await kindeAuthClient.isAuthenticated(
    request as unknown as SessionManager
  );

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    throw redirect(303, '/api/auth/login');
  }

  // If authenticated, allow access and pass user data
  const user = await kindeAuthClient.getUser(request as unknown as SessionManager);

  return {
    user,
    isAuthenticated
  };
}
