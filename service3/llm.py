import openai
from langchain.chat_models import ChatOpenAI
from dotenv import find_dotenv, load_dotenv
import os



load_dotenv(find_dotenv())
openai.api_key = os.getenv("OPENAI_API_KEY")

chat = ChatOpenAI(temperature=0)
