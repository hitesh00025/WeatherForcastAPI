type TempCategory = 'hot' | 'cold' | 'moderate';

export interface WeatherDTO {
    location: { city?: string; state?: string } | null;
    coordinates: { lat: number; lon: number };
    date: string | null;               
    shortForecast: string;              
    temperature: { value: number | null; unit: 'F' | 'C' };
    category: TempCategory;
  }
  