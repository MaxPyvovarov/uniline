import {MetricCard} from '@/components/ui/metric-card';
import {DollarSign, Users, Eye} from 'lucide-react';

export default function OverviewPage() {
	const metrics = [
		{
			title: 'Revenue',
			value: '$12,345',
			icon: <DollarSign className='h-6 w-6 text-muted-foreground' />,
		},
		{
			title: 'Users',
			value: 2314,
			icon: <Users className='h-6 w-6 text-muted-foreground' />,
		},
		{
			title: 'Views',
			value: '9.8K',
			icon: <Eye className='h-6 w-6 text-muted-foreground' />,
		},
	];

	return (
		<div className='grid gap-6 md:grid-cols-3 p-6'>
			{metrics.map((metric, index) => (
				<MetricCard
					key={metric.title}
					title={metric.title}
					value={metric.value}
					icon={metric.icon}
					index={index}
				/>
			))}
		</div>
	);
}
