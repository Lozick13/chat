import { messageInterface } from '../messageInterface';

export const Message = ({ from, message }: messageInterface) => {
	return (
		<>
			<div className='message-data'>
				<span className='message-data-name'>
					<i className='fa fa-circle online'></i> {from.name}
				</span>
				<span className='message-data-time'>{message.time}</span>
			</div>
			<div className='message my-message'>{message.text}</div>
		</>
	);
};
