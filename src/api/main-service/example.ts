import subService from '@/api/config/main-service'

const exampleMainService = {
  getExample() {
    return subService.get({ url: `/example` })
  }
}

export default exampleMainService
