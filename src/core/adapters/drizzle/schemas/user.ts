import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { ulid } from "ulid";

export const userTable = sqliteTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => ulid()),
  email: text("email").notNull().unique(),
  displayName: text("displayName").notNull(),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
