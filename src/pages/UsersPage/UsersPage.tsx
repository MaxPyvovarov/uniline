// src/pages/users.tsx

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {useState} from 'react';
import {ArrowUpDown} from 'lucide-react';
import {motion} from 'framer-motion';

// Тип пользователя
interface User {
	id: number;
	name: string;
	email: string;
	role: string;
}

// Мок-данные
const mockUsers: User[] = [
	{id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin'},
	{id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'User'},
	{id: 3, name: 'Charlie Davis', email: 'charlie@example.com', role: 'User'},
	{id: 4, name: 'Diana Lee', email: 'diana@example.com', role: 'Editor'},
	{id: 5, name: 'Evan Brown', email: 'evan@example.com', role: 'User'},
	{id: 6, name: 'Fiona Wilson', email: 'fiona@example.com', role: 'Admin'},
	{id: 7, name: 'George Miller', email: 'george@example.com', role: 'User'},
	{id: 8, name: 'Hannah Clark', email: 'hannah@example.com', role: 'Editor'},
];

export default function UsersPage() {
	const [users, setUsers] = useState<User[]>(mockUsers);
	const [sortAsc, setSortAsc] = useState(true);

	const sortByName = () => {
		const sorted = [...users].sort((a, b) =>
			sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
		);
		setUsers(sorted);
		setSortAsc(!sortAsc);
	};

	return (
		<>
			<motion.div
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{delay: 0.4, duration: 0.4, ease: 'easeOut'}}
				className='p-6'
			>
				<div className='w-full overflow-x-auto'>
					<div className='min-w-[800px] rounded-xl border border-border'>
						<Table>
							<TableHeader>
								<TableRow className='bg-muted/50 border-b'>
									<TableHead
										className='cursor-pointer select-none'
										onClick={sortByName}
									>
										<div className='flex items-center gap-2'>
											Name
											<ArrowUpDown className='h-4 w-4' />
										</div>
									</TableHead>
									<TableHead>Email</TableHead>
									<TableHead>Role</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{users.map(user => (
									<TableRow
										key={user.id}
										className='hover:bg-muted/25 transition-colors'
									>
										<TableCell className='text-left border-t'>
											{user.name}
										</TableCell>
										<TableCell className='text-left border-t'>
											{user.email}
										</TableCell>
										<TableCell className='text-left border-t'>
											{user.role}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</div>
			</motion.div>
		</>
	);
}
