# Context API
***
We know data always flow in UP to DOWN ward 
e.g., MAIN -> APP -> NAVBAR -> USERPROFILE -> USERNAME

Upar ek problem hai mujhe data APP se USERNAME mai bhejna hai par mujhe uske sare prents se ho kar jana padega mai sidha APP -> USERNAME par data nahi bhej pa raha hu

Badi APP's mai mujhe data centralization karne ki jarurat hoti hai kuki mai agar itne sare process se data bhejunga too data slow jayega 

Data Centralize hoga too use koi bhi direct access kar sakta hai too koi bhi component use direct access kar lega

Yahi kaam hota hai **Context API** ka jab hum ye use karte hai too Data Centetrized ho jata hai

**Context API ke liye Hame sirf 3 chize chiaye**
1. Context -> System creataion
2. Provider -> Provide the our system
3. Use Context -> Use our system by other's
***