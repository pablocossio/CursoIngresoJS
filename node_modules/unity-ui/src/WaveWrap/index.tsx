import React, { FC, useState, useRef } from 'react';
import classNames from 'classnames';
import './index.less';

interface WaveWrapProps {
  children?: any;
  className?: string;
  onClick?: any;
  bg?: string;
}

const WaveWrap: FC<WaveWrapProps> = ({
  children,
  className = '',
  onClick = () => {},
  bg = 'rgba(0,0,0,0.1)',
  ...other
}) => {
  const waveWrap: any = useRef();
  const [showModal, setShowModal] = useState(false);
  const [addIn, setAddIn] = useState(false);
  const [clX, setClX] = useState(0);
  const [clY, setClY] = useState(0);
  const clickFn = (e: any) => {
    // e.stopPropagation();
    // console.log('clX:', clX)
    // console.log('clY:', clY)
    onClick(e);
    const rect = e.target.getBoundingClientRect();
    const width = rect.width / 4;
    const height = rect.height / 4;
    const xx = rect.left;
    const yy = rect.top;
    const ww = width > height ? width : height;
    let c: any = document.getElementById('wave_shine');
    c.style.position = 'absolute';
    c.style.height = `${ww}px`;
    c.style.width = `${ww}px`;
    c.style.left = `${clX - xx}px`;
    c.style.top = `${clY - yy}px`;
    setShowModal(false);
    setAddIn(true);
    setTimeout(() => {
      setShowModal(false);
      setAddIn(false);
      c.style.height = '0';
      c.style.width = '0';
    }, 400);
  };
  const testFn = (e: any) => {
    setClX(e.clientX);
    setClY(e.clientY);
  };
  return (
    <div
      className={`dumi_wave_wrap ${className}`}
      onClick={clickFn}
      {...other}
      ref={waveWrap}
      onMouseDown={testFn}
    >
      {children}
      <div
        className={classNames(
          addIn ? 'wave-animation' : '',
          'dumi_wave_wrap_shine',
        )}
        id="wave_shine"
        style={{
          background: bg,
          display: showModal ? 'block' : '',
        }}
      ></div>
    </div>
  );
};

export default WaveWrap;
