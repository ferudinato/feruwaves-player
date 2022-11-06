import Sidebar from '../Sidebar/Sidebar';

import styles from './Layout.module.css';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.Layout}>
			<div
				className={styles.BackgroundArtwork}
				style={{ backgroundColor: '#F0FFFB' }}
			>
				<Sidebar />
				{children}
			</div>
		</div>
	);
};

export default Layout;
