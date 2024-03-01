FROM python:3.9-slim-buster

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir fastapi uvicorn redis requests openai langchain python-dotenv postgres psycopg2-binary pgvector tiktoken langsmith

# install postgresql client
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

# Copy wait-for-postgres.sh and make it executable
COPY ./wait-for-postgres.sh /wait-for-postgres.sh
RUN chmod +x /wait-for-postgres.sh

EXPOSE 80

ENV LANGCHAIN_TRACING_V2=true
ENV LANGCHAIN_API_KEY=ls__d9527b266a48484691399aeca3fc6852
ENV LANGCHAIN_ENDPOINT=https://api.smith.langchain.com

CMD ["/wait-for-postgres.sh", "postgres", "uvicorn", "app:app", "--host", "0.0.0.0", "--port", "80"]
