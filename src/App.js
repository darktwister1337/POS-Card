import {
    View,
    Snackbar
} from '@vkontakte/vkui';
import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import AuthorizationPage from "./panels/AuthorizationPage";
import Home from "./panels/Home";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Icon24Error from "@vkontakte/icons/dist/24/error";

const ROUTES = {
    AUTH: 'auth',
    HOME: 'home',
};

const App = () => {
    const [activePanel, setActivePanel] = useState(ROUTES.HOME);
    const [fetchedUser, setUser] = useState(null);

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });

        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
        }

        fetchData();
    }, []);

    return (
        <View activePanel={activePanel}>
            <Home id={ROUTES.HOME} fetchedUser={fetchedUser} />
        </View>
    );
}

export default App;