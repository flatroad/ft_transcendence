import { GameInstance, IonPhaser } from '@ion-phaser/react';
import {
	Dispatch,
	RefObject,
	SetStateAction,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import Config from '@/component/game/config';
import style from '@/style/game/index.module.css';
import SocketContext from '@/context/socket.context';
import { useParams, useRouter } from 'next/navigation';

const destroy = (props: {
	gameRef: RefObject<HTMLIonPhaserElement>;
	setGame: Dispatch<SetStateAction<GameInstance | undefined>>;
	setIsInitialized: Dispatch<SetStateAction<boolean>>;
}) => {
	const { gameRef, setGame, setIsInitialized } = props;

	if (gameRef.current) {
		setGame(undefined);
		setIsInitialized(false);
		gameRef.current.destroy();
	}
};

const GamePage = () => {
	const navigate = useRouter();
	const params = useParams<{ id: string }>();
	const gameRef = useRef<HTMLIonPhaserElement>(null);
	const [game, setGame] = useState<GameInstance | undefined>(undefined);
	const [isInitialized, setIsInitialized] = useState(true);
	const { sockets } = useContext(SocketContext);
	const socket = sockets.gameSocket;

	useEffect(() => {
		if (navigate && socket && params?.id) {
			setIsInitialized(true);

			import('@/component/game/scene').then(({ MainScene }) => {
				setGame({
					...Config,
					scene: new MainScene(navigate, socket, params.id),
				});
			});

			return () => destroy({ gameRef, setGame, setIsInitialized });
		}
	}, [navigate, socket, params?.id]);

	return (
		isInitialized && (
			<IonPhaser
				ref={gameRef}
				game={game}
				initialize={isInitialized}
				placeholder={'Loading...'}
				className={style.container}
			/>
		)
	);
};

export default GamePage;
