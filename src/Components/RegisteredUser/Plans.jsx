import React from 'react'

import { useMediaQuery } from 'react-responsive'
import ChoosePlanMobile from './ChoosePlanMobile'
import ChoosePlan from './ChoosePlan'

function Plans() {
    const isMobile = useMediaQuery({query:"(max-width:1024px)"})


  return (
    <>
    {
        isMobile ? <ChoosePlanMobile/> : <ChoosePlan/>

    }
    </>
  )
}

export default Plans
