FROM postgres:alpine

# Copy scripts into the Docker entrypoint directory
COPY docker/postgres/initialize-db.sh /docker-entrypoint-initdb.d/
COPY docker/postgres/initdb/ /docker-entrypoint-initdb.d/

# Make sure the shell script is executable
RUN chmod +x /docker-entrypoint-initdb.d/initialize-db