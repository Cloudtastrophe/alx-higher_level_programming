#!/usr/bin/python3
import urllib.request
import sys

# Check if URL is provided as a command-line argument
if len(sys.argv) != 2:
    print("Usage: python script.py <URL>")
    sys.exit(1)

# Get the URL from command-line argument
url = sys.argv[1]

# Send a request to the URL and retrieve the response
with urllib.request.urlopen(url) as response:
    # Check if the 'X-Request-Id' header is present in the response
    if 'X-Request-Id' in response.headers:
        # Get the value of the 'X-Request-Id' header
        request_id = response.headers['X-Request-Id']
        print("Value of X-Request-Id:", request_id)
    else:
        print("X-Request-Id header not found in the response.")
