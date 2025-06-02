import { User } from '@/types/user';

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md transition-colors">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {users.map((user) => (
          <li key={user.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100">{user.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-900 dark:text-gray-100">{user.phone}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{user.address.city}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}