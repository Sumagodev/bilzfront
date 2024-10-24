import React from 'react'
import Section1 from '../../ComponentsPage/Service/ServiceOverview/Section1'
import Section3 from '../../ComponentsPage/Service/ServiceOverview/Section3'
import Section4 from '../../ComponentsPage/Service/ServiceOverview/Section4'
import ServiceBanner from '../../ComponentsPage/Banner/ServiceBanner'
const ServiceOverview = () => {
  return (
    <>
      <ServiceBanner/>
      <Section1/>
      <Section3/>
      <Section4/>
    </>
  )
}

export default ServiceOverview
