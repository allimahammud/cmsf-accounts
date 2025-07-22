CREATE TABLE "tblUserMenus" (
	"ID" "smallserial" PRIMARY KEY NOT NULL,
	"userID" uuid,
	"menuID" "smallserial" NOT NULL,
	"IsActive" boolean,
	"InActiveDate" timestamp,
	"InActiveBy" varchar(100),
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
