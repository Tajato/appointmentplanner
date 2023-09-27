// import { AppointmentForm } from "./AppointmentForm"
import {useState} from 'react'
import { Modal } from "./Modal"
import styles from './Appointments.module.css'
export function Appointments(props) {
    const [searchQuery, setSearchQuery] = useState('') // state variable for what the user inputs into the search box
    const [isModalOpen, setIsModalOpen] = useState()
    function searchAppointments(e) {
       setSearchQuery(e.target.value)
       }
       //searches the state's appointments for what the user types
       const searchedAppointments = props.appointments.filter((appointment) => appointment.title.toLowerCase().includes(searchQuery.toLowerCase()))
       //open's the modal by change the state to true
       function openModel() {
        setIsModalOpen(true)
       }
       // closes the modal
       function closeModal() {
        setIsModalOpen(false)
       }
       //if there is a value in search query, then fulllistappointments will be searchedAppointments, if not, then it will be the already logged appointments on the screen
       const fullListAppointments = searchQuery ? searchedAppointments : props.appointments; // allows us to be able to search the logged appointments, instead of having a separate search list
       
       // conditional variable to show "no search results" or "no appointments have been logged"
       //const noSearch = <p>Nothing matched your search. </p>
       //const noAppointments = <p>Nothing to see yet.</p>
       const isSearchResults = fullListAppointments === searchedAppointments ?  'Nothing matched your search' : 'Nothing to see yet.';
       return (
    <div>
        <div className={styles.searchbox}>
        <input 
        type="text"
        placeholder="Search appointments"
        value={searchQuery}
        onChange={(e) => searchAppointments(e)}
        />
       
        </div>
    <div className={styles.addbuttoncontainer}>
    <button className={styles.addbutton}onClick = {openModel}>Add Appointment</button>
    </div>
    {isModalOpen && <Modal onSaveAppointment={props.onSaveAppointment} onCloseModal = {closeModal}/>
    }
    {/* <AppointmentForm onSaveAppointment={props.onSaveAppointment}/> */}
    <div>
    <h1>Appointments</h1>
    {fullListAppointments.length === 0 ? (
        <p>
        {isSearchResults}
        </p>
    ) : (
        
      <ul className={styles.appcardcontainer}>
        
        {fullListAppointments.map((app, index) => (<li className={styles.appcard} key={index}> 
        <div className={styles.appcontent}>
            <h3 className={styles.apptitle}>{app.title}</h3> 
        <p className={styles.appdatetime}>{app.date} at {app.time}</p> 
        <p className={styles.applocation}>{app.location}</p>
        <p className={styles.appdesc}>{app.description}</p>
        </div>
        <button className={styles.deletebutton} onClick = {() => props.onDeleteAppointment(index)}>Delete</button>
        </li>
        ))}
    </ul>
    )} 
    </div>
    
    </div>
    )
    
}
