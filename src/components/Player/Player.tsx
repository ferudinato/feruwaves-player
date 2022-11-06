import style from './Player.module.css';
import Progressbar from '../ui/Progressbar/Progressbar';
import Controls from '../ui/Controls/Controls';
import { useRef, useState } from 'react';

const Player = (): JSX.Element => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [timeDisplay, setTimeDisplay] = useState<string>('00:00');
	const [percentage, setPercentage] = useState<number>(0);
	const [duration, setDuration] = useState<string>('00:00');
	const interval = useRef<NodeJS.Timer>();
	const audioElement = useRef<HTMLAudioElement>(new Audio());

	const formatTime = (time: number) => {
		let seconds: number | string = parseInt((time % 60).toString());
		let minutes: number | string = parseInt(((time / 60) % 60).toString());
		minutes = minutes >= 10 ? minutes : `0${minutes}`;
		seconds = seconds >= 10 ? seconds : `0${seconds}`;
		return {
			minutes,
			seconds,
		};
	};

	const getPercentage = (value: number, total: number) => {
		return (value / total) * 100;
	};

	const onPlayHandled = () => {
		console.log('onPlayHandled called');
		audioElement.current.play();
		setIsPlaying(true);
	};

	const onTimeUpdated = () => {
		const currentTime = audioElement.current.currentTime;
		const duration = audioElement.current.duration;
		const percentage = getPercentage(currentTime, duration);
		const { minutes, seconds } = formatTime(currentTime);
		setTimeDisplay(`${minutes}:${seconds}`);
		setPercentage(percentage);
	};

	const onEndedHandled = () => {
		console.log('(onEndedHandled) called');
		setIsPlaying(false);
	};

	const onPauseHandled = () => {
		console.log('onPauseHandled called');
		audioElement.current.pause();
		setIsPlaying(false);
		clearInterval(interval.current);
	};

	const onLoadedMetadata = () => {
		console.log('onLoadedMetadata called!');
		const { minutes, seconds } = formatTime(audioElement.current.duration);
		setDuration(`${minutes}:${seconds}`);
	};

	return (
		<div className={style.Player}>
			<div className='Player--Controls'>
				<div className='Player--Progressbar'>
					<div className={style.PlayerTime}>
						<p className='ElapsedTime'>{timeDisplay}</p>
						<p className='RemainingTime'>{duration}</p>
					</div>
					<Progressbar currentValue={percentage} />
					{/* <button onClick={onPlay}>{isPlaying ? 'pause' : 'play'}</button> */}
					<audio
						preload='metadata'
						ref={audioElement}
						onLoadedMetadata={onLoadedMetadata}
						onTimeUpdate={onTimeUpdated}
						onEnded={onEndedHandled}
					>
						<source
							src='https://feruwave-player.s3.us-west-1.amazonaws.com/media/hikari_no_silhouette.mp3'
							type='audio/mpeg'
						/>
					</audio>
				</div>
				<Controls
					isPaused={!isPlaying}
					onPlayClicked={onPlayHandled}
					onPauseClicked={onPauseHandled}
				/>
			</div>
		</div>
	);
};

export default Player;
