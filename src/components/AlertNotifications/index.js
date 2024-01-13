import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="notification-container">
        <h1 className="notification-heading success">Success</h1>
        <p className="notification-text">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="notification-container">
        <h1 className="notification-heading error">Error</h1>
        <p className="notification-text">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="notification-container">
        <h1 className="notification-heading warning">Warning</h1>
        <p className="notification-text">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="notification-container">
        <h1 className="notification-heading info">Info</h1>
        <p className="notification-text">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}
export default AlertNotifications
