import { WeatherDTO } from "../interface/weatherDTO";

type TempCategory = 'hot' | 'cold' | 'moderate';


const NWS_HEADERS = {
  'Accept': 'application/ld+json',
};

const HOT_F = Number(process.env.HOT_F ?? 85);
const COLD_F = Number(process.env.COLD_F ?? 45);


export async function getWeatherForCordinates(lat:number, lon:number): Promise<WeatherDTO> {

  const weatherUrl = `https://api.weather.gov/points/${lat},${lon}`;
  const weatherResp = await fetch(weatherUrl, { headers: NWS_HEADERS });

  const points = await weatherResp.json() as any;
  const forecastUrl = points?.forecast;
  const rel = points?.relativeLocation;
  if (!forecastUrl) {
    throw Object.assign(new Error('NWS did not return a forecast URL'), { status: 502 });
  }

  const fcResp = await fetch(forecastUrl, { headers: NWS_HEADERS });
  if (!fcResp.ok) {
    const txt = await fcResp.text();
    throw Object.assign(new Error('Failed to fetch forecast from NWS'), {
      status: fcResp.status});
  }

  const forecast = await fcResp.json() as any;
  const periods = forecast?.periods ?? [];

  if (!periods.length) {
    throw Object.assign(new Error('No forecast periods available'), { status: 502 });
  }

  const today = periods[0];
  const shortForecast: string = today.shortForecast ?? today.name ?? 'N/A';
  const tempVal: number | null = today.temperature ?? null;
  const tempUnit: 'F' | 'C' = (today.temperatureUnit || 'F').toUpperCase();

  let category: TempCategory = 'moderate';

  if (tempVal !== null) {
    const tempF = tempUnit === 'C' ? (tempVal * 9) / 5 + 32 : tempVal;
    if (tempF >= HOT_F) category = 'hot';
    else if (tempF <= COLD_F) category = 'cold';
  }

  const data: WeatherDTO = {
    location: rel ? { city: rel.city, state: rel.state } : null,
    coordinates: { lat, lon },
    date: today.startTime ?? null,
    shortForecast,
    temperature: { value: tempVal, unit: tempUnit },
    category,
  };

  return data;
}