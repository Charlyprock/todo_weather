import { useEffect, useReducer, useState } from "react";
import {
    type LocalStorage,
    type Todo,
    type SettingsApp,
    type WeatherCache,
    sampleLocalStorage 
} from "@/types";

const KEY_LOCAL_STORAGE = 'todo-meteo'

function getData(): {data: LocalStorage, isEmpty: boolean} {
    const data = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE) ?? "{}") as LocalStorage
    return { 
        data: data,
        isEmpty: Object.entries(data).length == 0
    }
}

function setData(data: LocalStorage){
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(data))
}

function useLocalStorage() {

    const [todos, setTodo] = useState<Todo[] | undefined>(undefined)
    const [settingsApp, setSettingsApp] = useState<SettingsApp | undefined>(undefined)
    const [weatherCache, setWeatherCache] = useState<WeatherCache | undefined>(undefined)

    useEffect(() => {
        // setData(sampleLocalStorage)
        const {data, isEmpty} = getData()

        if (!isEmpty) {
            setTodo(data.todos)
        }
        console.log("localstorage", isEmpty)
    }, [])

    return {
        todos: todos
    }
}

export {
    useLocalStorage
}