import { useEffect, useState } from 'react';
import axios from 'axios';

interface Settings {
  isNotificationEnabled: boolean;
  isNewDashboardEnabled: boolean;
  timezone: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  settings: Settings;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => setUsers(response.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName} ({user.email})
            <br />
            Notifications: {user.settings.isNotificationEnabled ? 'Enabled' : 'Disabled'} | 
            Dashboard: {user.settings.isNewDashboardEnabled ? 'New' : 'Old'} | 
            Timezone: {user.settings.timezone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;