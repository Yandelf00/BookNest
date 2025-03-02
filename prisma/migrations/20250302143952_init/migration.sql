-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "numberOfPages" INTEGER NOT NULL,
    "pageAt" INTEGER NOT NULL
);
