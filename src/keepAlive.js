import { schedule } from "node-cron";
import { get } from "axios";

const SERVER_URL = process.env.RENDER_URL;

schedule("*/10 * * * *", async () => {
  try {
    const res = await get(SERVER_URL);
    console.log(`[Keep-alive] Ping OK — ${new Date().toISOString()} — status: ${res.status}`);
  } catch (err) {
    console.error(`[Keep-alive] Ping échoué — ${err.message}`);
  }
});