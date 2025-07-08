import { create } from "domain";
import { pgTable,varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
export const OrganizationTable = pgTable("organizations", {
    id: varchar("id").primaryKey(),
    name: varchar("Name").notNull(),
    imageUrl: varchar("imageUrl"),
    createdAt,
    updatedAt,
}); 