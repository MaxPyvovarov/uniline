import {SidebarProvider} from '@/components/ui/sidebar';
import {AppSidebar} from '@/components/ui/app-sidebar';
import {useMatches} from 'react-router-dom';
import type {UIMatch} from 'react-router';
import {motion, AnimatePresence} from 'framer-motion';

type RouteHandle = {
	title?: string;
};

export default function Layout({children}: {children: React.ReactNode}) {
	const matches = useMatches() as UIMatch<unknown, RouteHandle>[];
	const currentTitle = matches.find(m => m.handle?.title)?.handle.title;

	return (
		<SidebarProvider>
			<AppSidebar />
			<main>
				<AnimatePresence mode='wait'>
					<motion.h2
						key={currentTitle}
						initial={{opacity: 0, y: 10}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0, y: -10}}
						transition={{duration: 0.3}}
						className='text-3xl font-bold mb-6 p-6'
					>
						{currentTitle}
					</motion.h2>
				</AnimatePresence>

				{children}
			</main>
		</SidebarProvider>
	);
}
