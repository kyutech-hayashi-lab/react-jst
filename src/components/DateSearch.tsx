import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import { Button } from 'react-bootstrap';

export default function DateSearch(props: {
  startDate: Date,
  setStartDate: (date: Date) => void
}) {
  const { startDate, setStartDate } = props;
  registerLocale('ja', ja);
  return (
    <div
      className="border"
      style={{ padding: '45px' }}
    >
      <DatePicker
        locale="ja"
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        inline
      />
      <Button className="mt-2 fw-bold" style={{ width: '242px' }} variant="primary">検索</Button>
    </div>
  );
}
