import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

export default function Header() {
  const buttonStyle = {
    width: 120,
    border: 0,
    background: 'transparent',
  };
  return (
    <div className="d-flex px-2 border-bottom border-2">
      <h3 className="mt-4 ms-5"><strong>ビーチクリーンクラウドサービス</strong></h3>
      <div className="ms-auto d-flex mt-3">
        <a href="/" className="text-dark">イベント主催者はこちら</a>
        <button type="button" style={buttonStyle} className="ms-5 mt-5 d-flex align-items-center">
          <span>メニュー</span>
          <h2 className="ms-2"><HiOutlineMenu /></h2>
        </button>
      </div>
    </div>
  );
}
