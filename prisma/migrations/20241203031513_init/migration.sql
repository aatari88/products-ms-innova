-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "name_print" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "afectation_igv" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "unit_id" INTEGER NOT NULL,
    "type_detraction" TEXT NOT NULL,
    "percentage_detraction" DOUBLE PRECISION NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
