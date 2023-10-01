import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import { Button } from 'react-bootstrap';
import prefectures from '../modules/prefectures';
import { useAppSelector } from '../ducks/hooks';
import { eventDateSelector } from '../ducks/eventsSlice';

export default function DateSearch(props: {
  date: Date | null,
  setDate: (date: Date | null) => void
  pref: string,
  setPref: (pref: string) => void,
  // eslint-disable-next-line react/require-default-props
  className?: string
}) {
  const { date, setDate, pref, setPref, className = '' } = props;
  registerLocale('ja', ja);

  const eventDate = useAppSelector(eventDateSelector);
  const reset = () => {
    setPref('');
    setDate(null);
  };

  const inputStyle = {
    height: 37,
    width: 160,
    borderWidth: 0.5,
    borderRadius: 5,
  };

  const searchTitle = {
    fontSize: 18,
  };

  return (
    <div className={className} style={{ width: '242px' }}>
      <div className="mt-4 mx-auto d-flex align-items-center" style={{ width: '242px' }}>
        <span style={searchTitle}><small>都道府県</small></span>

        {(() => {
          const prefecturesOption: JSX.Element[] = [
            <option value="">都道府県を選択</option>,
          ];
          for (let i = 0; i < prefectures.length; i += 1) {
            prefecturesOption.push(<option>{prefectures[i]}</option>);
          }
          return <select className="ms-3" style={inputStyle} value={pref} onChange={(v) => setPref(v.target.value)}>{prefecturesOption}</select>;
        })()}

      </div>
      <div className="my-4 mx-auto" style={{ width: '242px' }}>
        <DatePicker
          locale="ja"
          selected={date}
          highlightDates={eventDate}
          onChange={(d: Date) => setDate(d)}
          inline
        />
      </div>
      <div className="mb-4 mx-auto" style={{ width: '242px' }}>
        <Button className="d-flex align-items-center justify-content-center w-bold" onClick={reset} style={{ width: '242px' }} variant="secondary">
          選択をリセット
        </Button>
      </div>
    </div>
  );
}
