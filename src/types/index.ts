type Todo = {
    id: string,
    title: string,
    description?: string,
    category: 'Travaille' | 'Personnel' | 'Ugent' | 'Loisir',
    priority: 'Haute' | 'Moyenne' | 'Base',
    status: 'En entente' | 'En cour' | 'Terminer' | 'En retard',
    dateEnd?: Date,
    createdAd: Date,
    updatedAd: Date,
    completedAd?: Date
}

type Coordinates = {
    lat: number,
    lon: number,
}

type Location = {
    name: string, // nom de la ville
    contry: string, // code pays
    coordinate: Coordinates
}

type CurrentWeather = {
    temperature: number, // temperenture actuelle (C)
    feelsLike: number, // temperature recentire
    humidity: number, // %
    pressure: number, // pression (hpa)
    windSpeed: number, // vitesse du vent (km/h)
    description: string,
    icon: string,
    timestamp: Date
}

type Forecast = {
    date: Date,
    tempMin: number, // temperature minimal
    tempMax: number, // temperature maximal
    description: string,
    icon: string
}

type Weather = {
    location: Location,
    current: CurrentWeather,
    forecast: Forecast[]
}

type SettingsApp = {
    theme: 'light' | 'dark' | 'system',
    defaultLocation: string,
    notification: boolean
}

type WeatherCache = {
    data: Weather,
    timestamp: Date,
    ttl: number
}

type LocalStorage = {
    todos: Todo[],
    settings: SettingsApp,
    weather: WeatherCache
}
