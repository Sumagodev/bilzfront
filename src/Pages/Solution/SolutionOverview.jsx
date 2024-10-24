import React from 'react'
import Section1 from '../../ComponentsPage/SolutionOverview/Section1';
import Section2 from '../../ComponentsPage/SolutionOverview/Section2';
import Section3 from '../../ComponentsPage/SolutionOverview/Section3';
import Section4 from '../../ComponentsPage/SolutionOverview/Section4';
import Section5 from '../../ComponentsPage/SolutionOverview/Section5';
import SolutionBanner from '../../ComponentsPage/Banner/SolutionBanner';

const SolutionOverview  = () => {
  return (
    <>
      <SolutionBanner/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  )
}

export default SolutionOverview 