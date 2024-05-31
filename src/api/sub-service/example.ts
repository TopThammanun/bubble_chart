import subService from '@/api/config/sub-service'

const exampleSubService = {
  getExample() {
    return subService.get({ url: `/example` })
  }
}

export default exampleSubService
