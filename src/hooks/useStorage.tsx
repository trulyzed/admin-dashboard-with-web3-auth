import { useCallback } from "react"

export const useStorage = () => {
  const getData = useCallback((key: string): any => {
    if (typeof window === 'undefined') return
    const data = localStorage.getItem(key)
    return typeof data === "string" ? JSON.parse(data) : null
  }, [])
  
  const setData = useCallback((key: string, data: any) => {
    if (typeof window === 'undefined') return
    const strData = typeof data === 'string' ? data : JSON.stringify(data)
    return localStorage.setItem(key, strData)
  }, [])

  return {
    getData,
    setData
  }
}