import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import { Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import prefectures from '../modules/prefectures';

export default function DateSearch(props: {
  startDate: Date,
  setStartDate: (date: Date) => void
  // eslint-disable-next-line react/require-default-props
  className?: string
}) {
  const { startDate, className = '', setStartDate } = props;
  registerLocale('ja', ja);

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
          return <select className="ms-3" style={inputStyle}>{prefecturesOption}</select>;
        })()}

      </div>
      <div className="my-4 mx-auto" style={{ width: '242px' }}>
        <DatePicker
          locale="ja"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          inline
        />
      </div>
      <div className="mb-4 mx-auto" style={{ width: '242px' }}>
        <Button className="d-flex align-items-center justify-content-center w-bold" style={{ width: '242px' }} variant="secondary">
          <AiOutlineSearch />
          検索
        </Button>
      </div>
    </div>
  );
}
