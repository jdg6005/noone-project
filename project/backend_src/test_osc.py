"""
Quick test script to send an OSC message to Unreal Engine's OSC server.
Install dependency: pip install python-osc
"""

from pythonosc import udp_client

UNREAL_IP = "10.201.120.85"
UNREAL_OSC_PORT = 8000  # Match the port configured in your UE OSC Server

client = udp_client.SimpleUDPClient(UNREAL_IP, UNREAL_OSC_PORT)

address = "/test/message"
args = ["hello from python", 42, 1.5]

client.send_message(address, args)
print(f"Sent OSC message to {UNREAL_IP}:{UNREAL_OSC_PORT} -> {address} {args}")
