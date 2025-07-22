CREATE TABLE "tblRoleMenus" (
	"ID" "smallserial" PRIMARY KEY NOT NULL,
	"roleID" "smallserial" NOT NULL,
	"menuID" "smallserial" NOT NULL,
	"IsActive" boolean,
	"InActiveDate" timestamp,
	"InActiveBy" varchar(100),
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
