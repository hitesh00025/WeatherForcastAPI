import { Router } from 'express';
import { z } from 'zod';
import { getWeatherForCordinates } from '../services/weatherService';

const router = Router();

const querySchema = z.object({
  lat: z.coerce.number().min(-90).max(90),
  lon: z.coerce.number().min(-180).max(180),
});

router.get('/', async (req, res, next) => {
  try {
    const { lat, lon } = querySchema.parse(req.query);
    const result = await getWeatherForCordinates(Number(lat), Number(lon));
    console.log(result);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

export default router;