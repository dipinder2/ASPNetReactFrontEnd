import React from 'react';

const Job = ({title,description,postedOn,jobId}) => {
  return (
    <tr>
      <td><strong>{title}</strong></td>
      <td><i>{new Date(postedOn).getMonth()+"/"+new Date(postedOn).getDay()}</i></td>
      <td>{description}</td>
      <td><a class="btn btn-outline-primary" onClick="" to={`apply/${jobId}`}>Apply</a></td>
    </tr>
  )
}

export default Job;