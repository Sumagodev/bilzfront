import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import TopHeader from './Components/TopHeader'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import CompanyOverview from './Pages/CompanyOverview'
import News from './Pages/News'
import NewsDetails from './Pages/NewsDetails'
import Product from './Pages/Product'
import ProductDetail from './Pages/ProductDetail'
import SolutionOverview from './Pages/Solution/SolutionOverview'
import SolutionApplication from './Pages/Solution/SolutionApplication'
import JobOpportunity from './Pages/JobOpportunity'
import Service from './Pages/Service/Service'
import ServiceDownloadPdf from './Pages/Service/ServiceDownloadPdf'
import ServiceOverview from './Pages/Service/ServiceOverview'
import BannerImg1 from './ComponentsPage/Banner/BannerImg';
import Movingicon from './Components/Movingicon'
import Exhibition from './ComponentsPage/Home/ExhibitionDetails'
import SolutionApplicationDetails from './Pages/Solution/SolutionApplicationDetails'
import Solution from './ComponentsPage/SolutionOverview/SolutionDetails'

export const Router = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='p-0'>
                        <TopHeader />
                    </Col>
                </Row>
                <Row>
                    {/* Header visible on all screen sizes */}
                    <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={3} className='p-0'>
                        <Header />   
                    </Col>
                    {/* Content column, full width on mobile/tablet, takes 9 columns on large screens */}
                    <Col xs={12} lg={9} className='p-0'> 
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/AboutUs' element={<AboutUs />} />
                            <Route path='/ContactUs' element={<ContactUs />} />
                            <Route path='/CompanyOverview' element={<CompanyOverview />} />
                            <Route path='/JobOpportunity' element={<JobOpportunity />} />
                            <Route path='/News' element ={<News />} />
                            <Route path='/Newsdetails/:id' element ={<NewsDetails />} />
                            <Route path='/Exhibition/:id' element ={<Exhibition />} />
                            <Route path='/Solutiondetails/:id' element ={<Solution />} />
                            <Route path='/solutionapplicationdetails/:id' element ={<SolutionApplicationDetails />} />
                            <Route path='/Product/:id' element={<Product />} />
                            <Route path='/ProductDetail/:slug' element={<ProductDetail />} />
                            <Route path='/SolutionOverview' element={<SolutionOverview />} />
                            <Route path='/SolutionApplication' element={<SolutionApplication />} />
                            <Route path='/Service' element={<Service />} />
                            <Route path='/ServiceDownloadPdf' element={<ServiceDownloadPdf />} />
                            <Route path='/ServiceOverview' element={<ServiceOverview />} />
                        </Routes>
                        <Movingicon/>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Router;
