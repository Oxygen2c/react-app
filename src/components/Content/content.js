import React from 'react';
import { Message } from './Message/messege';
import { Todo } from '../todo';

export const Content = () => {
  return (
    <section className="content">
        <Todo title = "List"></Todo>
        <Message message = "message 1"></Message>
        <Message message = "message 2"></Message>
        <Message message = "message 3"></Message>
    </section>
    );
}
