import React, { useEffect } from 'react';
import {
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/Toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
  info: <FiInfo size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>

        {message.description && <p>{message.description}</p>}

        <button onClick={() => removeToast(message.id)} type="button">
          <FiXCircle />
        </button>
      </div>
    </Container>
  );
};

export default Toast;
