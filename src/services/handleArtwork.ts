import { artwork } from "../public/demo_images.json"

export interface Artwork {
  id: number
  img: string // should be URL
  name: string
  year: string
  materials?: string
  size?: string
  medium?: string
  gallery?: string
  country?: string
}

export function getAll(): Artwork[] {
  return artwork
}
