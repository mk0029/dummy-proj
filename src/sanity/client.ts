import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "tvv8gdx6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});