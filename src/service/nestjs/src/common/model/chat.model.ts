import { ApiProperty } from '@nestjs/swagger';
import { Chat } from '@prisma/client';

class ChatModel implements Chat {
	@ApiProperty({ description: 'Chat id generated by database' })
	id: string;

	@ApiProperty({ description: 'Chat room id' })
	chatRoomId: string;

	@ApiProperty({ description: 'User id' })
	content: string;

	@ApiProperty({ required: false })
	createdAt: Date;

	@ApiProperty({ required: false })
	updatedAt: Date;
}

export default ChatModel;