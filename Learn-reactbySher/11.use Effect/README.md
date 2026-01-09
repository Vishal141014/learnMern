Jab Jab hamari state ki value change ho rahi hai tab tab useEffect bhi chalega this called mounting
```
useEffect(function(){
    console.log('Use Effect is running-----')
  })
```
but agar hum useEffect mai ek dependencie pass kar denge too woo ek baar hi chalega ya fiir ek baar hi mounting hogi
```
useEffect(function(){
    console.log('Use Effect is running-----')
  }, [])
```