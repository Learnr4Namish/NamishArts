import requests
url = "https://namishvolter.herokuapp.com/query"
def askName():
    userName = input("Welcome to NamishVolter. May I know your name please?\n")
    if len(userName) < 1:
        print("Invalid input received!")
        askName()
    if userName == "":
        print("Invalid input received!")
        askName()    
    def askQues():
        userQues = input("Welcome to NamishVolter " + userName + " ! What do you want to ask me?\n")
        if len(userQues) < 1:
            print("Invalid input received!")
            askQues()
        if userName == "":
            print("Invalid input received!")
            askQues()
        botObj = {'ques' : userQues, 'name' : userName}
        serverResponce = requests.post(url, json = botObj)
        print(serverResponce.text)
    askQues()      
askName();        
