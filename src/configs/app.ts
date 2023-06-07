const NEST_APP_DB_USERNAME = process.env.NEST_APP_DB_USERNAME ?? 'bngocblog';
const NEST_APP_DB_PASSWORD = process.env.NEST_APP_DB_PASSWORD ?? 'bngocadmin';
const NEST_APP_DB_NAME = process.env.NEST_APP_DB_NAME ?? 'bngoc-blog';
const NEST_APP_DB_PORT = Number(process.env.NEST_APP_DB_PORT ?? 8084);

export const APP_CONFIGS = {
  NEST_APP_DB_USERNAME,
  NEST_APP_DB_PASSWORD,
  NEST_APP_DB_NAME,
  NEST_APP_DB_PORT,
};
