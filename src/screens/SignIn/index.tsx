import { StatusBar } from 'expo-status-bar'
import { VStack, Heading } from 'native-base'

export default function SignIn() {
	return (
		<VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
			<Heading color='gray.100' fontSize='xl' mt={20}>Acesse sua conta</Heading>
			<StatusBar style="auto" />
		</VStack>
	)
}
