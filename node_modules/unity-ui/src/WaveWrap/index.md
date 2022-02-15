## WaveWrap

水波纹容器

Demo:

```tsx |
import React from 'react';
import { WaveWrap } from 'unity-ui';

export default () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // const testIn = (
  //   <div>
  //     {arr.map((item, index) => (
  //       <div>
  //        <WaveWrap bg="rgba(173,238,218,0.7)" key={index}>
  //           <div
  //             className="_demo_test"
  //             style={{
  //               background:'#ccc',
  //               margin:"20px auto",
  //               textAlign: 'center',
  //               border: '1px dashed #ccc',
  //               padding: '20px',
  //               overflow:'hidden',
  //               position: 'relative'
  //             }}
  //           >
  //             {item}_{index}
  //           </div>
  //        </WaveWrap>
  //     ))}
  //   </div>
  // );
  return (
    <div style={{ padding: '20px', width: '400px' }}>
      <WaveWrap bg="rgba(173,238,218,0.7)">
        <div
          className="_demo_test"
          style={{
            background: '#ccc',
            textAlign: 'center',
            border: '1px dashed #ccc',
            padding: '20px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          12313212
        </div>
      </WaveWrap>
    </div>
  );
};
```

### API

| 属性    | 说明       | 类型   | 必填 | 默认值          |
| ------- | ---------- | ------ | ---- | --------------- |
| bg      | 水波纹颜色 | string | 否   | rgba(0,0,0,0.1) |
| onClick | 点击事件   | any    | 否   | ()=>{}          |
