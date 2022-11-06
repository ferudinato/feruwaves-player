import style from './Progressbar.module.css';

interface ProgressbarProps {
	currentValue: number;
}

const Progressbar = ({ currentValue }: ProgressbarProps): JSX.Element => {
	return (
		<div className={style.Progressbar}>
			<div
				className={style.ProgressbarFilled}
				style={{ width: `${currentValue}%` }}
			></div>
			<div
				className={style.ProgressbarCircle}
				style={{
					left: `${currentValue > 99 ? currentValue - 1 : currentValue}%`,
				}}
			></div>
		</div>
	);
};

export default Progressbar;
