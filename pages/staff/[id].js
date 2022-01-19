import React from 'react'
import axios from 'axios'

const Employee = ({employee}) => {
    
    return (
        <div>
            {console.log(employee)}
            Here is userinfo
        </div>
    )
}

export default Employee


export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
      `http://localhost:3000/api/employee/${params.id}`
    );
    return {
      props: {
        employee: res.data,
      },
    };
  };
  