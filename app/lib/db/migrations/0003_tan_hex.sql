CREATE TABLE "tblUserMenus" (
	"ID" "smallserial" PRIMARY KEY NOT NULL,
	"userID" "smallserial" NOT NULL,
	"menuID" "smallserial" NOT NULL,
	"IsActive" boolean,
	"InActiveDate" timestamp,
	"InActiveBy" varchar(100),
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tblUserRoles" (
	"ID" "smallserial" PRIMARY KEY NOT NULL,
	"userID" uuid,
	"roleID" "smallserial" NOT NULL,
	"IsActive" boolean,
	"InActiveDate" timestamp,
	"InActiveBy" varchar(100),
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
