import { loaderAction } from '@/store/reducers/loader'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'usehooks-ts'

const useBreakpoint = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const up = () => {
    // dispatch(loaderAction.startLoader())
  }
  const down = () => {
    // dispatch(loaderAction.stopLoader())
  }

  return {
    up,
    down
  }
}

export default useBreakpoint
