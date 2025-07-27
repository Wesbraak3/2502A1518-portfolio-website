FROM postgres:alpine

# Copy the init scripts into the official init directory
COPY initdb/ /docker-entrypoint-initdb.d/
COPY initialize.sh /docker-entrypoint-initdb.d/initialize.sh

# Make sure the script is executable (optional but common)
RUN chmod +x /docker-entrypoint-initdb.d/initialize.sh