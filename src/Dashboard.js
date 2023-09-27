import React from 'react'
import { QuickAppointmentForm } from "./QuickAppointmentForm";
import styles from './Dashboard.module.css'
export function Dashboard(props) {
   const todayDate = new Date().toISOString().split('T')[0]; // Get the today's date

   const todayAppointments = props.appointments.filter(appointment => appointment.date === todayDate); // get today's appointments
  const upcomingAppointments = props.appointments.filter(appointment => appointment.date > todayDate); // get upcoming appointments
return (
    <div className = {styles.dashboardcontainer}>
        <div className={styles.formm}>
 <QuickAppointmentForm  todayDate={todayDate} onSaveAppointment={props.onSaveAppointment} />
 </div>
    <div className={styles.appform}>
    <table width="50%" className={styles.carddash}>
  <thead>
    <tr>
      <th colspan="2" className={styles.heading}>Today's Appointments</th>
    </tr>
  </thead>
  <tbody>
    {todayAppointments.length === 0 ? (
      <tr>
        <td colSpan="2">You have no appointments today.</td>
      </tr>
    ) : (
      <tr>
        <th className={styles.left}>Title</th>
        <th className={styles.left}>Time</th>
        <th className={styles.left}>Date</th>
        <th className={styles.left}>Location</th>
        <th className={styles.left}>Description</th>
      </tr>
    )}
    {todayAppointments.map((app, index) => (
      <tr key={index}>
        <td className={styles.center}>{app.title}</td>
        <td className={styles.center}>{app.time}</td>
        <td className={styles.center}>{app.date}</td>
        <td className={styles.center}>{app.location}</td>
        <td className={styles.center}>{app.description}</td>
      </tr>
    ))}
  </tbody>
</table>


     
<table width="50%" className={styles.carddash}>
  <thead>
    <tr>
      <th>Upcoming Appointments</th>
    </tr>
  </thead>
  <tbody>
    {upcomingAppointments.length === 0 ? (
      <tr>
        <td colSpan="2">You have no upcoming appointments today</td>
      </tr>
    ) : (
      <tr>
        <th className={styles.left}>Title</th>
        <th className={styles.left}>Time</th>
        <th className={styles.left}>Date</th>
        <th className={styles.left}>Location</th>
        <th className={styles.left}>Description</th>
      </tr>
    )}
    {upcomingAppointments.map((app, index) => (
      <tr key={index}>
        <td className={styles.center}>{app.title}</td>
        <td className={styles.center}>{app.time}</td>
        <td className={styles.center}>{app.date}</td>
        <td className={styles.center}>{app.location}</td>
        <td className={styles.center}>{app.description}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
    </div>

 
    
)

}