import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { primaryKeyAutoGenerated } from "./common";

export const userTable = sqliteTable("user", {
  id: primaryKeyAutoGenerated(),
  email: text("email").notNull().unique(),
  displayName: text("displayName").notNull(),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
