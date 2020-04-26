import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Backgroud } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBArber" />

      <form>
        <h1>Faça seu logon</h1>

        <input type="text" placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgotPassword">Esqueci minha senha</a>
      </form>

      <a href="createAccount">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Backgroud>sdfsdf</Backgroud>
  </Container>
);

export default SignIn;
