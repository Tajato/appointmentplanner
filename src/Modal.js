import { AppointmentForm } from "./AppointmentForm";
import './Modal.css'

export function Modal(props) {
        return (
    <div className="modal-overlay">
        <div className="modal">
        <h2>Make an Appointment</h2>
        <AppointmentForm onSaveAppointment={props.onSaveAppointment}/>
        <button className="close-button" onClick={props.onCloseModal}>Close</button>
        </div>
    </div>
        )
}