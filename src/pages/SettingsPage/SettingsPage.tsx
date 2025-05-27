// src/pages/settings.tsx

import {motion} from 'framer-motion';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Checkbox} from '@/components/ui/checkbox';
import {useState} from 'react';
import {ThemeToggle} from '@/components/ui/theme-toggle';

export default function SettingsPage() {
	const [username, setUsername] = useState('');
	const [notificationsEnabled, setNotificationsEnabled] = useState(false);

	return (
		<motion.div
			className='p-6 max-w-xl mx-auto'
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.4, duration: 0.4, ease: 'easeOut'}}
		>
			<form className='space-y-6'>
				<div className='flex items-center justify-between'>
					<Label className='text-base'>Theme</Label>
					<ThemeToggle />
				</div>

				<div className='flex flex-col gap-2'>
					<Label htmlFor='username'>Username</Label>
					<Input
						id='username'
						placeholder='Enter your username'
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
				</div>

				<div className='flex items-center space-x-2'>
					<Checkbox
						id='notifications'
						checked={notificationsEnabled}
						onCheckedChange={checked => setNotificationsEnabled(!!checked)}
					/>
					<Label htmlFor='notifications'>Enable notifications</Label>
				</div>
			</form>
		</motion.div>
	);
}
