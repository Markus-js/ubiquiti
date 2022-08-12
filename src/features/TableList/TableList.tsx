import React from 'react'

const devices = 123

const arr = [
  {
    title: "name",
  },
  {
    title: "wef",
  },
  {
    title: "namfewe",
  },
]

const TableList = () => {
  return (

    <table>
      <thead>
        <tr>
          <th>{`${devices}devices`}</th>
          <th>PRODUCT LINE</th>
          <th>NAME</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {arr.map((item, idx) => (
            <td key={idx}>{item.title}</td>
          ))}
        </tr>
        <tr>
          <td>text2.1</td>
          <td>text2.2</td>
          <td>text2.3</td>
        </tr>
        <tr>
          <td>text3.1</td>
          <td>text3.2</td>
          <td>text3.3</td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>
  )
}

export default TableList