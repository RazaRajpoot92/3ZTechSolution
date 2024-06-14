import React from 'react'
import ServiceDetail from './ServiceDetail'
import { serviceDetailData } from '../data/serviceDetailData'

const ServiceDetailContainer = () => {
  return (
    <div>
        {
            serviceDetailData.map((data,index)=>(
                <ServiceDetail sec = {index} key={data.serviceName} data={data} />
            ))
        }
    </div>
  )
}

//1 2 3 4 5 6 
export default ServiceDetailContainer