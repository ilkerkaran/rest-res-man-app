import { Box } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Datatable from '../components/UI/Datatable/Datatable'
import DatePicker from '../components/UI/DatePicker/DatePicker'

const DailyReport = () => {
  const [date, setDate] = useState(new Date())
  const {
    reservations
  } = useSelector((state) => state.restaurant)
  let startOfTheDay = new Date(date)
  startOfTheDay = startOfTheDay.setHours(0, 0, 0, 0)
  const endOfTheDay = new Date(startOfTheDay + (24 * 60 * 60 * 1000)).getTime()
  const columns = [
    {
      title: 'Table',
      field: 'tableNo'
    },
    {
      title: 'Time',
      field: 'time',
      lookup: {
        0: '0:00',
        1: '1:00',
        2: '2:00',
        3: '3:00',
        4: '4:00',
        5: '5:00',
        6: '6:00',
        7: '7:00',
        8: '8:00',
        9: '9:00',
        10: '10:00',
        11: '11:00',
        12: '12:00',
        13: '13:00',
        14: '14:00',
        15: '15:00',
        16: '16:00',
        17: '17:00',
        18: '18:00',
        19: '19:00',
        20: '20:00',
        21: '21:00',
        22: '22:00',
        23: '23:00'
      },
      editable: 'onAdd'
    },
    { title: 'Customer Name', field: 'customerName' },
    { title: 'Contact Details', field: 'contactDetails' }
  ]

  reservations.sort((x, y) => x.tableId - y.tableId)
  return (
    <>
      <Box pt={2}>
        <DatePicker
          onChange={setDate}
          value={date}
        />
      </Box>
      <Box p={4}>
        <Datatable
          title="Daily Report"
          columns={columns}
          data={reservations.filter((d) => d.date >= startOfTheDay
          && d.date < endOfTheDay)
            .map((d) => ({ ...d, tableNo: `#${d.tableId}` }))}
        />
      </Box>
    </>
  )
}
export default DailyReport
