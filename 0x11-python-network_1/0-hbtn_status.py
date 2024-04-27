#!/usr/bin/python3
import urllib.request

# Define the URL to fetch
url = "https://alx-intranet.hbtn.io/status"

# Open a connection to the URL and automatically close it when done
with urllib.request.urlopen(url) as response:
    # Read the response body as bytes
    body_bytes = response.read()
    
    # Decode the response body as UTF-8
    body_utf8 = body_bytes.decode('utf-8')

# Print the response body with tabulation and additional information
print("Body response:")
print("\t- type:", type(body_bytes))  # Print the type of the response body (bytes)
print("\t- content:", body_bytes)      # Print the content of the response body as bytes
print("\t- utf8 content:", body_utf8)  # Print the content of the response body as UTF-8
