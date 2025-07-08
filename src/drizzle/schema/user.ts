import { create } from "domain";
import { pgTable,varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "./schemaHelpers";

export const UserTable = pgTable("users", {
    id: varchar("id").primaryKey(),
    name: varchar("Name").notNull(),
    imageUrl: varchar("imageUrl").notNull(),
    email: varchar("Email").notNull().unique(),
    createdAt,
    updatedAt,
});