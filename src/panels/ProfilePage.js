import React, {useState, useEffect} from 'react';
import {
    Separator,
    Cell,
    Avatar,
    Button,
    PanelHeader,
    View,
    Placeholder,
    Header,
    SimpleCell,
    Group,
    Panel,
    PanelHeaderBack,
    Title
} from "@vkontakte/vkui";
import Icon28NotificationOutline from '@vkontakte/icons/dist/28/notifications';

const ROUTES = {
    PROFILE: 'profile',
    SUBSCRIBE: 'subscribe',
    ABOUT: 'about',
};

const Profile = ({fetchedUser}) => {
    const [activePanel, setActivePanel] = useState(ROUTES.PROFILE);

    return (
        <View activePanel={activePanel}>
            <Panel id={ROUTES.PROFILE}>
                <PanelHeader separator={true} style={{}}><Title level="2"
                                                                weight="bold">Профиль</Title></PanelHeader>
                <Group title="User Data Fetched with VK Bridge">
                    <SimpleCell before={<Avatar size={48}
                                                src={fetchedUser.photo_200}/>}
                                description="email@yandex.ru">{fetchedUser.first_name} {fetchedUser.last_name}</SimpleCell>
                </Group>
                <Group>
                    <Header mode="secondary">Общая информация</Header>
                    <SimpleCell indicator="ST-105">Идентификатор</SimpleCell>
                    <SimpleCell indicator="Пользователь">Статус</SimpleCell>
                    <SimpleCell onClick={() => setActivePanel(ROUTES.SUBSCRIBE)} expandable
                                indicator="Активна">Подписка</SimpleCell>
                </Group>
                <Group>
                    <SimpleCell onClick={() => setActivePanel(ROUTES.ABOUT)} expandable
                                before={<Icon28NotificationOutline/>} indicator="">О проекте</SimpleCell>
                </Group>
            </Panel>
            <Panel id={ROUTES.SUBSCRIBE}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => setActivePanel(ROUTES.PROFILE)}/>}>
                    Подписка
                </PanelHeader>
            </Panel>
            <Panel id={ROUTES.ABOUT}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => setActivePanel(ROUTES.PROFILE)}/>}>
                    О проекте
                </PanelHeader>
            </Panel>
        </View>
    );

}

export default Profile;