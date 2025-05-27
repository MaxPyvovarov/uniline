import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {motion} from 'framer-motion';
import type {ReactNode} from 'react';

interface MetricCardProps {
	title: string;
	value: string | number;
	icon?: ReactNode;
	index?: number;
}

export function MetricCard({title, value, icon, index = 0}: MetricCardProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: index * 0.3, duration: 0.4, ease: 'easeOut'}}
		>
			<Card className='p-6 shadow-lg hover:shadow-xl transition-shadow'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-4'>
					<CardTitle className='text-lg font-semibold'>{title}</CardTitle>
					{icon}
				</CardHeader>
				<CardContent>
					<div className='text-4xl font-bold'>{value}</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
