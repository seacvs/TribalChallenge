# Section2 - API Manual Testing

Let’s pretend we have an API for vets to add pets, update pet information and search for a pet. Make a list of all the test scenarios you will create to test it and what data will you use:


## POST Create new pet 
    Endpoint:
        Method: POST 
        URL: http://testchallenge.com/newPet


Responses code to be tested:

>## 201 - Success:
### Happy path, create new pet
    {
    "name":"Jordan",
    "petType":"dog",
    "age":1,
    "race":"Golden Retriever"
    }

### Cat, create another new pet 
    {
    "name":"Commander",
    "petType":"cat",
    "age":3,
    "race":"Dark cat"
    }

### Turtle, create another new pet
    {
    "name":"Katari",
    "petType":"Turtle",
    "age":20,
    "race":"Caguama"
    }

### Test name max length
    {
    "name":"Lorem ipsum dolor sit amet, consectetuer adipiscinLorem ipsum dolor sit amet, consectetuer adipiscin",
    "petType":"cat",
    "age":3,
    "race":"Dark cat"
    }

### Test petType max length
    {
   "name":"John",
   "petType":"Lorem ipsum dolor sit amet, consectetuer adipiscin",
   "age":3,
   "race":"Dark cat"
    }

### Test race max length
    {
    "name":"John",
    "petType":"Dog",
    "age":3,
    "race":"Lorem ipsum dolor sit amet, consectetuer adipiscin"
    }

### Test age double digit
    {
    "name":"John",
    "petType":"Dog",
    "age":99,
    "race":"Maltes"
    }
    
>## 400 - Bad Request:

### Missing name
    {
    "name":"",
    "petType":"Dog",
    "age":99,
    "race":"Lorem ipsum dolor sit amet, consectetuer adipiscin"
    }

### Missing petType
    {
    "name":"Jordan",
    "petType":"",
    "age":99,
    "race":"Chihuahua"
    }

### Missing age
    {
    "name":"Jordan",
    "petType":"Dog",
    "age":"",
    "race":"Chow-chow"
    }

### Missing race
    {
    "name":"",
    "petType":"Dog",
    "age":99,
    "race":""
    }

### Incorrect body request, name not string
    {
    name: "Jordan",
    "petType":"Dog",
    "age": "99",
    "race":"Husky"
    }

### Incorrect body request, object
    {
    "name": {Jordan},
    "petType":"Dog",
    "age": "99",
    "race":"Husky"
    }

### Incorrect body JSON format request
    {
    "name": "Jordan"
    "petType":"Dog",
    "age": "99",
    "race":"Husky"
    }

### Incorrect key name request
    {
    "Name": "Jordan" 
    "petType":"Dog",
    "age": "99",
    "race":"Husky"
    }

### Incorrect body request, key not found
    {
    "name": "Jordan"
    "petType":"Dog",
    "edad": "99",
    "race":"Husky"
    }

### Incorrect type for name key
    {
    "name": 123,
    "petType":"Dog",
    "age": "99",
    "race":"Husky"
    }

### Incorrect type for petType key
    {
    "name":"Jordan",
    "petType": 12,
    "age": "99",
    "race":"Husky"
    }

### Incorrect type for age key
    {
    "name":"Jordan",
    "petType":"Dog",
    "age": "99",
    "race":"Husky"
    }

### Incorrect type for race key
    {
    "name":"Jordan",
    "petType":"Dog",
    "age": "99",
    "race": 0
    }


>## 404 - Not Found:
### Filomeno Husky dog 99 not found
    {
    "name":"Filomeno",
    "petType":"Dog",
    "age": 99,
    "race":"Husky"
    }

### Captain Dark cat cat 3 not found
    {
    "name":"Commander",
    "petType":"cat",
    "age":3,
    "race":"Dark cat"
    }
    
### Incorrect race for turtle pet
    {
    "name":"Katari",
    "petType":"Turtle",
    "age":20,
    "race":"Green"
    }
    

>## 500 - Internal server error:

- Add an incorrect header/ token
  
- Interrupt connection while requesting

- Insert an error at code to trigger the server error


---

## PUT Create new pet 
    Endpoint:
        Method: PUT 
        URL: http://testchallenge.com/newPet/{Id}
    Headers:
        Content-Type: application/json


>## 200 - Success:
### Update age of Jordan dog, id: 1
    {
    "name":"Jordan",
    "petType":"dog",
    "age":2,
    "race":"Golden Retriever"
    }

### Create new Jordan dog husky, id: 40
    {
    "name":"Jordan",
    "petType":"dog",
    "age":4,
    "race":"Husky"
    }

>## 400 - Bad Request:
### Incorrect age type
    {
    "name":"Jordan",
    "petType":"dog",
    "age":"4",
    "race":"Husky"
    }

### Incorrect JSON
    {
    "name":"Jordan"
    "petType":"dog",
    "age":4,
    "race":"Husky"
    }

>## 404 - Not Found:
### Empty id, id:{}
    {}

>## 500 - Internal server error:
### Incorrect parameters
    {
    "hello": "Katari"
    }

---
## GET  Create new pet 
    Endpoint:
        Method: GET 
        URL: http://testchallenge.com/newPet/{Id}
    Headers:
        Content-Type: application/json

>## 200 - Success:
### Get Jordan 
    "Id": "1"
    
### Get Commander 
    "Id": "2"
    
### Get Katari 
    "Id": "3"
    

>## 400 - Bad Request:
### Get Katari, expected to fail
    "Id": "Katari"

### Get Husky type, expected  fail
    "Id": "Husky"

### Get race, expected  fail
    "race": "Husky"
    

>## 404 - Not Found:
### Don't exist
    "Id": "9999"

### Negative
    "Id": "-1"
    

>## 500 - Internal server error:
### Timeout
    Generate a timeout

### Disconnect from internet connection
    No internet

### Incorrect key/headers
    Send incorrect key or headers