import type { InferSelectModel } from 'drizzle-orm';
import {
  pgTable,
  varchar,
  timestamp,
  //json,
  uuid,
  text,
 // primaryKey,
 // foreignKey,
  boolean,integer,date ,smallserial
} from 'drizzle-orm/pg-core';





export const user = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(), // uuid_generate_v4()
  name: varchar('name', { length: 255 }).notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  phone: varchar('phone', { length: 50 }),
  computerName: varchar('computername', { length: 50 }),
  inActiveDate: timestamp('inactivedate'),
  userLevel: integer('userlevel'),
  userType: varchar('usertype', { length: 50 }),
  imageUrl: varchar('image_url', { length: 50 }),
   isActive: boolean('IsActive'),
});

export type User = InferSelectModel<typeof user>;

export const invoices = pgTable('invoices', {
  id: uuid('id').defaultRandom().primaryKey(), // uses uuid_generate_v4()
  customerId: uuid('customer_id').notNull(),
  amount: integer('amount').notNull(),
  status: varchar('status', { length: 255 }).notNull(),
  date: date('date').notNull(),
});

export type Invoice = InferSelectModel<typeof invoices>;

export const customers = pgTable('customers', {
  id: uuid('id').defaultRandom().primaryKey(), // uuid_generate_v4()
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  imageUrl: varchar('image_url', { length: 255 }).notNull(),
});

export type Customer = InferSelectModel<typeof customers>;

export const revenue = pgTable('revenue', {
  month: varchar('month', { length: 4 }).notNull().unique(),
  revenue: integer('revenue').notNull(),
  yearOf: integer('yearOf')
});

export type Revenue = InferSelectModel<typeof revenue>;

export const Roles = pgTable('tblRoles', {
  id: smallserial('ID').primaryKey(),
  name: varchar('Name', { length: 20 }).notNull(),
  description: varchar('Description', { length: 100 }),
  isActive: boolean('IsActive'),
  inActiveDate: timestamp('InActiveDate'),
  inActiveBy: varchar('InActiveBy', { length: 100 }),
  createdAt: timestamp('CreatedAt').notNull().defaultNow(),
});

export type Role = InferSelectModel<typeof Roles>;

export const UserRoles = pgTable('tblUserRoles', {
  id: smallserial('ID').primaryKey(),
  userid: uuid('userID'),
  roleid: smallserial('roleID'),
  
  isActive: boolean('IsActive'),
  inActiveDate: timestamp('InActiveDate'),
  inActiveBy: varchar('InActiveBy', { length: 100 }),
  createdAt: timestamp('CreatedAt').notNull().defaultNow(),
});

export type UserRole = InferSelectModel<typeof UserRoles>;

export const UserMenus = pgTable('tblUserMenus', {
  id: smallserial('ID').primaryKey(),
  userid: smallserial('userID'),
  menuid: smallserial('menuID'),
  
  isActive: boolean('IsActive'),
  inActiveDate: timestamp('InActiveDate'),
  inActiveBy: varchar('InActiveBy', { length: 100 }),
  createdAt: timestamp('CreatedAt').notNull().defaultNow(),
});

export type UserMenu = InferSelectModel<typeof UserMenus>;