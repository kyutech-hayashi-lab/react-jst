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
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>イベントタイトル</Form.Label>
          <Form.Control placeholder="タイトルを入力してください" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="subscript">
          <Form.Label>イベント内容</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="内容を入力してください"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="place">
          <Form.Label>開催場所</Form.Label>
          <Form.Control placeholder="場所を入力してください" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
          <Form.Label>開催日時</Form.Label>
          <Form.Control type="date" placeholder="日時を選択してください" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
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
