import { formatShortDateTime } from "./util";
import { MessageWithSenderRecipient } from "@/types";

// MessageWithSenderRecipient is used here because if it is Message, it will not have the sender and recipient properties as those are not part of the Message type.
export function mapMessageToMessageDto(message: MessageWithSenderRecipient) {
	return {
		id: message.id,
		text: message.text,
		created: formatShortDateTime(message.created),
		dateRead: message.dateRead ? formatShortDateTime(message.dateRead) : null,
		senderId: message.sender?.userId,
		senderName: message.sender?.name,
		senderImage: message.sender?.image,
		recipientId: message.recipient?.userId,
		recipientImage: message.recipient?.image,
		recipientName: message.recipient?.name,
	};
}
