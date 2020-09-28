import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import Entry from './Entry';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');  // Какая-то инициализация от вк
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => { // Здесь подпись на bridge, чтобы получить начальные данные о пользователе
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});


		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData(); // Всос данных из bridge
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};




	return (
			<Entry></Entry>         // Тело приложения
	);
}




export default App;

