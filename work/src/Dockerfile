FROM mongo:latest

# Set environment variables
ENV MONGO_INITDB_ROOT_USERNAME=selva
ENV MONGO_INITDB_ROOT_PASSWORD=selva123
ENV MONGO_INITDB_DATABASE=gettingstarted

# Copy initialization script to initialize the database
COPY mongo-init.js /docker-entrypoint-initdb.d/mongo-init.js:ro

# Expose the default MongoDB port
EXPOSE 27017
