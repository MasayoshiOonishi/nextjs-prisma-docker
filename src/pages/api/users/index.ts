
import prisma from '@/lib/prisma';
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { email, name } = req.body;

  
  const result = await prisma.user.create({
    data: {
      email,
      name

    },
  });
  res.json(result);
}