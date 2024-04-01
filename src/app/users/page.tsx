import { ProfileCard } from '../components/profile-card';
import axios from 'axios';
import { users } from '../../users';

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="text-2xl font-semibold text-center mb-4">User Profiles</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
        {data.map((user) => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}

async function getData() {
  const promises = users.map((user: any) =>
    axios.get(`https://api.github.com/users/${user}`)
  );

  try {
    const responses = await Promise.all(promises);
    const users = responses.map((response) => response.data);
    return users;
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    return ['eldrige', 'Kodedbykenzie'];
  }
}
