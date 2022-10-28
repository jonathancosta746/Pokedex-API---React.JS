import { useEffect, useState } from "react"
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export function useAPI<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      api.get(url)
      .then(response => setData(response.data.results))
    } catch (error) {
        console.error(error)
    } finally {
        setIsLoading(false)
    }
  }, [url])

  console.log(data)

  return { data, isLoading }
}