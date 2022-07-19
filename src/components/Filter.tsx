import { Button, IButtonProps, Text, useTheme } from 'native-base'

type Props = IButtonProps & {
  title: string
  isActive?: boolean
  type: 'open' | 'closed'
}

export function Filter({title, isActive = false, type, ...rest}: Props) {
	const { colors } = useTheme()

	const colorType = type === 'open' ? colors.secondary[700] : colors.green[300]

	return (
		<Button
			variant='outline'
			flex={1}
			borderWidth={isActive ? 1 : 0}
			borderColor={colorType}
			bgColor='gray.600'
			size='sm'
			{...rest}>
			<Text color={isActive ? colorType : 'gray.300'} fontSize='xs' textTransform='uppercase'>{title}</Text>
		</Button>
	)
}
