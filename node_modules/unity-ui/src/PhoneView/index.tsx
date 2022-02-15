import React, { FC } from 'react';
import './index.less';

interface DeviceProps {
  mode?: string;
  url?: string;
  children?: any;
}

const PhoneView: FC<DeviceProps> = ({ url, mode = 'div', children }) => {
  return (
    <div className={`dumi_device_wrapper`}>
      <section className="dumi_device_box">
        {mode === 'url' && (
          <iframe
            className="dumi_device_con"
            src={url}
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        )}
        {mode === 'div' && <div className="dumi_device_con">{children}</div>}
      </section>
    </div>
  );
};

export default PhoneView;
