import Homepage from './HomePage'
import { Route, Routes, useLocation } from "react-router-dom";
import PersonalPage from './PersonalPage'
import Department from './Department'
import DetailDepartment from "./DetailDepartment"
import { AnimatePresence } from 'framer-motion';
import Minister from './Minister';
function AnimatedRoutes() {
    const location = useLocation()
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Homepage />}/>
            <Route path='personal' element={<PersonalPage />}/>
            <Route path='department' element={<Department />}/>
            <Route path='department/Directions' element={<DetailDepartment />}/>
            <Route path='minister' element={<Minister />}/>
        </Routes>
    </AnimatePresence>
      );
}

export default AnimatedRoutes;