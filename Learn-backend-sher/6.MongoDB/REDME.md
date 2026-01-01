# Data Storage:
## Aisa kuch jaha par hum saare user ki info store kar sakte hai __ file - data.txt
## Database isme hum kuch bhi chize store kar sakte hai
### Type of DBS = SQL | NoSQL
-- SQL => tables form data store
-- NoSQL -> object form data store
    {
        name: "vishal",
        age: 22
    }

-- Backend have two server Application server and DataBase server
--- Application server -> node, express it can handles routes or all things on not handle database
--- DataBase server -> handle database
---- Database -> collections -> Documents
CODE
----------------------------------------------------------



CODE                        DATABASE
----------------------------------------------------------
mongoose.connect   ->       database create
model create       ->       collection
CREATE code        ->       documents


# Terminologies - collections, documents, schemas, keys, models
## collections => In database attribute name was collections like (products, user)
## documents => A particular data of one things in a collection 
## schemas
## keys
## models

# Installation
```
npm init -y
npm i express
npm i mongoose
```