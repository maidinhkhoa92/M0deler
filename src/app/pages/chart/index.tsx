import {DisableSidebar} from '../../../_metronic/layout/core'
import Scatter from "./scatter"
import HistogramBalance from "./histogram-balance"
import HistogramTransaction from "./histogram-transaction"

const ChartPage = () => (
  <>
    <Scatter className='card-xxl-stretch mb-5 mb-xl-10' />
    <HistogramBalance className='card-xxl-stretch mb-5 mb-xl-10' />
    <HistogramTransaction className='card-xxl-stretch mb-5 mb-xl-10' />
  </>
)

const ChartWrapper = () => {
  return (
    <DisableSidebar>
      <ChartPage />
    </DisableSidebar>
  )
}

export {ChartWrapper}
