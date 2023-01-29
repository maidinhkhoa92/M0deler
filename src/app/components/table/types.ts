import { ReactNode } from "react";

interface Data {
  [key: string]: any;
}

export interface Column {
  className?: string
  field: string
  headerName: string
  width?: number | string
  renderCell?: ({ value, row }: { value: string; row: Data }) => ReactNode
  valueFormatter?: ({ value, row }: { value: string; row: Data }) => ReactNode
}

export interface TableProps {
  columns: Column[]
  title?: string
  subtitle?: string
  className?: string
  data: Data[]
  loading?: boolean
  isPaging?: boolean
  isLoading?: boolean
}

export interface THeadProps {
  columns: Column[]
  data: Data[]
}

export interface TBodyProps {
  columns: Column[]
  data: Data[]
  page?: number
  isPaging?: boolean
}