# Hooks -> React have special type of funtion
1. *useEffect* -> koi function ya koi API call karna chata hu bina main function main process ko intrupt kiye too hum use kare hai useEffect ka ye side Stack mai chalta hai
2. *useRef* -> Kisi bhi DOM element ko pakadne ka kaam karta hai jese hum use karte hai document.qureySelector() iska use naa karke hum useRef ka use kare ye achi practice hai
3. *useReducer* -> Complex chizo ko ache se manage karta hai *bol sakte hai ki useContext ka advance verstion hai ye yaha complex Global context manage kar sakte hai*
4. *useContext* -> this will manages Globol context like appData -> section1 -> section2 (hume data section2 mai bhejna hai par humne data section1 se hi pass karna padega) par agar hum useContext use karte hai too data ko Global rakh dete hai or waha se use karte hai fiir without kisi or ko involved kiye huye *bol sakte hai ki useState ka advance verstion hai ye*
5. *useMomo* -> use to help in optimization unnecsary re-renders aboid karne ke liye
6. *useCallback* -> use to help in optimization unnecsary re-renders aboid karne ke liye
7. *useState* -> use to manage States go to one State to another State we will handle through useState (e.g, any button have line on hover , simple bina hover ke button have one state and jab hover kiya too underline aa gaya too btn ka woo dusara state hai ye State hai)

```
useSate => sate ko manage karne ke liye

useEffect => side effects handle karne ke liye (jaise API call, DOM manipulation, event listener)

useContext => global state ko consume karne ke liye without prop drilling

useReducer => complex state management ke liye (Redux jaisa chhota version).

useRef => mutable values hold karne ke liye jo re-render trigger na karein, ya DOM access karne ke liye.

useMemo & useCallback => optimization ke liye, unnecessary re-renders avoid karne ke liye.

```

