import UserBriefInformation from '@/component/common/user/bried-information';
import style from '../../../style/friend/list/index.module.css';
import FriendStatus from './status';
import User, { UserStatus } from '@/type/user.type';
import { Skeleton, Typography } from '@mui/material';
import Friend from '@/type/friend.type';

const Title = () => {
	return <Typography>친구 목록</Typography>;
};

const FriendList = ({ data, refetch }: { data: Friend[] | undefined; refetch: () => void }) => {
	return (
		<div className={style.container}>
			<Title />
			{data && data?.length ? (
				data.map(user => {
					return (
						<div key={user?.userId}>
							{/*@todo 문자제거.*/}
							<UserBriefInformation
								nickname={user?.nickname}
								condition={<FriendStatus status={user?.status} />}
								className={style['user-brief-information']}
								userId={user?.id}
								imgUrl={user?.profileImageURI}
								refetch={refetch}
							/>
						</div>
					);
				})
			) : (
				<Typography>친구가 없습니다.</Typography>
			)}
		</div>
	);
};

export default FriendList;
