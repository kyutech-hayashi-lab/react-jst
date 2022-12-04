import React from 'react';
import { init, send } from '@emailjs/browser';
import { Button } from 'react-bootstrap';
import EventForm from '../components/EventForm';

export default function EventFormPage() {
  init('q5ScCMTEE8dwqodJ5');
  const click = () => {
    send('service_3k42d1k', 'template_ho5cp9v', { from_name: 'test',
      message: 'hoge' }).catch((err) => { throw err; });
  };

  return (
    <div>
      <EventForm />
      <Button onClick={() => click()}>テスト</Button>
    </div>
  );
}
