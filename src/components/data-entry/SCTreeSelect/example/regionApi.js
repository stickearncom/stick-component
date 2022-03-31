import region from './region.json'

// eslint-disable-next-line import/prefer-default-export
export function ajaxFindRegion(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        region.filter((element) => element.name.toLowerCase().includes(query.toLowerCase()))
      )
    }, 1000)
  })
}
