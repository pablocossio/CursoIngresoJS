## PhoneView

手机预览

Demo:

模式为 url

```tsx |
import React from 'react';
import { PhoneView } from 'unity-ui';

export default () => {
  return (
    <div style={{ padding: '20px' }}>
      <PhoneView url={`${window.location.origin}/unity-ui/#/`} mode={'url'} />
    </div>
  );
};
```

模式为 div

```tsx |
import React from 'react';
import { PhoneView } from 'unity-ui';

export default () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const testIn = (
    <div>
      {arr.map((item, index) => (
        <div
          className="_demo_test"
          style={{
            // margin:"80px auto",
            textAlign: 'center',
            background: '#adeeda',
            border: '1px dashed #ccc',
            padding: '20px',
          }}
          key={index}
        >
          {item}_{index}
        </div>
      ))}
    </div>
  );
  return (
    <div style={{ padding: '20px' }}>
      <PhoneView mode={'div'} children={testIn} />
    </div>
  );
};
```

### API

| 属性     | 说明                                              | 类型   | 必填 | 默认值 |
| -------- | ------------------------------------------------- | ------ | ---- | ------ |
| mode     | 模式,url：iframe 预览模式；div：自己填充 children | string | 是   | 无     |
| url      | iframe 的 URL 地址                                | string | 否   | 无     |
| children | 需要展示在手机里的子组件                          | any    | 否   | 无     |
