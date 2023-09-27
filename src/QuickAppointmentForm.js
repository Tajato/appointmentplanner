import { useState } from "react";
import styles from './QuickAppointmentForm.module.css';
export function QuickAppointmentForm(props) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(props.todayDate);
    const [time, setTime] = useState();
    
    function handleSubmit(e) {
        e.preventDefault()
        const appointment = {
            title,
            date,
            time
        }
        props.onSaveAppointment(appointment)

        setTitle('')
        setDate(props.todayDate)
        setTime()
      
    }
     return (
    <form className={styles.quickadd} onSubmit={handleSubmit}>
    <div className={styles.formfield}>
    <label>
      
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Enter title"
      />
    </label>
    </div>
    <br />
    <div className={styles.formfield}>
    <label>
      
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </label>
    </div>
    <br />
    <div className={styles.formfield}>
    <label>
      
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
    </label>
    </div>
    <br />
    <button className={styles.quickbutton} type="submit">Save Appointment</button>
  </form>
     )
}