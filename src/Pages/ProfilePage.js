import React, { useState, useEffect } from 'react';
import {Separator, Cell, Avatar, Button, PanelHeader, View, Placeholder, Header, SimpleCell, Group, Panel, PanelHeaderBack } from "@vkontakte/vkui";
import Icon28NotificationOutline from '@vkontakte/icons/dist/28/notifications';



class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            activePanel: 'profileContent',
        };
    }




    render () {

        return(
            <View activePanel={this.state.activePanel}>
                <Panel id="profileContent">
                    <PanelHeader separator={true} style={{}} >Профиль</PanelHeader>
                    <Group title="User Data Fetched with VK Bridge">
                        <SimpleCell before={<Avatar size={48} src="https://sun3-12.userapi.com/c840336/v840336172/2ff95/aQLUJXryO2s.jpg" />} description="{your email}">Костик Миронов</SimpleCell>
                    </Group>
                    <Group>
                        <Header mode="secondary">Общая информация</Header>
                        <SimpleCell indicator="ST-105">Идентификатор</SimpleCell>
                        <SimpleCell indicator="Пользователь">Статус</SimpleCell>
                        <SimpleCell onClick={() => this.setState({ activePanel: 'emptyOne' })} expandable indicator="Активна">Подписка</SimpleCell>
                    </Group>
                    <Group>
                        <SimpleCell onClick={() => this.setState({ activePanel: 'empty' })} expandable before={<Icon28NotificationOutline/>} indicator="">О проекте</SimpleCell>
                    </Group>
                </Panel>
                <Panel id="emptyOne">
                    <PanelHeader left={<PanelHeaderBack  onClick={() => this.setState({ activePanel: 'profileContent' })}/>}>
                        Ты думал будет пейдж?
                    </PanelHeader>
                    <Placeholder>
                        А вот и нет
                    </Placeholder>
                </Panel>
                <Panel id="empty">
                    <PanelHeader left={<PanelHeaderBack  onClick={() => this.setState({ activePanel: 'profileContent' })}/>}>
                        Пуфто?
                    </PanelHeader>
                    <Placeholder>
                        <img src="https://lh3.googleusercontent.com/proxy/KptoRsfDPFNinOaCSKk-kcRDWr-n62yXJkDb8vmo_dTC32EfMcTTlxWcWtLi04MNhrCORQGVQC9JYnol36mbrqaUz49p1YRREviGIUV3"></img>
                    </Placeholder>
                </Panel>
            </View>
        );
    }

}

export default Profile;