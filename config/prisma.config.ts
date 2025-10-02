import { PrismaClient } from '@prisma/client';

export class PrismaClientConfig {
    private constructor() {}
    private static client: PrismaClient= new PrismaClient();

    public static getInstance(): PrismaClient {
        return PrismaClientConfig.client;
    }
}
