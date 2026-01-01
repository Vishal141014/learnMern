initialize a project with npm
express install

# Setting up parsers for form
```
app.use(express.json())
app.use(express.urlencoded({extended: true}));

```

# settting us ejs for ejs pages
npm i ejs
setup ejs as a view for view engine

# Setting up puclic static files
app.use(express.static(path.join(__dirname, 'public')));

_dirname = use to give path of current folder

public = use to give path of public tak ka path

# Dyanmic routing
-- Hum log kai baar kuch routes dekhte hai unmain sirf ek hi hissa change hota hai  jese /author/vishal or /author/nikita or /author/ansh
/author same hai too hum isme bhot sare routes naa bana kar /author ko same rahte hai or /author/ iske baad wala route dyanamic routing ki help se akrte hai

- sabse phle browser par jayenge
- url likhiyenge apna jo hame chiaye or enter dabayenge
- abb uss url route ko create karnge
- res bhejenge kuch bhi
- ab usi rul ko agar dyamic bnana hai to realise karo ki kon sa part dynamic banana hai too uss part ke agare rout mai ':' laga doo
-- for finding userName of particular route use "req.params<- iska matlab hai jiske age colun hai 
req.params.user_name

## dynamic routing 
## how to get data comming from forntend at backend route

