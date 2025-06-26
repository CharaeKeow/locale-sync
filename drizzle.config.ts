import { defineConfig } from 'drizzle-kit';

import { serverEnv } from '@/lib/env/server';

export default defineConfig({
  schema: './src/lib/db/schema',
  out: './migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: serverEnv.DATABASE_URL,
    /**
     * Using 'sqlite' dialect to avoid AUTH_TOKEN requirement during local development.
     * The 'turso' dialect requires authToken even for local libsql connections.
     */
    // authToken: serverEnv.DATABASE_AUTH_TOKEN,
  },
});
