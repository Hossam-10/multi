const getImagePath = (imagePath:string):string => {
  return new URL(`../assets/images/${imagePath}`, import.meta.url).href
}
export default getImagePath
