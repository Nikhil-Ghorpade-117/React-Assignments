import React, {useMemo} from 'react';
import {useTable} from "react-table";
import MOCK_DATA from "../Dummy data/MOCK_DATA.json";
import {COLUMNS} from "./Columns";

//css file import below this line
import "../Styles/table.css";

function BasicTable() {
  
  const columns = useMemo(()=> COLUMNS, []);
  const data = useMemo(()=> MOCK_DATA, []);


    const tableInstance = useTable({  
      columns: columns,
      data: data
    })

  const { getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow
        } = tableInstance; 

  return (
      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map((headerGroup, i)=>(
            <tr key={`headers-${i}`} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                 <th key={`header-${i}`} {...column.getHeaderProps()}>{column.render('header')}</th>
              ))} 
            </tr> 
            ))} 
        </thead>  

        <tbody {...getTableBodyProps()}>
          {
            rows.map((row, i)=>{
              prepareRow(row);
              return (  
              <tr {...row.getRowProps()}>
                {
                  row.cells.map((cell,i) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  })}
              </tr>
              )
            })
          }
          
        </tbody>
      </table>    

  )
}

export default BasicTable;