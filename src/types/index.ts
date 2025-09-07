export type Todo = {
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

export type Coordinates = {
    lat: number,
    lon: number,
}

export type Location = {
    name: string, // nom de la ville
    contry: string, // code pays
    coordinate: Coordinates
}

export type CurrentWeather = {
    temperature: number, // temperenture actuelle (C)
    feelsLike: number, // temperature recentire
    humidity: number, // %
    pressure: number, // pression (hpa)
    windSpeed: number, // vitesse du vent (km/h)
    description: string,
    icon: string,
    timestamp: Date
}

export type Forecast = {
    date: Date,
    tempMin: number, // temperature minimal
    tempMax: number, // temperature maximal
    description: string,
    icon: string
}

export type Weather = {
    location: Location,
    current: CurrentWeather,
    forecast: Forecast[]
}

export type SettingsApp = {
    theme: 'light' | 'dark' | 'system',
    defaultLocation: string,
    notification: boolean
}

export type WeatherCache = {
    data: Weather,
    timestamp: Date,
    ttl: number
}

export type LocalStorage = {
    todos: Todo[],
    settings: SettingsApp,
    weather: WeatherCache
}
