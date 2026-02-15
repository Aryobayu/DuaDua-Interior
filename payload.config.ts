import path from "path";
import { fileURLToPath } from "url";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Media } from "./payload/collections/Media";
import { Projects } from "./payload/collections/Projects";
import { Users } from "./payload/collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Projects],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "local-dev-payload-secret",
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "file:./.payload/data.db",
    },
  }),
  sharp,
  cors: [siteURL],
  csrf: [siteURL],
  plugins: [],
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
