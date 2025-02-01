export default function AlertNotifications({ alerts }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Alerts:</h2>
      {alerts.length > 0 ? (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index} className="p-2 bg-red-100 text-red-700 rounded mb-2">
              {alert}
            </li>
          ))}
        </ul>
      ) : (
        <p>No active alerts</p>
      )}
    </div>
  )
}

