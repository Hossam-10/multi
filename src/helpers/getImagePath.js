const getImagePath = (imagePath) => {
  return new URL(`../assets/images/${imagePath}`, import.meta.url).href
}
export default getImagePath
