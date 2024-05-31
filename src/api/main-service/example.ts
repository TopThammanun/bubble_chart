import subService from '@/api/main-service/config'

const exampleApi = {
  getExample() {
    return subService.get({ url: `/example` })
  }
}

export default exampleApi
