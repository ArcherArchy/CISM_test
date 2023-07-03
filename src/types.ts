export type TImageModel = {
    size: string,
    imageUrl: string,
    failure: boolean
  }
  
export type TDocumentsModel = {
    id: number,
    description: string,
    name: string,
    image: string,
    loadedImage: TImageModel
  }
  