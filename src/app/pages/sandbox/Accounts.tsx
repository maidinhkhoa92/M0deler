import { useQuery } from 'react-query'
import {
  useParams
} from "react-router-dom";

import { Table } from "../../components"
import { getTransactions } from "./_request"

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    field: "Wallet",
    headerName: "Wallet"
  },
  {
    className: 'min-w-125px',
    field: "Initial Bal",
    headerName: "Initial Bal"
  },
  {
    className: 'min-w-125px',
    field: "Curr. Balance",
    headerName: "Curr. Balance"
  },
  {
    className: 'min-w-125px',
    field: "Tx Count",
    headerName: "Tx Count"
  },
]

const DataSandbox = [
  {
      "Wallet": 226720615515088239469468515563104722006,
      "Initial Bal": 1052.2239998113,
      "Curr. Balance": 833.3339998113,
      "Tx Count": 20
  },
  {
      "Wallet": 80706025563156327079736062094301438727,
      "Initial Bal": 1041.3269371899,
      "Curr. Balance": 201.4369371899,
      "Tx Count": 16
  },
  {
      "Wallet": 160035617603689914706166945381792983742,
      "Initial Bal": 1011.8894988655,
      "Curr. Balance": 755.3894988655,
      "Tx Count": 21
  },
  {
      "Wallet": 288216273856176114149731871956348835897,
      "Initial Bal": 994.3289149708,
      "Curr. Balance": 2149.1889149708,
      "Tx Count": 17
  },
  {
      "Wallet": 166483354676034017557794313031957773396,
      "Initial Bal": 1046.4587702375,
      "Curr. Balance": 861.0087702375,
      "Tx Count": 24
  },
  {
      "Wallet": 147367791988684620583848213326467100346,
      "Initial Bal": 1081.0348804511,
      "Curr. Balance": 838.9748804511,
      "Tx Count": 21
  },
  {
      "Wallet": 303544871593461457579777590176208677381,
      "Initial Bal": 1005.6458395249,
      "Curr. Balance": 1333.1358395249,
      "Tx Count": 21
  },
  {
      "Wallet": 223144967726983911583218468034273911770,
      "Initial Bal": 1016.035250351,
      "Curr. Balance": 826.455250351,
      "Tx Count": 25
  },
  {
      "Wallet": 232816564120614171464089447746318610987,
      "Initial Bal": 1030.5848002413,
      "Curr. Balance": 1073.2648002413,
      "Tx Count": 16
  },
  {
      "Wallet": 50846126905952340497654018388958657073,
      "Initial Bal": 957.244197314,
      "Curr. Balance": 1824.564197314,
      "Tx Count": 28
  },
  {
      "Wallet": 314452493511117765110845700095153332258,
      "Initial Bal": 950.1946253263,
      "Curr. Balance": 853.5746253263,
      "Tx Count": 13
  },
  {
      "Wallet": 186438449990681867121930803679878422458,
      "Initial Bal": 907.4560303222,
      "Curr. Balance": 1120.1360303222,
      "Tx Count": 28
  },
  {
      "Wallet": 245535342213729275239998713987230084667,
      "Initial Bal": 1002.4681044691,
      "Curr. Balance": 1433.8881044691,
      "Tx Count": 10
  },
  {
      "Wallet": 5025033175169248025091893187434895488,
      "Initial Bal": 983.6570349588,
      "Curr. Balance": 1448.2670349588,
      "Tx Count": 20
  },
  {
      "Wallet": 250401791363201072207836053927882246073,
      "Initial Bal": 997.2998828584,
      "Curr. Balance": 746.5398828584,
      "Tx Count": 18
  },
  {
      "Wallet": 221155681958075245445621290624562526184,
      "Initial Bal": 925.5755498784,
      "Curr. Balance": 1198.3555498784,
      "Tx Count": 17
  },
  {
      "Wallet": 279904926115413462704809865380535004514,
      "Initial Bal": 999.4937942132,
      "Curr. Balance": 304.2837942132,
      "Tx Count": 21
  },
  {
      "Wallet": 222050239411277369707960524236458279394,
      "Initial Bal": 1065.4658365275,
      "Curr. Balance": 616.3758365275,
      "Tx Count": 18
  },
  {
      "Wallet": 103904682975344445886280825183663062011,
      "Initial Bal": 1086.5713473286,
      "Curr. Balance": 596.1613473286,
      "Tx Count": 27
  },
  {
      "Wallet": 180052916974934342708858754475535363199,
      "Initial Bal": 1010.0463421073,
      "Curr. Balance": 1150.6663421073,
      "Tx Count": 19
  }
]

const Accounts = () => {
  const { id } = useParams();
  const {
    isLoading,
    data,
    error,
  } = useQuery(
    [`Transactions`, id],
    () => getTransactions(id || "")
  )

  console.log("Transactions", isLoading, data, error)

  return (
    <Table className='mb-5 mb-xl-10' title="Accounts" columns={ColumnsSandbox} data={DataSandbox} />
  )
}

export default Accounts
