import React, { useMemo } from 'react'
import { useTable,useSortBy } from 'react-table'
import Mockdata from './MOCK_DATA (1).json'
import { COLUMN } from './column'
import './tablecss.css'

function FSortingTableorm() {
  const columns = useMemo(() => COLUMN, [])
  const data = useMemo(() => Mockdata, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  }= useTable({columns, data  },useSortBy)
    
 
  return (
    <table {...getTableProps()}>
    <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
      <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
       <tfoot>
         {
           footerGroups.map((footerGroups)=>(
             <tr {...footerGroups.getFooterGroupProps()}>{
               footerGroups.headers.map((column)=>{
                 return <td {...column.getFooterProps}>{column.render('Footer')}</td>
               })
             }
               </tr>
           ))
         }

       </tfoot>
    </table>
  )
}

export default SortingTable
