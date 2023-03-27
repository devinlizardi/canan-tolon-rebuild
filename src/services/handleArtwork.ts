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

export function getArtById(id: number): Artwork {
  const art = artwork.find(elem => elem.id === id)
  if (art) {
    return art
  } else {
    throw new Error(`could not find art with id: ${id}`)
  }
}

export function getAdjacentIds(id: number): [number, number] {
  const ids = getAll().map(elem => elem.id)
  if (ids.length < 2) {
    throw new Error(`not enough artwork found: ${ids}`)
  }
  const idx = ids.indexOf(id)
  if (idx === -1) {
    throw new Error(`could't find id: ${id} in id's array: ${ids}`)
  } else if (idx === 0) {
    return [id, ids[1]]
  } else if (idx === ids.length - 1) {
    return [ids[ids.length - 2], id]
  } else {
    return [ids[idx - 1], ids[idx + 1]]
  }
}