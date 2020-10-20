import {
    View,
    Panel,
    PanelHeader,
    Root
} from '@vkontakte/vkui';
import Icon28NewsfeedOutline from "@vkontakte/icons/dist/28/newsfeed";
import Icon28ServicesOutline from "@vkontakte/icons/dist/28/favorite_outline";
import Icon28UserCircleOutline from "@vkontakte/icons/dist/28/profile";
import ProfilePage from "./ProfilePage";
import React from "react";
import PartnersPage from "./PartnersPage";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import FormStatus from "@vkontakte/vkui/dist/components/FormStatus/FormStatus";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Home from "./Home";


class AuthorizationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePanel: 'authPanel'
        }
    }

    render() {
        return (
            <View activePanel={this.state.activePanel} id="authPage">
                <Panel id="authPanel">
                    <PanelHeader>
                        Регистрация
                    </PanelHeader>
                    <FormLayout>
                        <FormStatus header="Вы не зарегистрированы в системе!" mode="error">
                            Необходимо ввести данные для регистрации
                        </FormStatus>
                        <Input type="email" top="Почта" defaultValue="admin@yandex.ru"/>
                        <FormLayoutGroup top="Пароль"
                                         bottom="Пароль может содержать только латинские буквы и цифры.">
                            <Input type="password" placeholder="Введите пароль"/>
                            <Input type="password" placeholder="Повторите пароль"/>
                        </FormLayoutGroup>
                        <Button size="xl"
                                onClick={() => this.setState({activePanel: 'navPanel'})}>Зарегистрироваться</Button>
                    </FormLayout>
                </Panel>
                <Panel id="navPanel">
                    <Home/>
                </Panel>
            </View>
        )
    }
}

export default AuthorizationPage
