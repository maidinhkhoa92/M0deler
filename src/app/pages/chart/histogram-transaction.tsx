/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useMemo, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import { useQuery } from 'react-query'
import {
  useParams
} from "react-router-dom";
import {map} from "lodash"

import { getTransactions } from "../../modules/transactions/_request"
import {getCSS, getCSSVariableValue} from '../../../_metronic/assets/ts/_utils'
import {useThemeMode} from '../../../_metronic/partials/layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
}

const Histograms: React.FC<Props> = ({className}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()

  const { id } = useParams();

  const {
    isLoading,
    data,
  } = useQuery(
    [`Transactions`, id],
    () => getTransactions(id || "")
  )

  useEffect(() => {
    const chart = refreshChart()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, mode, data])

  const xData = useMemo(() => map(data || [], (el) => String(el.Sender)), [data])
  const yData = useMemo(() => map(data || [], (el) => el.Amount), [data])

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const height = parseInt(getCSS(chartRef.current, 'height'))

    const chart = new ApexCharts(chartRef.current, getChartOptions(height, xData, yData))
    if (chart) {
      chart.render()
    }

    return chart
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Histogram of Transaction Amounts Data comes from Transactions API endpoint</span>
        </h3>
      </div>
      <div className='card-body'>
        <div ref={chartRef} id='kt_charts_widget_1_chart' style={{height: '350px'}} />
      </div>
    </div>
  )
}

export default Histograms

function getChartOptions(height: number, x: string[], y: number[]): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')
  const baseColor = getCSSVariableValue('--bs-primary')
  const secondaryColor = getCSSVariableValue('--bs-gray-300')

  return {
    series: [
      {
        name: 'Value',
        data: y,
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: x,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return `${val}`
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}
