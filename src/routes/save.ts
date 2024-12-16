import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import {nanoid} from 'nanoid';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req: any, res: any) => {
    try {
        const { id } = req.query;

        if(!id)
            return res.status(400).json({ error: 'Id is required' });

        const result = await prisma.data.findFirst({
            where:{
                id: id,
            } 
        });

        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req: any, res: any) => {
    try {
        const { content } = req.body;

        if (!content)
            return res.status(400).json({ error: 'Content is required' });
        
        const id = nanoid(13)

        const newData = await prisma.data.create({
            data: { 
                id: id,
                content: content
            },
        });

        res.status(201).json(newData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
