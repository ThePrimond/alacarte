import { Client } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_BEND_BASE_URL)
  .setProject(import.meta.env.VITE_BEND_PROJECT_ID);

export default client;
