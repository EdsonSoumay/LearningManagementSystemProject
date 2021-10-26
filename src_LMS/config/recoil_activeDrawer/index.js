// import React from 'react';
// import {
//   RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,
// } from 'recoil';
// import {TextInput as Input, Text, View} from 'react-native';

// function App() {
//   return (
//     <RecoilRoot>
//          <TextInput />
//         <CharacterCount />
//     </RecoilRoot>
//   );
// }
// export default App


// ////Atom
// export const textState = atom({
//     key: 'textState', // unique ID (with respect to other atoms/selectors)
//     default: '1', // default value (aka initial value)
//   });



//   ////Selector
// export  const charCountState = selector({
//     key: 'charCountState', // unique ID (with respect to other atoms/selectors)
//     get: ({get}) => {
//       const text = get(textState);
        
//     //   return text.length;
//     console.log("Text:", text)
//     //   return text;
//     },
//   });

//   function CharacterCount() {
//     const count = useRecoilValue(charCountState);
//     return (<Text>Character Count: {count}</Text>);
//   }


import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '1', // default value (aka initial value)
  });
  
  
export   const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState);
        
    //   return text.length;
    // console.log("Text:", text)
      return text;
    },
  });
  
  