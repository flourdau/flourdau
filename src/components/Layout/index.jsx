import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'


import '../../depotsGIT/fonts/font-awesome-5.15.1/css/all.css'
import '../../depotsGIT/fonts/OpenSans/OpenSans.css'
import '../../depotsGIT/fonts/Icons/material-icons.css'
import 'animate.css'

import './Layout.css'

import '@popperjs/core/dist/cjs/popper-lite.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Layout({ Data, Location }) {

	// DEBUG
	// console.log(Location)

	return (<>

		<Nav Data={ Data } Location={ Location }/>
	{ Location.pathname === '/curriculum' | Location.pathname === '/portfolio' | Location.pathname === '/' &&
		<Header Data={ Data } Location={ Location }/>
	}
		<hr></hr>
		<main><Outlet/></main>
		<Footer Data={ Data }/>

	</>)}