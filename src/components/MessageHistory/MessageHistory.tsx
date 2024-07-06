import { Message } from '../Message';
import { Response } from '../Response';
import { Typing } from '../Typing';
import { messageHistoryInterface } from './messageHistoryInterface';

export const MessageHistory = ({ list }: messageHistoryInterface) => {
	return (
		<>
			<ul>
				{list.map(message => {
					return message.type === 'message' ? (
						<li>
							<Message
								key={message.id}
								from={message.from}
								message={{ time: message.time, text: message.text }}
							></Message>
						</li>
					) : message.type === 'response' ? (
						<li className='clearfix'>
							<Response
								key={message.id}
								from={message.from}
								message={{ time: message.time, text: message.text }}
							></Response>
						</li>
					) : (
						<li>
							<Typing
								key={message.id}
								from={message.from}
								message={{ time: message.time, text: message.text }}
							></Typing>
						</li>
					);
				})}
			</ul>
		</>
	);
};

MessageHistory.defaultProps = {
	list: [],
};
