import { Prisma } from "@prisma/client";
import  prisma from "../database.js";
import { CreateRecommendationData } from "../services/recommendationsService.js";




export async function truncate(){
    await prisma.$executeRaw`TRUNCATE TABLE recommendations RESTART IDENTITY`;
}