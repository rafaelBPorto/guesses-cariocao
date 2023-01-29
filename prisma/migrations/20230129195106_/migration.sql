-- CreateTable
CREATE TABLE "guesses" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "matchId" INTEGER NOT NULL,
    "guess" INTEGER NOT NULL,

    CONSTRAINT "guesses_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches" (
    "id" SERIAL NOT NULL,
    "homeTeamId" INTEGER NOT NULL,
    "visitingTeamId" INTEGER NOT NULL,
    "resultMatch" INTEGER NOT NULL,

    CONSTRAINT "matches_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "possibilitiesGuesses" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "possibilitiesGuesses_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "possibilitiesResults" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "possibilitiesResults_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teams_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- AddForeignKey
ALTER TABLE "guesses" ADD CONSTRAINT "guesses_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "guesses" ADD CONSTRAINT "guesses_fk1" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "guesses" ADD CONSTRAINT "guesses_fk2" FOREIGN KEY ("guess") REFERENCES "possibilitiesGuesses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_fk0" FOREIGN KEY ("homeTeamId") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_fk1" FOREIGN KEY ("visitingTeamId") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_fk2" FOREIGN KEY ("resultMatch") REFERENCES "possibilitiesResults"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
