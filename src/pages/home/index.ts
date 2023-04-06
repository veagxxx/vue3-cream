import { ECOption } from '@/utils/echarts';
import { computed } from 'vue';
export const echartList = computed<ECOption[]>(() => {
  return [{
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  },{
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  },{
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'center',
      left: 'right',
      orient: 'vertical',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  },{
    title: {
      text: 'Multiple Radar',
      top: '5%',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis'
    },
    radar: [
      {
        indicator: [
          { name: 'Brand', max: 100 },
          { name: 'Content', max: 100 },
          { name: 'Usability', max: 100 },
          { name: 'Function', max: 100 }
        ],
        center: ['50%', '50%'],
        radius: 80
      },
    ],
    series: [
      {
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        areaStyle: {},
        data: [
          {
            value: [60, 73, 85, 40],
            name: 'A Software'
          }
        ]
      },
    ]
  }]
})