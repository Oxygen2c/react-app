import React from 'react';
import { Message } from './Message/messege';
import { Todo } from '../todo';
import { Timer } from './Clock';
import { Data } from './Tick';
export const Content2 = () => {
  return (
    <section className="content">
        <Todo title = "List"></Todo>
        <Timer/>
        <Data/>
        <Message message = "message 4"></Message>
        <Message message = "message 5"></Message>
        <Message message = "message 6"></Message>
    </section>
    );
}
