import { Router } from "express";
import { getWeatherForCordinates } from '../services/weatherService';

const router = Router();

/**
 * @openapi
 * /api/forecast:
 *   get:
 *     summary: Get today's short forecast for given coordinates
 *     description: Uses NWS API to return the current period's short forecast and temperature category.
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema: { type: number, minimum: -90, maximum: 90 }
 *         description: Latitude (e.g., 40.7128)
 *       - in: query
 *         name: lon
 *         required: true
 *         schema: { type: number, minimum: -180, maximum: 180 }
 *         description: Longitude (e.g., -74.0060)
 *     responses:
 *       200:
 *         description: Forecast response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 location:
 *                   type: object
 *                   nullable: true
 *                   properties:
 *                     city: { type: string }
 *                     state: { type: string }
 *                 coordinates:
 *                   type: object
 *                   properties:
 *                     lat: { type: number }
 *                     lon: { type: number }
 *                 issued:
 *                   type: string
 *                   nullable: true
 *                   format: date-time
 *                 shortForecast:
 *                   type: string
 *                   example: Partly Cloudy
 *                 temperature:
 *                   type: object
 *                   properties:
 *                     value: { type: number, nullable: true }
 *                     unit: { type: string, enum: ["F","C"] }
 *                 category:
 *                   type: string
 *                   enum: [hot, cold, moderate]
 *       400:
 *         description: Invalid coordinates
 *       502:
 *         description: Upstream NWS failure
 */
router.get('/forecast', async (req, res, next) => {
  try {
    const { lat, lon } = req.query;
    const result = await getWeatherForCordinates(Number(lat), Number(lon));
    res.json(result);
  } catch (err) {
    next(err);
  }
});
export default router;