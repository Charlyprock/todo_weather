export type Todo = {
  id: string,
  title: string,
  description?: string,
  category: 'Travaille' | 'Personnel' | 'Ugent' | 'Loisir',
  priority: 'Haute' | 'Moyenne' | 'Base',
  status: 'En entente' | 'En cour' | 'Terminer' | 'En retard',
  dateEnd?: Date,  // date a laquelle la tache est prevue pour etre terminer
  createdAd: Date, // date de creation de la tache
  updatedAd: Date, // date de derniere modification de la tache
  completedAd?: Date // date a laquelle la tache a ete terminer
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



// Données d'exemple pour les types définis

const sampleTodos: Todo[] = [
  {
    id: "todo-001",
    title: "Finaliser le rapport mensuel",
    description: "Compiler les données de vente et préparer la présentation",
    category: "Travaille",
    priority: "Haute",
    status: "En cour",
    dateEnd: new Date("2024-09-15T17:00:00Z"),
    createdAd: new Date("2024-09-01T09:00:00Z"),
    updatedAd: new Date("2024-09-08T14:30:00Z")
  },
  {
    id: "todo-002",
    title: "Faire les courses",
    description: "Acheter des légumes, fruits et produits d'hygiène",
    category: "Personnel",
    priority: "Moyenne",
    status: "En entente",
    dateEnd: new Date("2024-09-10T19:00:00Z"),
    createdAd: new Date("2024-09-07T08:15:00Z"),
    updatedAd: new Date("2024-09-07T08:15:00Z")
  },
  {
    id: "todo-003",
    title: "Rendre le devoir de mathématiques",
    category: "Ugent",
    priority: "Haute",
    status: "Terminer",
    dateEnd: new Date("2024-09-05T23:59:00Z"),
    createdAd: new Date("2024-08-28T10:00:00Z"),
    updatedAd: new Date("2024-09-04T16:45:00Z"),
    completedAd: new Date("2024-09-04T16:45:00Z")
  },
  {
    id: "todo-004",
    title: "Regarder le nouveau film Marvel",
    description: "Aller au cinéma avec les amis",
    category: "Loisir",
    priority: "Base",
    status: "En retard",
    dateEnd: new Date("2024-09-06T21:00:00Z"),
    createdAd: new Date("2024-09-02T12:00:00Z"),
    updatedAd: new Date("2024-09-07T20:00:00Z")
  }
];


const sampleCoordinates: Coordinates[] = [
  { lat: 48.8566, lon: 2.3522 }, // Paris
  { lat: 51.5074, lon: -0.1278 }, // Londres
  { lat: 40.7128, lon: -74.0060 }, // New York
  { lat: 35.6762, lon: 139.6503 } // Tokyo
];


const sampleLocations: Location[] = [
  {
    name: "Paris",
    contry: "FR",
    coordinate: { lat: 48.8566, lon: 2.3522 }
  },
  {
    name: "Londres",
    contry: "GB",
    coordinate: { lat: 51.5074, lon: -0.1278 }
  },
  {
    name: "New York",
    contry: "US",
    coordinate: { lat: 40.7128, lon: -74.0060 }
  },
  {
    name: "Douala",
    contry: "CM",
    coordinate: { lat: 4.0511, lon: 9.7679 }
  }
];


const sampleCurrentWeather: CurrentWeather[] = [
  {
    temperature: 22,
    feelsLike: 24,
    humidity: 65,
    pressure: 1013,
    windSpeed: 12,
    description: "Partiellement nuageux",
    icon: "partly-cloudy",
    timestamp: new Date("2024-09-08T15:00:00Z")
  },
  {
    temperature: 28,
    feelsLike: 32,
    humidity: 78,
    pressure: 1009,
    windSpeed: 8,
    description: "Ensoleillé avec quelques nuages",
    icon: "sunny-cloudy",
    timestamp: new Date("2024-09-08T15:00:00Z")
  }
];


const sampleForecasts: Forecast[] = [
  {
    date: new Date("2024-09-09T00:00:00Z"),
    tempMin: 18,
    tempMax: 25,
    description: "Ensoleillé",
    icon: "sunny"
  },
  {
    date: new Date("2024-09-10T00:00:00Z"),
    tempMin: 16,
    tempMax: 23,
    description: "Pluie légère",
    icon: "light-rain"
  },
  {
    date: new Date("2024-09-11T00:00:00Z"),
    tempMin: 19,
    tempMax: 26,
    description: "Nuageux",
    icon: "cloudy"
  },
  {
    date: new Date("2024-09-12T00:00:00Z"),
    tempMin: 21,
    tempMax: 28,
    description: "Partiellement ensoleillé",
    icon: "partly-sunny"
  },
  {
    date: new Date("2024-09-13T00:00:00Z"),
    tempMin: 17,
    tempMax: 24,
    description: "Orageux",
    icon: "thunderstorm"
  }
];


const sampleWeather: Weather = {
  location: {
    name: "Douala",
    contry: "CM",
    coordinate: { lat: 4.0511, lon: 9.7679 }
  },
  current: {
    temperature: 28,
    feelsLike: 32,
    humidity: 78,
    pressure: 1009,
    windSpeed: 8,
    description: "Ensoleillé avec quelques nuages",
    icon: "sunny-cloudy",
    timestamp: new Date("2024-09-08T15:00:00Z")
  },
  forecast: sampleForecasts
};


const sampleSettings: SettingsApp = {
  theme: "system",
  defaultLocation: "Douala",
  notification: true
};


const sampleWeatherCache: WeatherCache = {
  data: sampleWeather,
  timestamp: new Date("2024-09-08T15:00:00Z"),
  ttl: 3600 // 1 heure en secondes
};


const sampleLocalStorage: LocalStorage = {
  todos: sampleTodos,
  settings: sampleSettings,
  weather: sampleWeatherCache
};


export {
  sampleTodos,
  sampleCoordinates,
  sampleLocations,
  sampleCurrentWeather,
  sampleForecasts,
  sampleWeather,
  sampleSettings,
  sampleWeatherCache,
  sampleLocalStorage
};