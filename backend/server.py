from fastapi import FastAPI

app = FastAPI()

@app.get("/saludo")
async def saludo ():    
    return "hola" 