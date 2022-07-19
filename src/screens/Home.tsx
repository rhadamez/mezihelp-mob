import { Heading, HStack, IconButton, Text, useTheme, VStack, FlatList } from 'native-base'
import { SignOut } from 'phosphor-react-native'
import { useState } from 'react'

import Logo from '../assets/logo_secondary.svg'
import { Filter } from '../components/Filter'

export function Home() {
	const { colors } = useTheme()
	const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
	const [orders, setOrders] = useState([
		{
			id: '123',
			patrimony: '123456',
			when: '18/07/2022 às 10:00',
			status: 'open'
		},
		{
			id: '412',
			patrimony: '321321',
			when: '05/07/2022 às 11:00',
			status: 'open'
		}
	])

	return (
		<VStack flex={1} pb={6} bg='gray.700'>
			<HStack
				w='full'
				justifyContent='space-between'
				alignItems='center'
				bg='gray.600'
				pt={12}
				pb={5}
				px={6}>
				<Logo />
				<IconButton icon={<SignOut size={25} color={colors.gray[300]} />}/>
			</HStack>

			<VStack flex={1} px={6}>
				<HStack w='full' mt={8} mb={4} justifyContent='space-between' alignItems='center'>
					<Heading color='gray.100'>
            Meus chamados
					</Heading>
					<Text color='gray.200'>3</Text>
				</HStack>
				<HStack space={3} mb={8}>
					<Filter
						title='Em andamento'
						type='open'
						onPress={() => setStatusSelected('open')}
						isActive={statusSelected === 'open'} />
					<Filter
						title='Finalizados'
						type='closed'
						onPress={() => setStatusSelected('closed')}
						isActive={statusSelected === 'closed'} />
				</HStack>

				<FlatList
					data={orders}
					keyExtractor={item => item.id}
					renderItem={({ item }) => <Text color='white'>{item.patrimony}</Text>}/>

			</VStack>



		</VStack>
	)
}
