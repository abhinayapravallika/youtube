import React from 'react'
import { useContext } from 'react'
import { store } from '../App'
export default function Users() {
  let sno=1;
  const[data,setData]=useContext(store)
  return (
    <>
    <table  className='table table-bordered table-responsive++'>
      <thead>
          <tr>
              <th>SNo</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Branch</th>
          </tr>
      </thead>
      <tbody>
            {
                data.map((e,i)=>{
                    return(
                        <>
                        <tr>
                            <td>{sno++}</td>
                            <td>{e.name}</td>
                            <td>{e.roll}</td>
                            <td>{e.branch}</td>
                        </tr>
                        </>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
}
