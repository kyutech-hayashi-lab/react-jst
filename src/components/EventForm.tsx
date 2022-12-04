import { graphqlOperation, GraphQLResult } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CreateEventInput, CreateEventMutation, CreateEventMutationVariables } from '../API';
import { createEvent } from '../graphql/mutations';

export async function addEventOperation(event: CreateEventInput) {
  const createdEvent = (await API.graphql(
    graphqlOperation(createEvent, {
      input: event,
    } as CreateEventMutationVariables),
  )) as GraphQLResult<CreateEventMutation>;
  return createdEvent;
}

export default function EventForm() {
  const [event, setEvent] = useState({
    title: '',
    user: '1',
    description: '',
    date: '',
    startTime: '',
    imagePath: 'https://hoge.com',
    placeID: '',
  });

  return (
    <div>
      <Form className="border rounded p-4 mt-4 mx-auto mw-100" style={{ width: '60em' }}>
        <Form.Group className="mb-2" controlId="title">
          <Form.Label>イベントタイトル</Form.Label>
          <Form.Control
            value={event.title}
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
            placeholder="タイトルを入力してください"
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="subscript">
          <Form.Label>イベント内容</Form.Label>
          <Form.Control
            value={event.description}
            onChange={(e) => setEvent({ ...event, description: e.target.value })}
            as="textarea"
            rows={3}
            placeholder="内容を入力してください"
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="place">
          <Form.Label>開催場所</Form.Label>
          <Form.Control placeholder="場所を入力してください" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="date">
          <Form.Label>開催日</Form.Label>
          <Form.Control
            value={event.date}
            onChange={(e) => setEvent({ ...event, date: e.target.value })}
            type="date"
            placeholder="開催日を選択してください"
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="startTime">
          <Form.Label>開始時刻</Form.Label>
          <Form.Control
            value={event.startTime}
            onChange={(e) => setEvent({ ...event, startTime: e.target.value })}
            type="time"
            placeholder="開始時刻を選択してください"
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formFile">
          <Form.Label>イベントイメージ</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Button
          className="mt-2 px-4"
          variant="secondary"
          onClick={() => {
            addEventOperation(event).catch((e) => {
              throw e;
            });
          }}
        >
          送信
        </Button>
      </Form>
    </div>
  );
}
