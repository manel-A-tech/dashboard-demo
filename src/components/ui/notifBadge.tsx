
type notifBadgeProp = {
  notifsnumber : number
  className?  : string
}

function NotifBadge({notifsnumber , className} : notifBadgeProp){
  return(
    <div className={className}>
      {notifsnumber}
    </div>
  )
}

export default NotifBadge