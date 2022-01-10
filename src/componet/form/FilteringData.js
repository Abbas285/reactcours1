import React, { useMemo } from 'react'
import { useTable, useGlobalFilter,useFilters,useSortBy, usePagination, } from 'react-table'
import Mockdata from './MOCK_DATA (1).json'
import { COLUMN } from './Column'
import './tablecss.css'
import Globalfilter from './GlobelFiltering'


function FilteringData() {
  const columns = useMemo(() => COLUMN, [])
  const data = useMemo(() => Mockdata, [])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    
  
    state,
    setGlobalFilter
  } = useTable({ columns, data,initialState:{pageIndex:1} }, 
    useFilters, useGlobalFilter,useSortBy,usePagination,)

  const { pageIndex,pageSize,globalFilter,canFilter } = state
  return (
    <div>
        <Globalfilter
        filter={globalFilter }
        setFilter={setGlobalFilter }
        />

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <div>{column.canFilter?column.render('Filter'):null}</div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>

                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        {/* <tfoot>
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

       </tfoot> */}
      </table>
      <div className="mt-3">
        <span style={{ marginRight: '7px' }}>
          {' '}
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | go to page:{' '}
          <input
          type="number"
          defaultValue={pageIndex+1}
          onChange={(e)=>{
            const pageNumber=e.target.value? Number(e.target.value)-1:0
            gotoPage(pageNumber)
          }}
          style={{width:'50px',marginRight:"7px"}}
          />
        </span>
        <select
        value={pageSize}
        onChange={(e)=>setPageSize(Number(e.target.value))}
        className="btn "
        style={{marginRight:"7px"}}
        >
          {
            [10,20,50].map((pageSize)=>{
              return<option key={pageSize} value={pageSize}> Show {pageSize}</option>
            })
          }

        </select>

        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="btn bg-secondary "
          style={{ marginRight: '7px' }}
        >
          {'<<'}
        </button>
        <button
          className="btn bg-info "
          style={{ marginRight: '7px' }}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className="btn bg-info  "
          onClick={() => nextPage()}
          disabled={!canNextPage}
          style={{ marginRight: '7px' }}
        >
          Next
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="btn bg-secondary "
        >
          {'>>'}
        </button>
      </div>
    </div>
  )
}

export default FilteringData
