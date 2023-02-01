import React from "react";
import { Column } from "react-table"

interface Data {
  [key: string]: any;
}

export interface TableProps{
  columns: Column[]
  data: any;
  title?: string
  subtitle?: string
  className?: string
  loading?: boolean
  isLoading?: boolean
  pageSize?: number
}

export interface THeadProps {
  columns: Column[]
  data: Data[]
  setSortParams: React.Dispatch<React.SetStateAction<{ key: string[]; order: Array<"asc" | "desc"> }>>
  sortParams: { key: string[]; order: Array<"asc" | "desc"> }
}

export interface TBodyProps {
  columns: Column[]
  data: Data[]
  page?: number
  isPaging?: boolean
  perPage?: number
}