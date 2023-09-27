import { useState } from "react";
import styles from './AppointmentForm.module.css'
export function AppointmentForm(props) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        const appointment = {
            title,
            date,
            time,
            location,
            description
        }
        props.onSaveAppointment(appointment)

        setTitle('')
        setDate('')
        setTime('')
        setLocation('')
        setDescription('')
    }
     return (
    <form onSubmit={handleSubmit}>
    <label>
      Title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </label>
    <br />
    <label>
      Date:
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </label>
    <br />
    <label>
      Time:
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
    </label>
    <br />
    <label>
      Location:
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        
      />
    </label>
    <br />
    <label>
      Description:
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        
      />
    </label>
    <br />
   
    <button className={styles.addbutton} type="submit">Save Appointment</button>
  </form>
     )
}