import {EnableSidebar} from '../../../_metronic/layout/core'
import CBDC from "./cbdc"
import Sandbox from "./sandbox"
import Economy from './economy'

const VirtualEconomiesPage = () => (
  <>
    <Sandbox />
    {/*begin::Row*/}
    <div className='row gy-5 g-xl-10'>
      {/*begin::Col*/}
      <div className='col-xxl-6'>
        <Economy />
      </div>
      {/*end::Col*/}

      {/*begin::Col*/}
      <div className='col-xxl-6'>
        <CBDC />
      </div>
      {/*end::Col*/}
    </div>
  </>
)

const VirtualEconomiesWrapper = () => {
  return (
    <EnableSidebar>
      <VirtualEconomiesPage />
    </EnableSidebar>
  )
}

export {VirtualEconomiesWrapper}
