from flask import Flask
from flask_pymongo import PyMongo
import os
import random

app = Flask(__name__)
# MONGO_URL = os.environ.get('MONGODB_URI')
# app.config["MONGO_URI"] = MONGO_URL
# app.config["MONGO_URI"] = 'mongodb://localhost:27017/testDB'
app.config["MONGO_URI"] = 'mongodb+srv://admin:12345@cluster0-wtnnv.mongodb.net/test?retryWrites=true&w=majority'
mongo = PyMongo(app)

def addEntry(new_entry):
    questions = mongo.db.questions
    questions.insert_one(new_entry)
    return

# def verify(email, code):
#     users = mongo.db.users
#     correct_users = (users.find({"email": email},{'code': 1}))
#     correct_code = ''
#     for x in correct_users:
#         correct_code = str(x['code'])
#     print(correct_code)
#     if (correct_code == str(code)):
#         return correct_code, 200
#     else:
#         return code, 403

# def updateUser(email):
#     code = random.randint(100000,999999)
#     users = mongo.db.users
    
#     print(email)
#     print(users.find({"email": email}).count())

#     if (users.find({"email": email}).count() != 0):
#         users.update_one({"email": email},{ '$set': {"code":code} })
#         print("User already exists")
#     else:
#         print("User does not exist")
#         new_user = {
#             "email": email,
#             "code": code
#         }
#         users.insert_one(new_user)
    
#     return code

# def getUsers():
#     contents = list(mongo.db.users.find())
#     returnList = []
#     for content in contents:
#         ele = {'email': content['email'], 
#                'code': content['code']}
#         returnList.append(ele)
#     return returnList

# def getEntries():
#     contents = list(mongo.db.entries.find())
#     returnList = []
#     for content in contents:
#         if content['receiver_email'] == '':
#             ele = {'giver_email': content['giver_email'], 
#                    'receiver_email': content['receiver_email'],
#                    'location': content['location'],
#                    'time': content['time']}
#             returnList.append(ele)
#     return returnList



# # (def modifyEntry) this function adds the receiver email to entry
# def modifyEntry(entry, receiver):
#     entries = mongo.db.entries
#     entries.update_one(entry,{ '$set': receiver })

#     return

# def deleteUsers():
#     entries = mongo.db.users
#     entries.remove()

#     return

# def deleteEntries():
#     entries = mongo.db.entries
#     entries.remove()

#     return