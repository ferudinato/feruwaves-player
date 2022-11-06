import styles from './Controls.module.css';

import likeButton from '../../../images/heart.svg';
import rewindButton from '../../../images/previous.svg';
import playButton from '../../../images/play.svg';
import pauseButton from '../../../images/pause.svg';
import fastButton from '../../../images/next.svg';
import repeatButton from '../../../images/undo.svg';
import sidebarButton from '../../../images/sidebar.svg';

interface ControlsProps {
	onPlayClicked: () => void;
	onPauseClicked: () => void;
	isPaused: boolean;
}

const Controls = ({
	onPlayClicked,
	onPauseClicked,
	isPaused,
}: ControlsProps) => {
	return (
		<ul className={styles.Controls}>
			<li>
				<div
					style={{
						WebkitMaskImage: `url(${likeButton})`,
						maskImage: `url(${likeButton})`,
					}}
					className={styles.IconButton}
				></div>
			</li>
			<li>
				<ul className={styles.PlayingStatusButtons}>
					<li>
						<div
							style={{
								WebkitMaskImage: `url(${rewindButton})`,
								maskImage: `url(${rewindButton})`,
							}}
							className={styles.IconButton}
						></div>
					</li>
					<li
						className={styles.activeButton}
						onClick={isPaused ? onPlayClicked : onPauseClicked}
					>
						<div
							style={{
								WebkitMaskImage: `url(${isPaused ? playButton : pauseButton})`,
								maskImage: `url(${isPaused ? playButton : pauseButton})`,
							}}
							className={styles.IconButton}
						></div>
					</li>
					<li>
						<div
							style={{
								WebkitMaskImage: `url(${fastButton})`,
								maskImage: `url(${fastButton})`,
							}}
							className={styles.IconButton}
						></div>
					</li>
					<li>
						<div
							style={{
								WebkitMaskImage: `url(${repeatButton})`,
								maskImage: `url(${repeatButton})`,
							}}
							className={styles.IconButton}
						></div>
					</li>
				</ul>
			</li>
			<li>
				<div
					style={{
						WebkitMaskImage: `url(${sidebarButton})`,
						maskImage: `url(${sidebarButton})`,
					}}
					className={[styles.IconButton, styles.SidebarButton].join(' ')}
				></div>
			</li>
		</ul>
	);
};

export default Controls;
