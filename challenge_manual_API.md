#Section2
# API Manual Testing

Let’s pretend we have an API for vets to add pets, update pet information and search for a pet. Make a list of all the test scenarios you will create to test it and what data will you use:


Method: POST
URL: http://testchallenge.com/newPet


Responses code to be tested:

201:
    {
   "name":"Jordan",
   "petType":"dog",
   "age":1,
   "race":"Golden Retriever"
    },
    {
   "name":"Commander",
   "petType":"cat",
   "age":3,
   "race":"Dark cat"
    },
    {
   "name":"Lorem ipsum dolor sit amet, consectetuer adipiscinLorem ipsum dolor sit amet, consectetuer adipiscin",
   "petType":"cat",
   "age":3,
   "race":"Dark cat"
    },
    {
   "name":"John",
   "petType":"Lorem ipsum dolor sit amet, consectetuer adipiscin",
   "age":3,
   "race":"Dark cat"
    },
    {
   "name":"John",
   "petType":"Dog",
   "age":3,
   "race":"Lorem ipsum dolor sit amet, consectetuer adipiscin"
    },
    {
   "name":"John",
   "petType":"Dog",
   "age":99,
   "race":"Lorem ipsum dolor sit amet, consectetuer adipiscin"
    }
    
400:
    -
404:
    -
500:
    -
201:
    -

