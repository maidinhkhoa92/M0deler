import {EnableSidebar} from '../../../_metronic/layout/core'
import Accounts from "./Accounts"
import Transactions from "./Transactions"

const SandboxPage = () => (
  <>
    <Transactions />
    <Accounts />
  </>
)

const SandboxWrapper = () => {
  return (
    <EnableSidebar>
      <SandboxPage />
    </EnableSidebar>
  )
}

export {SandboxWrapper}
