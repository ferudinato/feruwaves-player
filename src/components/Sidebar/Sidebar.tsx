import styles from './Sidebar.module.css';

const Sidebar = (): JSX.Element => {
	return (
		<div className={styles.Sidebar}>
			<div className={styles.SidebarInner}>
				<h3>Available Songs</h3>
				<div className={styles.SidebarMenu}>
					<ul className={styles.SongsItems}>
						<li>Song 1 asd long text as you can lol wtf </li>
						<li>Song 2</li>
						<li>Song 3</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
