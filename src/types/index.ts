export type Todo = {
  id: string,
  title: string,
  description?: string,
  category: 'Travaille' | 'Personnel' | 'Ugent' | 'Loisir',
  priority: 'Haute' | 'Moyenne' | 'Base',
  status: 'En entente' | 'En cour' | 'Terminer' | 'En retard',
  dateEnd: Date | null,  // date a laquelle la tache est prevue pour etre terminer
  createdAd: Date, // date de creation de la tache
  enEntenteAd: Date, // date a laquelle la tache a ete mise en attente
  enCourAd: Date | null, // date a laquelle la tache a ete mise en cour
  updatedAd: Date, // date de derniere modification de la tache
  completedAd: Date | null// date a laquelle la tache a ete terminer
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
    id: "1",
    title: "Réunion avec le client",
    description: "Discussion des nouvelles exigences du projet.",
    category: "Travaille",
    priority: "Haute",
    status: "En entente",
    dateEnd: new Date("2025-11-12T10:00:00Z"),
    createdAd: new Date("2025-11-01T08:00:00Z"),
    enEntenteAd: new Date("2025-11-01T08:15:00Z"),
    enCourAd: null,
    updatedAd: new Date("2025-11-01T08:15:00Z"),
    completedAd: null
  },
  {
    id: "2",
    title: "Réparation du serveur",
    description: "Serveur à redémarrer et vérifier les logs.",
    category: "Travaille",
    priority: "Moyenne",
    status: "En cour",
    dateEnd: new Date("2025-11-10T16:00:00Z"),
    createdAd: new Date("2025-11-03T09:00:00Z"),
    enEntenteAd: new Date("2025-11-03T09:10:00Z"),
    enCourAd: new Date("2025-11-03T09:15:00Z"),
    updatedAd: new Date("2025-11-03T09:15:00Z"),
    completedAd: null
  },
  {
    id: "3",
    title: "Révision du code",
    description: "Corriger les bugs avant la livraison.",
    category: "Travaille",
    priority: "Haute",
    status: "En retard",
    dateEnd: new Date("2025-11-05T17:00:00Z"),
    createdAd: new Date("2025-11-02T10:30:00Z"),
    enEntenteAd: new Date("2025-11-02T10:40:00Z"),
    enCourAd: new Date("2025-11-02T11:00:00Z"),
    updatedAd: new Date("2025-11-02T11:00:00Z"),
    completedAd: null
  },
  {
    id: "4",
    title: "Formation en ligne",
    description: "Suivre le cours de développement JavaScript.",
    category: "Travaille",
    priority: "Moyenne",
    status: "Terminer",
    dateEnd: new Date("2025-11-06T18:00:00Z"),
    createdAd: new Date("2025-10-25T09:00:00Z"),
    enEntenteAd: new Date("2025-10-25T09:05:00Z"),
    enCourAd: new Date("2025-10-25T09:10:00Z"),
    updatedAd: new Date("2025-10-25T09:15:00Z"),
    completedAd: new Date("2025-10-26T12:00:00Z")
  },
  {
    id: "5",
    title: "Livraison des documents",
    description: "Envoyer les documents de projet au client.",
    category: "Travaille",
    priority: "Base",
    status: "En cour",
    dateEnd: new Date("2025-11-10T14:00:00Z"),
    createdAd: new Date("2025-11-03T11:00:00Z"),
    enEntenteAd: new Date("2025-11-03T11:05:00Z"),
    enCourAd: new Date("2025-11-03T11:10:00Z"),
    updatedAd: new Date("2025-11-03T11:15:00Z"),
    completedAd: null
  },
  {
    id: "6",
    title: "Achat de fournitures",
    description: "Commander des fournitures de bureau.",
    category: "Personnel",
    priority: "Base",
    status: "En entente",
    dateEnd: new Date("2025-11-15T16:00:00Z"),
    createdAd: new Date("2025-11-02T14:00:00Z"),
    enEntenteAd: new Date("2025-11-02T14:05:00Z"),
    enCourAd: null,
    updatedAd: new Date("2025-11-02T14:05:00Z"),
    completedAd: null
  },
  {
    id: "7",
    title: "Réserver des billets d'avion",
    description: "Acheter des billets pour le voyage d'affaires.",
    category: "Personnel",
    priority: "Haute",
    status: "En cour",
    dateEnd: new Date("2025-11-11T15:00:00Z"),
    createdAd: new Date("2025-11-03T08:00:00Z"),
    enEntenteAd: new Date("2025-11-03T08:05:00Z"),
    enCourAd: new Date("2025-11-03T08:10:00Z"),
    updatedAd: new Date("2025-11-03T08:15:00Z"),
    completedAd: null
  },
  {
    id: "8",
    title: "S'entrainer au marathon",
    description: "Entraînement quotidien pour le marathon.",
    category: "Loisir",
    priority: "Haute",
    status: "Terminer",
    dateEnd: new Date("2025-11-07T07:00:00Z"),
    createdAd: new Date("2025-11-01T06:00:00Z"),
    enEntenteAd: new Date("2025-11-01T06:10:00Z"),
    enCourAd: new Date("2025-11-01T06:20:00Z"),
    updatedAd: new Date("2025-11-01T06:20:00Z"),
    completedAd: new Date("2025-11-01T06:30:00Z")
  },
  {
    id: "9",
    title: "Relecture du rapport",
    description: "Vérifier les fautes d'orthographe et la grammaire.",
    category: "Travaille",
    priority: "Moyenne",
    status: "En retard",
    dateEnd: new Date("2025-11-05T09:00:00Z"),
    createdAd: new Date("2025-11-02T14:30:00Z"),
    enEntenteAd: new Date("2025-11-02T14:35:00Z"),
    enCourAd: new Date("2025-11-02T14:40:00Z"),
    updatedAd: new Date("2025-11-02T14:40:00Z"),
    completedAd: null
  },
  {
    id: "10",
    title: "Déménagement",
    description: "Emballer et transporter les objets à la nouvelle maison.",
    category: "Personnel",
    priority: "Moyenne",
    status: "En cour",
    dateEnd: new Date("2025-11-13T15:00:00Z"),
    createdAd: new Date("2025-11-04T09:30:00Z"),
    enEntenteAd: new Date("2025-11-04T09:35:00Z"),
    enCourAd: new Date("2025-11-04T09:40:00Z"),
    updatedAd: new Date("2025-11-04T09:40:00Z"),
    completedAd: null
  },
  {
    id: "11",
    title: "Réunion d'équipe",
    description: "Planification de la prochaine phase du projet.",
    category: "Travaille",
    priority: "Haute",
    status: "Terminer",
    dateEnd: new Date("2025-11-07T12:00:00Z"),
    createdAd: new Date("2025-11-01T11:00:00Z"),
    enEntenteAd: new Date("2025-11-01T11:05:00Z"),
    enCourAd: new Date("2025-11-01T11:10:00Z"),
    updatedAd: new Date("2025-11-01T11:10:00Z"),
    completedAd: new Date("2025-11-01T12:00:00Z")
  },
  {
    id: "12",
    title: "Vérifier les emails urgents",
    description: "Répondre aux emails de clients importants.",
    category: "Travaille",
    priority: "Haute",
    status: "En cour",
    dateEnd: new Date("2025-11-07T13:00:00Z"),
    createdAd: new Date("2025-11-06T10:30:00Z"),
    enEntenteAd: new Date("2025-11-06T10:40:00Z"),
    enCourAd: new Date("2025-11-06T10:45:00Z"),
    updatedAd: new Date("2025-11-06T10:45:00Z"),
    completedAd: null
  },
  {
    id: "13",
    title: "Analyser les résultats du marketing",
    description: "Vérifier les statistiques de la dernière campagne.",
    category: "Travaille",
    priority: "Moyenne",
    status: "Terminer",
    dateEnd: new Date("2025-11-05T15:00:00Z"),
    createdAd: new Date("2025-11-02T09:00:00Z"),
    enEntenteAd: new Date("2025-11-02T09:10:00Z"),
    enCourAd: new Date("2025-11-02T09:15:00Z"),
    updatedAd: new Date("2025-11-02T09:15:00Z"),
    completedAd: new Date("2025-11-02T15:00:00Z")
  },
  {
    id: "14",
    title: "Organiser les vacances",
    description: "Planifier un voyage pour l'été prochain.",
    category: "Personnel",
    priority: "Base",
    status: "En entente",
    dateEnd: new Date("2025-12-01T12:00:00Z"),
    createdAd: new Date("2025-11-05T08:00:00Z"),
    enEntenteAd: new Date("2025-11-05T08:05:00Z"),
    enCourAd: null,
    updatedAd: new Date("2025-11-05T08:05:00Z"),
    completedAd: null
  },
  {
    id: "15",
    title: "Faire le ménage de la maison",
    description: "Nettoyer chaque pièce et organiser les placards.",
    category: "Personnel",
    priority: "Base",
    status: "En cour",
    dateEnd: new Date("2025-11-10T16:00:00Z"),
    createdAd: new Date("2025-11-05T13:00:00Z"),
    enEntenteAd: new Date("2025-11-05T13:05:00Z"),
    enCourAd: new Date("2025-11-05T13:10:00Z"),
    updatedAd: new Date("2025-11-05T13:10:00Z"),
    completedAd: null
  },
  {
    id: "16",
    title: "Laver la voiture",
    description: "Effectuer un nettoyage intérieur et extérieur.",
    category: "Personnel",
    priority: "Base",
    status: "En retard",
    dateEnd: new Date("2025-11-03T10:00:00Z"),
    createdAd: new Date("2025-11-01T09:30:00Z"),
    enEntenteAd: new Date("2025-11-01T09:35:00Z"),
    enCourAd: new Date("2025-11-01T09:40:00Z"),
    updatedAd: new Date("2025-11-01T09:40:00Z"),
    completedAd: null
  },
  {
    id: "17",
    title: "Préparer un rapport de performance",
    description: "Analyser les données et rédiger un résumé des résultats.",
    category: "Travaille",
    priority: "Haute",
    status: "En cour",
    dateEnd: new Date("2025-11-08T14:00:00Z"),
    createdAd: new Date("2025-11-03T13:00:00Z"),
    enEntenteAd: new Date("2025-11-03T13:05:00Z"),
    enCourAd: new Date("2025-11-03T13:10:00Z"),
    updatedAd: new Date("2025-11-03T13:10:00Z"),
    completedAd: null
  },
  {
    id: "18",
    title: "Faire un audit des dépenses",
    description: "Analyser les dépenses du mois dernier et ajuster le budget.",
    category: "Travaille",
    priority: "Moyenne",
    status: "En entente",
    dateEnd: new Date("2025-11-12T10:00:00Z"),
    createdAd: new Date("2025-11-05T11:00:00Z"),
    enEntenteAd: new Date("2025-11-05T11:05:00Z"),
    enCourAd: null,
    updatedAd: new Date("2025-11-05T11:05:00Z"),
    completedAd: null
  },
  {
    id: "19",
    title: "Préparer un budget annuel",
    description: "Rassembler toutes les informations pour préparer le budget de l'année prochaine.",
    category: "Travaille",
    priority: "Haute",
    status: "Terminer",
    dateEnd: new Date("2025-11-06T16:00:00Z"),
    createdAd: new Date("2025-10-30T08:30:00Z"),
    enEntenteAd: new Date("2025-10-30T08:35:00Z"),
    enCourAd: new Date("2025-10-30T08:40:00Z"),
    updatedAd: new Date("2025-10-30T08:40:00Z"),
    completedAd: new Date("2025-10-30T16:00:00Z")
  },
  {
    id: "20",
    title: "Créer un compte bancaire",
    description: "Ouvrir un compte pour la nouvelle entreprise.",
    category: "Personnel",
    priority: "Haute",
    status: "En cour",
    dateEnd: new Date("2025-11-14T11:00:00Z"),
    createdAd: new Date("2025-11-04T10:00:00Z"),
    enEntenteAd: new Date("2025-11-04T10:05:00Z"),
    enCourAd: new Date("2025-11-04T10:10:00Z"),
    updatedAd: new Date("2025-11-04T10:10:00Z"),
    completedAd: null
  },
  {
    id: "21",
    title: "Organiser une soirée entre amis",
    description: "Planifier les détails de la soirée : lieu, nourriture, invités.",
    category: "Loisir",
    priority: "Moyenne",
    status: "En entente",
    dateEnd: new Date("2025-11-20T18:00:00Z"),
    createdAd: new Date("2025-11-03T15:00:00Z"),
    enEntenteAd: new Date("2025-11-03T15:05:00Z"),
    enCourAd: null,
    updatedAd: new Date("2025-11-03T15:05:00Z"),
    completedAd: null
  },
  {
    id: "22",
    title: "Apprendre à cuisiner",
    description: "Suivre des tutoriels pour améliorer mes compétences culinaires.",
    category: "Loisir",
    priority: "Base",
    status: "En cour",
    dateEnd: new Date("2025-11-12T19:00:00Z"),
    createdAd: new Date("2025-11-04T17:00:00Z"),
    enEntenteAd: new Date("2025-11-04T17:05:00Z"),
    enCourAd: new Date("2025-11-04T17:10:00Z"),
    updatedAd: new Date("2025-11-04T17:10:00Z"),
    completedAd: null
  },
  {
    id: "23",
    title: "Faire du bénévolat",
    description: "Participer à une activité de bénévolat local.",
    category: "Loisir",
    priority: "Moyenne",
    status: "Terminer",
    dateEnd: new Date("2025-11-06T14:00:00Z"),
    createdAd: new Date("2025-11-01T10:00:00Z"),
    enEntenteAd: new Date("2025-11-01T10:05:00Z"),
    enCourAd: new Date("2025-11-01T10:10:00Z"),
    updatedAd: new Date("2025-11-01T10:10:00Z"),
    completedAd: new Date("2025-11-01T14:00:00Z")
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