import { useQuery } from 'react-query'
import {
  useParams
} from "react-router-dom";

import { Table } from "../../components"
import { getTransactions } from "./_request"

const ColumnsSandbox = [
  {
    className: 'ps-4 min-w-125px rounded-start',
    field: "Timestamp",
    headerName: "Timestamp"
  },
  {
    className: 'min-w-125px',
    field: "Sender",
    headerName: "Sender"
  },
  {
    className: 'min-w-125px',
    field: "Receiver",
    headerName: "Receiver"
  },
  {
    className: 'min-w-125px',
    field: "Initial Bal",
    headerName: "Initial Bal"
  },
  {
    className: 'min-w-125px',
    field: "Amount",
    headerName: "Amount"
  },
  {
    className: 'min-w-125px',
    field: "Ending Bal",
    headerName: "Ending Bal"
  },
  {
    className: 'min-w-125px',
    field: "Tx Count",
    headerName: "Initial Bal SD"
  },
]

const DataSandbox = [
  {
      "Timestamp": 1674777600000,
      "Sender": "25040",
      "Receiver": "16648",
      "Initial Bal": 997.2998828584,
      "Amount": 102.21,
      "Ending Bal": 895.0898828584,
      "Tx Count": 1
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "50846",
      "Initial Bal": 1016.035250351,
      "Amount": 108.94,
      "Ending Bal": 907.095250351,
      "Tx Count": 1
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "18643",
      "Initial Bal": 1086.5713473286,
      "Amount": 97.1,
      "Ending Bal": 989.4713473286,
      "Tx Count": 1
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "14736",
      "Initial Bal": 1011.8894988655,
      "Amount": 87.39,
      "Ending Bal": 924.4994988655,
      "Tx Count": 1
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18005",
      "Receiver": "24553",
      "Initial Bal": 1010.0463421073,
      "Amount": 91.6,
      "Ending Bal": 918.4463421073,
      "Tx Count": 1
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "25040",
      "Receiver": "16003",
      "Initial Bal": 895.0898828584,
      "Amount": 119.86,
      "Ending Bal": 775.2298828584,
      "Tx Count": 2
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "50250",
      "Initial Bal": 907.095250351,
      "Amount": 110.51,
      "Ending Bal": 796.585250351,
      "Tx Count": 2
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18005",
      "Receiver": "22205",
      "Initial Bal": 918.4463421073,
      "Amount": 89.29,
      "Ending Bal": 829.1563421073,
      "Tx Count": 2
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "16648",
      "Initial Bal": 999.4937942132,
      "Amount": 89.51,
      "Ending Bal": 909.9837942132,
      "Tx Count": 1
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18005",
      "Receiver": "28821",
      "Initial Bal": 829.1563421073,
      "Amount": 114.09,
      "Ending Bal": 715.0663421073,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22672",
      "Receiver": "22672",
      "Initial Bal": 1052.2239998113,
      "Amount": 101.36,
      "Ending Bal": 1052.2239998113,
      "Tx Count": 2
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "25040",
      "Initial Bal": 989.4713473286,
      "Amount": 98.56,
      "Ending Bal": 890.9113473286,
      "Tx Count": 2
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "18643",
      "Initial Bal": 1044.3594988655,
      "Amount": 99.19,
      "Ending Bal": 945.1694988655,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50250",
      "Receiver": "50846",
      "Initial Bal": 1094.1670349588,
      "Amount": 84.14,
      "Ending Bal": 1010.0270349588,
      "Tx Count": 2
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "23281",
      "Receiver": "30354",
      "Initial Bal": 1030.5848002413,
      "Amount": 76.27,
      "Ending Bal": 954.3148002413,
      "Tx Count": 1
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "31445",
      "Receiver": "10390",
      "Initial Bal": 950.1946253263,
      "Amount": 87.59,
      "Ending Bal": 862.6046253263,
      "Tx Count": 1
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50250",
      "Receiver": "30354",
      "Initial Bal": 1010.0270349588,
      "Amount": 104.89,
      "Ending Bal": 905.1370349588,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18005",
      "Receiver": "23281",
      "Initial Bal": 715.0663421073,
      "Amount": 87.12,
      "Ending Bal": 627.9463421073,
      "Tx Count": 4
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "18005",
      "Initial Bal": 1238.1787702375,
      "Amount": 112.88,
      "Ending Bal": 1125.2987702375,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "50250",
      "Initial Bal": 1103.7460303222,
      "Amount": 98.86,
      "Ending Bal": 1004.8860303222,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22205",
      "Receiver": "27990",
      "Initial Bal": 1154.7558365275,
      "Amount": 114.96,
      "Ending Bal": 1039.7958365275,
      "Tx Count": 2
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "10390",
      "Initial Bal": 796.585250351,
      "Amount": 99.53,
      "Ending Bal": 697.055250351,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50250",
      "Receiver": "25040",
      "Initial Bal": 1003.9970349588,
      "Amount": 104.45,
      "Ending Bal": 899.5470349588,
      "Tx Count": 5
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "10390",
      "Initial Bal": 1004.8860303222,
      "Amount": 116.1,
      "Ending Bal": 888.7860303222,
      "Tx Count": 4
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22115",
      "Receiver": "16003",
      "Initial Bal": 925.5755498784,
      "Amount": 113.13,
      "Ending Bal": 812.4455498784,
      "Tx Count": 1
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "23281",
      "Receiver": "14736",
      "Initial Bal": 1041.4348002413,
      "Amount": 97.12,
      "Ending Bal": 944.3148002413,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "31445",
      "Receiver": "10390",
      "Initial Bal": 862.6046253263,
      "Amount": 107.65,
      "Ending Bal": 754.9546253263,
      "Tx Count": 2
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50250",
      "Receiver": "16003",
      "Initial Bal": 899.5470349588,
      "Amount": 85.22,
      "Ending Bal": 814.3270349588,
      "Tx Count": 6
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22115",
      "Receiver": "50846",
      "Initial Bal": 812.4455498784,
      "Amount": 116.31,
      "Ending Bal": 696.1355498784,
      "Tx Count": 2
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "22115",
      "Initial Bal": 1041.3269371899,
      "Amount": 119.72,
      "Ending Bal": 921.6069371899,
      "Tx Count": 1
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50846",
      "Receiver": "27990",
      "Initial Bal": 1266.634197314,
      "Amount": 92.9,
      "Ending Bal": 1173.734197314,
      "Tx Count": 4
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "50250",
      "Initial Bal": 1117.8437942132,
      "Amount": 106.14,
      "Ending Bal": 1011.7037942132,
      "Tx Count": 4
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "31445",
      "Receiver": "24553",
      "Initial Bal": 754.9546253263,
      "Amount": 95.76,
      "Ending Bal": 659.1946253263,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "31445",
      "Initial Bal": 888.7860303222,
      "Amount": 94.03,
      "Ending Bal": 794.7560303222,
      "Tx Count": 5
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "18643",
      "Initial Bal": 697.055250351,
      "Amount": 117.14,
      "Ending Bal": 579.915250351,
      "Tx Count": 4
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "30354",
      "Receiver": "28821",
      "Initial Bal": 1186.8058395249,
      "Amount": 96.46,
      "Ending Bal": 1090.3458395249,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50250",
      "Receiver": "22314",
      "Initial Bal": 920.4670349588,
      "Amount": 99.63,
      "Ending Bal": 820.8370349588,
      "Tx Count": 8
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "30354",
      "Initial Bal": 1265.5448804511,
      "Amount": 101.78,
      "Ending Bal": 1163.7648804511,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "24553",
      "Initial Bal": 679.545250351,
      "Amount": 96.63,
      "Ending Bal": 582.915250351,
      "Tx Count": 6
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "22115",
      "Initial Bal": 1143.5194988655,
      "Amount": 90.13,
      "Ending Bal": 1053.3894988655,
      "Tx Count": 6
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "10390",
      "Initial Bal": 1163.7648804511,
      "Amount": 104.85,
      "Ending Bal": 1058.9148804511,
      "Tx Count": 4
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "27990",
      "Initial Bal": 1406.6313473286,
      "Amount": 95.17,
      "Ending Bal": 1311.4613473286,
      "Tx Count": 8
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "16003",
      "Initial Bal": 1125.2987702375,
      "Amount": 94.0,
      "Ending Bal": 1031.2987702375,
      "Tx Count": 4
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22205",
      "Receiver": "18643",
      "Initial Bal": 1039.7958365275,
      "Amount": 102.66,
      "Ending Bal": 937.1358365275,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22672",
      "Receiver": "18643",
      "Initial Bal": 1052.2239998113,
      "Amount": 102.9,
      "Ending Bal": 949.3239998113,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "10390",
      "Initial Bal": 582.915250351,
      "Amount": 92.69,
      "Ending Bal": 490.225250351,
      "Tx Count": 7
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "23281",
      "Receiver": "50846",
      "Initial Bal": 944.3148002413,
      "Amount": 83.65,
      "Ending Bal": 860.6648002413,
      "Tx Count": 4
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18005",
      "Receiver": "22672",
      "Initial Bal": 740.8263421073,
      "Amount": 89.87,
      "Ending Bal": 650.9563421073,
      "Tx Count": 6
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "24553",
      "Receiver": "50846",
      "Initial Bal": 1286.4581044691,
      "Amount": 101.22,
      "Ending Bal": 1185.2381044691,
      "Tx Count": 4
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "28821",
      "Initial Bal": 921.6069371899,
      "Amount": 101.36,
      "Ending Bal": 820.2469371899,
      "Tx Count": 2
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "18005",
      "Initial Bal": 820.2469371899,
      "Amount": 97.3,
      "Ending Bal": 722.9469371899,
      "Tx Count": 3
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22672",
      "Receiver": "50846",
      "Initial Bal": 1039.1939998113,
      "Amount": 104.25,
      "Ending Bal": 934.9439998113,
      "Tx Count": 5
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "50846",
      "Initial Bal": 1058.9148804511,
      "Amount": 89.31,
      "Ending Bal": 969.6048804511,
      "Tx Count": 5
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "50846",
      "Initial Bal": 1031.2987702375,
      "Amount": 107.66,
      "Ending Bal": 923.6387702375,
      "Tx Count": 5
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "22672",
      "Initial Bal": 1404.1513473286,
      "Amount": 105.1,
      "Ending Bal": 1299.0513473286,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "25040",
      "Receiver": "28821",
      "Initial Bal": 978.2398828584,
      "Amount": 96.55,
      "Ending Bal": 881.6898828584,
      "Tx Count": 5
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "30354",
      "Initial Bal": 1299.0513473286,
      "Amount": 87.2,
      "Ending Bal": 1211.8513473286,
      "Tx Count": 11
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "25040",
      "Initial Bal": 1106.8737942132,
      "Amount": 90.96,
      "Ending Bal": 1015.9137942132,
      "Tx Count": 6
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22205",
      "Receiver": "16648",
      "Initial Bal": 937.1358365275,
      "Amount": 109.97,
      "Ending Bal": 827.1658365275,
      "Tx Count": 4
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22672",
      "Receiver": "22115",
      "Initial Bal": 1040.0439998113,
      "Amount": 108.89,
      "Ending Bal": 931.1539998113,
      "Tx Count": 7
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "50846",
      "Initial Bal": 1211.8513473286,
      "Amount": 98.8,
      "Ending Bal": 1113.0513473286,
      "Tx Count": 12
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "18005",
      "Initial Bal": 1117.4560303222,
      "Amount": 96.85,
      "Ending Bal": 1020.6060303222,
      "Tx Count": 9
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "25040",
      "Receiver": "80706",
      "Initial Bal": 972.6498828584,
      "Amount": 103.29,
      "Ending Bal": 869.3598828584,
      "Tx Count": 7
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22205",
      "Receiver": "14736",
      "Initial Bal": 827.1658365275,
      "Amount": 116.96,
      "Ending Bal": 710.2058365275,
      "Tx Count": 5
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "25040",
      "Receiver": "27990",
      "Initial Bal": 869.3598828584,
      "Amount": 112.24,
      "Ending Bal": 757.1198828584,
      "Tx Count": 8
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "30354",
      "Initial Bal": 1128.1537942132,
      "Amount": 80.89,
      "Ending Bal": 1047.2637942132,
      "Tx Count": 8
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "14736",
      "Initial Bal": 1086.5648804511,
      "Amount": 80.88,
      "Ending Bal": 1086.5648804511,
      "Tx Count": 8
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "31445",
      "Receiver": "23281",
      "Initial Bal": 753.2246253263,
      "Amount": 104.71,
      "Ending Bal": 648.5146253263,
      "Tx Count": 5
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "22672",
      "Initial Bal": 1033.6087702375,
      "Amount": 88.06,
      "Ending Bal": 945.5487702375,
      "Tx Count": 7
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "18005",
      "Initial Bal": 945.5487702375,
      "Amount": 95.08,
      "Ending Bal": 850.4687702375,
      "Tx Count": 8
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "28821",
      "Initial Bal": 1020.6060303222,
      "Amount": 77.9,
      "Ending Bal": 942.7060303222,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "10390",
      "Initial Bal": 1113.0513473286,
      "Amount": 98.25,
      "Ending Bal": 1113.0513473286,
      "Tx Count": 14
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50846",
      "Receiver": "22314",
      "Initial Bal": 1758.624197314,
      "Amount": 104.31,
      "Ending Bal": 1654.314197314,
      "Tx Count": 11
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22205",
      "Receiver": "31445",
      "Initial Bal": 710.2058365275,
      "Amount": 104.11,
      "Ending Bal": 606.0958365275,
      "Tx Count": 6
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "28821",
      "Initial Bal": 1086.5648804511,
      "Amount": 108.38,
      "Ending Bal": 978.1848804511,
      "Tx Count": 9
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "23281",
      "Receiver": "22672",
      "Initial Bal": 965.3748002413,
      "Amount": 105.7,
      "Ending Bal": 859.6748002413,
      "Tx Count": 6
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "24553",
      "Receiver": "50846",
      "Initial Bal": 1185.2381044691,
      "Amount": 91.37,
      "Ending Bal": 1093.8681044691,
      "Tx Count": 5
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "18643",
      "Initial Bal": 942.7060303222,
      "Amount": 103.64,
      "Ending Bal": 942.7060303222,
      "Tx Count": 12
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "30354",
      "Receiver": "22672",
      "Initial Bal": 1360.2158395249,
      "Amount": 86.9,
      "Ending Bal": 1273.3158395249,
      "Tx Count": 7
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50250",
      "Receiver": "50250",
      "Initial Bal": 820.8370349588,
      "Amount": 120.8,
      "Ending Bal": 820.8370349588,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "23281",
      "Receiver": "30354",
      "Initial Bal": 859.6748002413,
      "Amount": 106.62,
      "Ending Bal": 753.0548002413,
      "Tx Count": 7
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "50846",
      "Initial Bal": 1147.3894988655,
      "Amount": 114.0,
      "Ending Bal": 1033.3894988655,
      "Tx Count": 8
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22672",
      "Receiver": "22314",
      "Initial Bal": 1211.8139998113,
      "Amount": 108.85,
      "Ending Bal": 1102.9639998113,
      "Tx Count": 11
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "50846",
      "Initial Bal": 1113.0513473286,
      "Amount": 93.57,
      "Ending Bal": 1019.4813473286,
      "Tx Count": 15
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "30354",
      "Receiver": "31445",
      "Initial Bal": 1379.9358395249,
      "Amount": 107.21,
      "Ending Bal": 1272.7258395249,
      "Tx Count": 9
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "25040",
      "Receiver": "18643",
      "Initial Bal": 757.1198828584,
      "Amount": 90.84,
      "Ending Bal": 666.2798828584,
      "Tx Count": 9
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "22314",
      "Initial Bal": 850.4687702375,
      "Amount": 109.23,
      "Ending Bal": 741.2387702375,
      "Tx Count": 9
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "22115",
      "Initial Bal": 978.1848804511,
      "Amount": 115.78,
      "Ending Bal": 862.4048804511,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "22314",
      "Initial Bal": 1047.2637942132,
      "Amount": 81.07,
      "Ending Bal": 966.1937942132,
      "Tx Count": 9
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "25040",
      "Receiver": "24553",
      "Initial Bal": 666.2798828584,
      "Amount": 120.53,
      "Ending Bal": 545.7498828584,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50846",
      "Receiver": "80706",
      "Initial Bal": 1953.254197314,
      "Amount": 100.54,
      "Ending Bal": 1852.714197314,
      "Tx Count": 15
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50846",
      "Receiver": "22672",
      "Initial Bal": 1852.714197314,
      "Amount": 122.08,
      "Ending Bal": 1730.634197314,
      "Tx Count": 16
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "25040",
      "Initial Bal": 741.2387702375,
      "Amount": 100.33,
      "Ending Bal": 640.9087702375,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "18005",
      "Initial Bal": 1033.5460303222,
      "Amount": 106.75,
      "Ending Bal": 926.7960303222,
      "Tx Count": 14
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "16003",
      "Initial Bal": 926.7769371899,
      "Amount": 115.84,
      "Ending Bal": 810.9369371899,
      "Tx Count": 6
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "31445",
      "Initial Bal": 810.9369371899,
      "Amount": 111.43,
      "Ending Bal": 699.5069371899,
      "Tx Count": 7
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "18005",
      "Initial Bal": 640.9087702375,
      "Amount": 101.78,
      "Ending Bal": 539.1287702375,
      "Tx Count": 11
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18005",
      "Receiver": "28821",
      "Initial Bal": 1148.7163421073,
      "Amount": 107.69,
      "Ending Bal": 1041.0263421073,
      "Tx Count": 12
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "30354",
      "Receiver": "28821",
      "Initial Bal": 1272.7258395249,
      "Amount": 112.76,
      "Ending Bal": 1159.9658395249,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "25040",
      "Receiver": "31445",
      "Initial Bal": 646.0798828584,
      "Amount": 109.65,
      "Ending Bal": 536.4298828584,
      "Tx Count": 12
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "31445",
      "Receiver": "16648",
      "Initial Bal": 1080.9146253263,
      "Amount": 108.13,
      "Ending Bal": 972.7846253263,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "16648",
      "Initial Bal": 893.685250351,
      "Amount": 123.79,
      "Ending Bal": 769.895250351,
      "Tx Count": 12
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22205",
      "Receiver": "22115",
      "Initial Bal": 606.0958365275,
      "Amount": 90.59,
      "Ending Bal": 515.5058365275,
      "Tx Count": 7
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22205",
      "Receiver": "10390",
      "Initial Bal": 515.5058365275,
      "Amount": 89.56,
      "Ending Bal": 425.9458365275,
      "Tx Count": 8
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "18005",
      "Initial Bal": 1149.2294988655,
      "Amount": 98.89,
      "Ending Bal": 1050.3394988655,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22205",
      "Receiver": "50250",
      "Initial Bal": 425.9458365275,
      "Amount": 97.77,
      "Ending Bal": 328.1758365275,
      "Tx Count": 9
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "28821",
      "Initial Bal": 862.4048804511,
      "Amount": 95.67,
      "Ending Bal": 766.7348804511,
      "Tx Count": 11
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "25040",
      "Receiver": "28821",
      "Initial Bal": 536.4298828584,
      "Amount": 115.51,
      "Ending Bal": 420.9198828584,
      "Tx Count": 13
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "23281",
      "Receiver": "30354",
      "Initial Bal": 753.0548002413,
      "Amount": 98.5,
      "Ending Bal": 654.5548002413,
      "Tx Count": 8
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22205",
      "Receiver": "50846",
      "Initial Bal": 328.1758365275,
      "Amount": 85.46,
      "Ending Bal": 242.7158365275,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18005",
      "Receiver": "16648",
      "Initial Bal": 1139.9163421073,
      "Amount": 108.58,
      "Ending Bal": 1031.3363421073,
      "Tx Count": 14
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "30354",
      "Initial Bal": 926.7960303222,
      "Amount": 103.87,
      "Ending Bal": 822.9260303222,
      "Tx Count": 15
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "18643",
      "Initial Bal": 1109.0413473286,
      "Amount": 113.53,
      "Ending Bal": 995.5113473286,
      "Tx Count": 17
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "23281",
      "Receiver": "16003",
      "Initial Bal": 654.5548002413,
      "Amount": 104.18,
      "Ending Bal": 550.3748002413,
      "Tx Count": 9
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "16648",
      "Initial Bal": 995.5113473286,
      "Amount": 110.92,
      "Ending Bal": 884.5913473286,
      "Tx Count": 18
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "22672",
      "Initial Bal": 769.895250351,
      "Amount": 116.54,
      "Ending Bal": 653.355250351,
      "Tx Count": 13
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50846",
      "Receiver": "28821",
      "Initial Bal": 1816.094197314,
      "Amount": 93.07,
      "Ending Bal": 1723.024197314,
      "Tx Count": 18
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "22314",
      "Initial Bal": 699.5069371899,
      "Amount": 106.31,
      "Ending Bal": 593.1969371899,
      "Tx Count": 8
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "10390",
      "Initial Bal": 1154.5194988655,
      "Amount": 97.39,
      "Ending Bal": 1057.1294988655,
      "Tx Count": 12
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "18005",
      "Initial Bal": 966.1937942132,
      "Amount": 108.74,
      "Ending Bal": 857.4537942132,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "30354",
      "Receiver": "50846",
      "Initial Bal": 1362.3358395249,
      "Amount": 86.49,
      "Ending Bal": 1275.8458395249,
      "Tx Count": 13
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "22205",
      "Initial Bal": 593.1969371899,
      "Amount": 87.99,
      "Ending Bal": 505.2069371899,
      "Tx Count": 9
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "16648",
      "Initial Bal": 936.4560303222,
      "Amount": 106.52,
      "Ending Bal": 829.9360303222,
      "Tx Count": 17
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "24553",
      "Initial Bal": 1097.0687702375,
      "Amount": 106.55,
      "Ending Bal": 990.5187702375,
      "Tx Count": 17
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50846",
      "Receiver": "28821",
      "Initial Bal": 1809.514197314,
      "Amount": 113.37,
      "Ending Bal": 1696.144197314,
      "Tx Count": 20
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "28821",
      "Receiver": "50846",
      "Initial Bal": 2227.1389149708,
      "Amount": 92.48,
      "Ending Bal": 2134.6589149708,
      "Tx Count": 13
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "50250",
      "Initial Bal": 505.2069371899,
      "Amount": 89.95,
      "Ending Bal": 415.2569371899,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50846",
      "Receiver": "18643",
      "Initial Bal": 1788.624197314,
      "Amount": 101.85,
      "Ending Bal": 1686.774197314,
      "Tx Count": 22
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22115",
      "Receiver": "18643",
      "Initial Bal": 1221.2455498784,
      "Amount": 84.87,
      "Ending Bal": 1136.3755498784,
      "Tx Count": 8
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "16648",
      "Initial Bal": 857.4537942132,
      "Amount": 100.39,
      "Ending Bal": 757.0637942132,
      "Tx Count": 11
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "18643",
      "Initial Bal": 757.0637942132,
      "Amount": 107.45,
      "Ending Bal": 649.6137942132,
      "Tx Count": 12
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18005",
      "Receiver": "31445",
      "Initial Bal": 1140.0763421073,
      "Amount": 104.12,
      "Ending Bal": 1035.9563421073,
      "Tx Count": 16
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "31445",
      "Receiver": "14736",
      "Initial Bal": 1076.9046253263,
      "Amount": 111.91,
      "Ending Bal": 964.9946253263,
      "Tx Count": 12
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "22205",
      "Initial Bal": 415.2569371899,
      "Amount": 111.31,
      "Ending Bal": 303.9469371899,
      "Tx Count": 11
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "18005",
      "Initial Bal": 1090.9087702375,
      "Amount": 105.93,
      "Ending Bal": 984.9787702375,
      "Tx Count": 19
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "25040",
      "Receiver": "50846",
      "Initial Bal": 420.9198828584,
      "Amount": 73.88,
      "Ending Bal": 347.0398828584,
      "Tx Count": 14
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22115",
      "Receiver": "16003",
      "Initial Bal": 1136.3755498784,
      "Amount": 105.68,
      "Ending Bal": 1030.6955498784,
      "Tx Count": 9
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "30354",
      "Receiver": "27990",
      "Initial Bal": 1275.8458395249,
      "Amount": 108.41,
      "Ending Bal": 1167.4358395249,
      "Tx Count": 14
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "28821",
      "Receiver": "22672",
      "Initial Bal": 2134.6589149708,
      "Amount": 106.34,
      "Ending Bal": 2028.3189149708,
      "Tx Count": 14
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22115",
      "Receiver": "80706",
      "Initial Bal": 1030.6955498784,
      "Amount": 111.78,
      "Ending Bal": 918.9155498784,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50250",
      "Receiver": "10390",
      "Initial Bal": 1008.5570349588,
      "Amount": 84.76,
      "Ending Bal": 923.7970349588,
      "Tx Count": 13
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "22205",
      "Initial Bal": 1162.8094988655,
      "Amount": 113.36,
      "Ending Bal": 1049.4494988655,
      "Tx Count": 14
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "31445",
      "Receiver": "24553",
      "Initial Bal": 964.9946253263,
      "Amount": 111.42,
      "Ending Bal": 853.5746253263,
      "Tx Count": 13
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50250",
      "Receiver": "22205",
      "Initial Bal": 923.7970349588,
      "Amount": 88.7,
      "Ending Bal": 835.0970349588,
      "Tx Count": 14
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22115",
      "Receiver": "22314",
      "Initial Bal": 918.9155498784,
      "Amount": 93.59,
      "Ending Bal": 825.3255498784,
      "Tx Count": 11
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18005",
      "Receiver": "50250",
      "Initial Bal": 1141.8863421073,
      "Amount": 103.11,
      "Ending Bal": 1038.7763421073,
      "Tx Count": 18
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "22115",
      "Initial Bal": 1066.7413473286,
      "Amount": 87.17,
      "Ending Bal": 979.5713473286,
      "Tx Count": 21
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "30354",
      "Initial Bal": 1124.1060303222,
      "Amount": 102.82,
      "Ending Bal": 1021.2860303222,
      "Tx Count": 21
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "18643",
      "Initial Bal": 984.9787702375,
      "Amount": 124.57,
      "Ending Bal": 860.4087702375,
      "Tx Count": 20
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "14736",
      "Initial Bal": 1145.8560303222,
      "Amount": 100.13,
      "Ending Bal": 1045.7260303222,
      "Tx Count": 23
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "23281",
      "Initial Bal": 758.0237942132,
      "Amount": 123.63,
      "Ending Bal": 634.3937942132,
      "Tx Count": 14
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "22314",
      "Initial Bal": 978.7748804511,
      "Amount": 84.76,
      "Ending Bal": 894.0148804511,
      "Tx Count": 14
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22205",
      "Receiver": "50846",
      "Initial Bal": 644.0758365275,
      "Amount": 88.99,
      "Ending Bal": 555.0858365275,
      "Tx Count": 15
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "16648",
      "Initial Bal": 415.7269371899,
      "Amount": 101.79,
      "Ending Bal": 313.9369371899,
      "Tx Count": 13
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "23281",
      "Receiver": "22115",
      "Initial Bal": 674.0048002413,
      "Amount": 98.55,
      "Ending Bal": 575.4548002413,
      "Tx Count": 11
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "14736",
      "Initial Bal": 979.5713473286,
      "Amount": 104.52,
      "Ending Bal": 875.0513473286,
      "Tx Count": 22
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "16648",
      "Initial Bal": 938.015250351,
      "Amount": 99.84,
      "Ending Bal": 838.175250351,
      "Tx Count": 17
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "25040",
      "Initial Bal": 875.0513473286,
      "Amount": 100.66,
      "Ending Bal": 774.3913473286,
      "Tx Count": 23
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22672",
      "Receiver": "50846",
      "Initial Bal": 1447.9239998113,
      "Amount": 105.87,
      "Ending Bal": 1342.0539998113,
      "Tx Count": 15
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "22115",
      "Initial Bal": 998.5348804511,
      "Amount": 95.86,
      "Ending Bal": 902.6748804511,
      "Tx Count": 16
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "28821",
      "Receiver": "28821",
      "Initial Bal": 2028.3189149708,
      "Amount": 112.32,
      "Ending Bal": 2028.3189149708,
      "Tx Count": 16
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "30354",
      "Receiver": "22314",
      "Initial Bal": 1270.2558395249,
      "Amount": 103.15,
      "Ending Bal": 1167.1058395249,
      "Tx Count": 16
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22672",
      "Receiver": "50846",
      "Initial Bal": 1342.0539998113,
      "Amount": 82.65,
      "Ending Bal": 1259.4039998113,
      "Tx Count": 16
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22205",
      "Receiver": "50250",
      "Initial Bal": 555.0858365275,
      "Amount": 100.24,
      "Ending Bal": 454.8458365275,
      "Tx Count": 16
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22115",
      "Receiver": "18643",
      "Initial Bal": 1106.9055498784,
      "Amount": 95.41,
      "Ending Bal": 1011.4955498784,
      "Tx Count": 15
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "24553",
      "Initial Bal": 1049.4494988655,
      "Amount": 102.61,
      "Ending Bal": 946.8394988655,
      "Tx Count": 15
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "27990",
      "Initial Bal": 902.6748804511,
      "Amount": 86.77,
      "Ending Bal": 815.9048804511,
      "Tx Count": 17
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22672",
      "Receiver": "28821",
      "Initial Bal": 1259.4039998113,
      "Amount": 120.87,
      "Ending Bal": 1138.5339998113,
      "Tx Count": 17
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "22115",
      "Initial Bal": 815.9048804511,
      "Amount": 95.27,
      "Ending Bal": 720.6348804511,
      "Tx Count": 18
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "50250",
      "Initial Bal": 721.1637942132,
      "Amount": 100.97,
      "Ending Bal": 620.1937942132,
      "Tx Count": 16
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50846",
      "Receiver": "50250",
      "Initial Bal": 2038.164197314,
      "Amount": 102.99,
      "Ending Bal": 1935.174197314,
      "Tx Count": 27
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "23281",
      "Initial Bal": 620.1937942132,
      "Amount": 94.72,
      "Ending Bal": 525.4737942132,
      "Tx Count": 17
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "14736",
      "Initial Bal": 941.325250351,
      "Amount": 95.29,
      "Ending Bal": 846.035250351,
      "Tx Count": 19
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "18005",
      "Initial Bal": 525.4737942132,
      "Amount": 111.89,
      "Ending Bal": 413.5837942132,
      "Tx Count": 18
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "30354",
      "Receiver": "22205",
      "Initial Bal": 1167.1058395249,
      "Amount": 76.4,
      "Ending Bal": 1090.7058395249,
      "Tx Count": 17
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "14736",
      "Receiver": "22205",
      "Initial Bal": 815.9248804511,
      "Amount": 85.13,
      "Ending Bal": 730.7948804511,
      "Tx Count": 20
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "18643",
      "Initial Bal": 846.035250351,
      "Amount": 94.37,
      "Ending Bal": 751.665250351,
      "Tx Count": 20
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "25040",
      "Initial Bal": 774.3913473286,
      "Amount": 94.05,
      "Ending Bal": 680.3413473286,
      "Tx Count": 24
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22672",
      "Receiver": "27990",
      "Initial Bal": 1138.5339998113,
      "Amount": 100.16,
      "Ending Bal": 1038.3739998113,
      "Tx Count": 18
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "30354",
      "Initial Bal": 313.9369371899,
      "Amount": 114.38,
      "Ending Bal": 199.5569371899,
      "Tx Count": 14
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "50250",
      "Initial Bal": 680.3413473286,
      "Amount": 104.58,
      "Ending Bal": 575.7613473286,
      "Tx Count": 25
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "10390",
      "Receiver": "16003",
      "Initial Bal": 575.7613473286,
      "Amount": 84.77,
      "Ending Bal": 490.9913473286,
      "Tx Count": 26
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "50250",
      "Initial Bal": 513.7437942132,
      "Amount": 101.28,
      "Ending Bal": 412.4637942132,
      "Tx Count": 20
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "50846",
      "Receiver": "16003",
      "Initial Bal": 1935.174197314,
      "Amount": 110.61,
      "Ending Bal": 1824.564197314,
      "Tx Count": 28
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "80706",
      "Receiver": "22115",
      "Initial Bal": 199.5569371899,
      "Amount": 91.59,
      "Ending Bal": 107.9669371899,
      "Tx Count": 15
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "22314",
      "Initial Bal": 1142.2194988655,
      "Amount": 76.21,
      "Ending Bal": 1066.0094988655,
      "Tx Count": 18
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "10390",
      "Initial Bal": 827.875250351,
      "Amount": 105.17,
      "Ending Bal": 722.705250351,
      "Tx Count": 22
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22672",
      "Receiver": "80706",
      "Initial Bal": 1038.3739998113,
      "Amount": 93.47,
      "Ending Bal": 944.9039998113,
      "Tx Count": 19
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "24553",
      "Receiver": "22314",
      "Initial Bal": 1534.9781044691,
      "Amount": 101.09,
      "Ending Bal": 1433.8881044691,
      "Tx Count": 10
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "18643",
      "Initial Bal": 1235.5060303222,
      "Amount": 84.44,
      "Ending Bal": 1235.5060303222,
      "Tx Count": 27
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22672",
      "Receiver": "23281",
      "Initial Bal": 944.9039998113,
      "Amount": 111.57,
      "Ending Bal": 833.3339998113,
      "Tx Count": 20
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "27990",
      "Receiver": "14736",
      "Initial Bal": 412.4637942132,
      "Amount": 108.18,
      "Ending Bal": 304.2837942132,
      "Tx Count": 21
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "23281",
      "Initial Bal": 1066.0094988655,
      "Amount": 97.63,
      "Ending Bal": 968.3794988655,
      "Tx Count": 19
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "30354",
      "Receiver": "23281",
      "Initial Bal": 1205.0858395249,
      "Amount": 97.62,
      "Ending Bal": 1107.4658395249,
      "Tx Count": 19
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "22314",
      "Initial Bal": 1062.0387702375,
      "Amount": 104.76,
      "Ending Bal": 957.2787702375,
      "Tx Count": 23
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "30354",
      "Initial Bal": 968.3794988655,
      "Amount": 110.3,
      "Ending Bal": 858.0794988655,
      "Tx Count": 20
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16003",
      "Receiver": "25040",
      "Initial Bal": 858.0794988655,
      "Amount": 102.69,
      "Ending Bal": 755.3894988655,
      "Tx Count": 21
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "22314",
      "Receiver": "25040",
      "Initial Bal": 928.555250351,
      "Amount": 102.1,
      "Ending Bal": 826.455250351,
      "Tx Count": 25
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "18643",
      "Receiver": "30354",
      "Initial Bal": 1235.5060303222,
      "Amount": 115.37,
      "Ending Bal": 1120.1360303222,
      "Tx Count": 28
  },
  {
      "Timestamp": 1674777600000,
      "Sender": "16648",
      "Receiver": "23281",
      "Initial Bal": 957.2787702375,
      "Amount": 96.27,
      "Ending Bal": 861.0087702375,
      "Tx Count": 24
  }
]

const Transactions = () => {
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
    <Table className='mb-5 mb-xl-10' title="Transactions" columns={ColumnsSandbox} data={DataSandbox} isPaging/>
  )
}

export default Transactions
