import { XMarkIcon } from "@heroicons/react/20/solid";


const AppointmentInfo = ({appointment, onDeleteAppointment}) => {
  return (
    <li className="px-3 py-3 flex items-start">
            <button
              onClick={() => onDeleteAppointment(appointment.id)}
              type="button"
              className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <XMarkIcon className="text-white-400 h-6 w-6" />
            </button>
            <div className="flex-grow">
              <div className="flex items-center">
                <span className="flex-none font-medium text-2xl text-blue-800">
                  {appointment.petName}
                </span>
                <span className="flex-grow  text-right font-medium">
                  {appointment.aptDate}
                </span>
              </div>
              <div className="font-bold">
                <b className=" font-medium text-black-500">Owner: </b>
                {appointment.ownerName}
              </div>
              <div className="leading-tight font-medium">
                {appointment.aptNotes}
              </div>
            </div>
          </li>
  )
}

export default AppointmentInfo;