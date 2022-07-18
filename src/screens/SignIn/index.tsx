import { VStack, Heading, Icon, useTheme } from 'native-base'

import { Envelope, Key } from 'phosphor-react-native'
import { useState } from 'react'

import Logo from '../../assets/logo_primary.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export default function SignIn() {
	const { colors } = useTheme()
	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	function setFormInputs(value: string, input: string) {
		setForm({...form, [input]: value})
	}

	return (
		<VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
			<Logo />
			<Heading color='gray.100' fontSize='xl' mt={20} mb={5}>Acesse sua conta</Heading>
			<Input
				placeholder='E-mail'
				mb={4}
				InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
				onChangeText={(e) => setFormInputs(e, 'email')} />
			<Input
				placeholder='Senha'
				secureTextEntry
				mb={4}
				InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
				onChangeText={(e) => setFormInputs(e, 'password')} />
			<Button title='Entrar' w='full'/>
		</VStack>
	)
}
