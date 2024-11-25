const isExternalUrl = (url: string) => url.startsWith('http')

export const getImageSrc = (logoUrl: string) => {
  if (isExternalUrl(logoUrl)) {
    return logoUrl
  }
  // For local images, use dynamic import
  try {
    // Using the @/ alias to reference from the src directory
    return new URL(`../assets/images/${logoUrl}`, import.meta.url).href
  } catch (error) {
    console.error(`Error loading image: ${logoUrl}`, error)
    return ''
  }
}
