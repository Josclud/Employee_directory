import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import employees from './employees.js'

const App = () => {

  const columns = [
    {
      Header: 'First Name',
      accessor: 'first_name',
      filterable: true
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
      filterable: true
    },
    {
      Header: 'Email',
      accessor: 'email',
      filterable: true
    },
    {
      Header: 'Phone Number',
      accessor: 'phone_number',
      filterable: true
    },
    {
      Header: 'Department',
      accessor: 'department',
      filterable: true
    },
  ]

  return (
    <ReactTable
      data={employees}
      columns={columns} />
  )
}

export default 