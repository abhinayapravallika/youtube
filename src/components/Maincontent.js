import React, { useEffect } from 'react'
import { useState } from 'react';
export default function Maincontent(props) {
    let sno=1;
    let [count , setcount]=useState(1);
    useEffect(()=> {console.log("hello world")},[count])
  return (
    <>
    {
    <table className='table table-bordered table-responsive++'>
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
                props.data.map((e,i)=>{
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
    }
    <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)} className='btn-danger'>+</button>
    <button onClick={()=>setcount(count-1)} className='btn-danger'>-</button>
    <button onClick={()=>setcount(count*2)} className='btn-danger'>X</button>
    </>
  )
}