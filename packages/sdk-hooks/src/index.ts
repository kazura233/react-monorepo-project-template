import { useEffect } from 'react'

export const useTest = () => {
  useEffect(() => {
    console.log('test')
  }, [])
}
