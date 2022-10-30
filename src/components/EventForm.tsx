import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function EventForm() {
  return (
    <div>
      <Form
        className="border rounded p-4 mt-4 mx-auto mw-100"
        style={{ width: '60em' }}
      >
        <Form.Group className="mb-2" controlId="title">
          <Form.Label>イベントタイトル</Form.Label>
          <Form.Control placeholder="タイトルを入力してください" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="subscript">
          <Form.Label>イベント内容</Form.Label>
          <Form.Control
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
          <Form.Control type="date" placeholder="開催日を選択してください" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="startTime">
          <Form.Label>開始時刻</Form.Label>
          <Form.Control type="time" placeholder="開始時刻を選択してください" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="endTime">
          <Form.Label>終了時刻</Form.Label>
          <Form.Control type="time" placeholder="終了時刻を選択してください" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formFile">
          <Form.Label>イベントイメージ</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Button className="mt-2 px-4" variant="secondary" type="submit">
          送信
        </Button>
      </Form>
    </div>
  );
}
