import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const students = sqliteTable('students', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  displayName: text('display_name').notNull(),
  grade: text('grade').notNull().default(''),
  status: text('status').notNull().default('active'),
  createdBy: text('created_by').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
});

export const progress = sqliteTable('progress', {
  studentEmail: text('student_email').primaryKey(),
  snapshotJson: text('snapshot_json').notNull().default('{}'),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
});
