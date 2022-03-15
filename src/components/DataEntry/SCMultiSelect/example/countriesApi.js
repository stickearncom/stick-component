import countries from './countries.json'

// eslint-disable-next-line import/prefer-default-export
export function ajaxFindCountry(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        countries.filter((element) => element.name.toLowerCase().includes(query.toLowerCase()))
      )
    }, 1000)
  })
}
