import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Backgroud } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBArber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

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
