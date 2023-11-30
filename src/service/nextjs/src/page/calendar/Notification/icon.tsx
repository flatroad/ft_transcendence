import React from 'react';

export const NotificationIcon = (props: { width: number; height: number }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 28 33"
			fill="none"
		>
			<path
				d="M28 26.7143V28.2857H0V26.7143L3.11111 23.5714V14.1429C3.11111 9.27143 6.26889 4.98143 10.8889 3.59857V3.14286C10.8889 2.30932 11.2167 1.50992 11.8001 0.920521C12.3836 0.331121 13.1749 0 14 0C14.8251 0 15.6164 0.331121 16.1999 0.920521C16.7833 1.50992 17.1111 2.30932 17.1111 3.14286V3.59857C21.7311 4.98143 24.8889 9.27143 24.8889 14.1429V23.5714L28 26.7143ZM17.1111 29.8571C17.1111 30.6907 16.7833 31.4901 16.1999 32.0795C15.6164 32.6689 14.8251 33 14 33C13.1749 33 12.3836 32.6689 11.8001 32.0795C11.2167 31.4901 10.8889 30.6907 10.8889 29.8571"
				fill="black"
			/>
		</svg>
	);
};

export const DeadlineIcon = (props: { width: number; height: number }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 12 26"
			fill="none"
		>
			<rect x="0.5" y="0.5" width="11" height="25" fill="black" stroke="black" />
		</svg>
	);
};

export const ProgressIcon = (props: { width: number; height: number }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 12 26"
			fill="none"
		>
			<rect x="0.5" y="0.5" width="11" height="25" fill="#7E7E7E" stroke="black" />
		</svg>
	);
};

export const ScheduledIcon = (props: { width: number; height: number }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 12 26"
			fill="none"
		>
			<rect x="0.5" y="0.5" width="11" height="25" fill="white" stroke="black" />
		</svg>
	);
};
