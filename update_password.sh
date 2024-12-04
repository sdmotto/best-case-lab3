#!/bin/bash

# Check if a password argument was provided
if [ -z "$1" ]; then
  echo "Usage: $0 <new_password> [heroku]"
  exit 1
fi

# Assign the new password from the command-line argument
new_password="$1"

# Check if the second argument is "heroku"
if [ "$2" == "heroku" ]; then
  # Update the CORRECT_PASSWORD variable on Heroku
  echo "Updating CORRECT_PASSWORD on Heroku..."
  heroku config:set CORRECT_PASSWORD="$new_password" --app polar-woodland-68448
  echo "Heroku CORRECT_PASSWORD updated successfully."
else
  # Check if the .env file exists
  if [ ! -f .env ]; then
    echo ".env file not found!"
    exit 1
  fi

  # Update the CORRECT_PASSWORD variable in the local .env file
  if grep -q "^CORRECT_PASSWORD=" .env; then
    # If the variable exists, update it
    sed -i "s/^CORRECT_PASSWORD=.*/CORRECT_PASSWORD=$new_password/" .env
  else
    # If the variable doesn't exist, add it
    echo "CORRECT_PASSWORD=$new_password" >> .env
  fi

  echo "Local .env CORRECT_PASSWORD updated successfully."
fi