import { Button } from '@chakra-ui/react';

/**
 * 채팅방 생성 함수
 *
 * @param title : 버튼 텍스트
 * @param onClick : 버튼 눌렀을 때 발생시킬 이벤트
 */
function CreateButton(props: { title: any; onClick: any; }) {
	const { title, onClick } = props;

	return <Button
			margin="30px"
			height="70px"
			width="200px"
			fontSize="36px"
			fontFamily="Establish"
			colorScheme="#53B7BA"
			textColor="black"
			backgroundColor="#53B7BA"
			border="2px"
			borderColor="#53B7BA"
			onClick={onClick}
			>
				{title}
			</Button>;
}

export default CreateButton;