import { createBrowserRouter,RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Appointments } from "./Appointments";
import { Dashboard } from "./Dashboard";
// import {Root}  from "./Root";
import {Header} from './Header'
function App() {

  const [appointments,setAppointments] = useState([])
 function handleSaveAppointment(appointment) {
    setAppointments([...appointments, appointment])

    localStorage.setItem('appointments',JSON.stringify([...appointments,appointment]))
 }
 useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]')
    setAppointments(storedAppointments)
 },[])

 function handleDeleteAppointment(index) {
  const copyAppointments = [...appointments]
  copyAppointments.splice(index,1)
  setAppointments(copyAppointments)
  localStorage.setItem('appointments',JSON.stringify(copyAppointments))
 
 }

 

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Header/> }>
      <Route index element={<Dashboard appointments={appointments} onSaveAppointment = {handleSaveAppointment}/>} />
      <Route path='dashboard' element={<Dashboard appointments={appointments} onSaveAppointment = {handleSaveAppointment} />} />

      <Route path='appointments' element={<Appointments appointments={appointments} onSaveAppointment = {handleSaveAppointment} onDeleteAppointment = {handleDeleteAppointment} />} />
      
    </Route>
  ));
  
  return (
    <div className = {styles.maincontainer}>
    <RouterProvider router= {router}/>
    </div>
   
    
  );
}

export default App;
