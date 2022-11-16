import { createClient } from "redis";

const test = async () => {
  const key = "test";

  const client = createClient();

  await client.json.set();
}