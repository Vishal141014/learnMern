// Form handling and working with the forms
    // handle backend process of form and making sure the data coming from any frontend library, frmaework, templating engines, we still handle it at the backend process

// Session Cookie
    // hum log kuch bhi data frontend par brower par rakh sakte hai and jab bhi aap kuch bhi reqeust bakend par karoge wo fe par saved data automatically backend par chala jayega

    // after login i need to save any string with particular login person for indentification of person this is Cookie with was stored on the forntend browser

    // session wo hai jo cookie or backend server ko connect karta hai jo ki string hai naame ke baad woo session kaa kaam karta hai(simply process login to logout tak ek session hai)

    // hum plain text bharte hai form mai par server par secure form mai hash blob mai waha hai jo ki direct readable nah hoti hai too use liye inn line ka use karna hota hai jise ki json based data ko readalbe bana deta hai
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

