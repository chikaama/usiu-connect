def uber_route_agent(percept):
    """
    Uber Route Navigation Agent
    Percept: [location, road_status, preference]
      - location: current position (e.g., 'Thika', 'Highway', 'Bypass')
      - road_status: 'Clear', 'Traffic', 'Toll'
      - preference: 'Comfort' or 'Cost'
    """

    location, road_status, preference = percept

    # Rule 1: If destination is Nairobi town centre
    if location == 'Nairobi':
        return 'Stop - Destination Reached'

    # Rule 2: If traffic jam and preference is comfort → reroute
    if road_status == 'Traffic' and preference == 'Comfort':
        return 'Take Bypass for smoother ride'

    # Rule 3: If toll road and preference is cost → avoid toll
    if road_status == 'Toll' and preference == 'Cost':
        return 'Take Free Road to save money'

    # Rule 4: Default action → continue forward
    return 'Move Forward'


# --- Simulation ---
test_percepts = [
    ['Thika', 'Clear', 'Comfort'],
    ['Highway', 'Traffic', 'Comfort'],
    ['Bypass', 'Toll', 'Cost'],
    ['Nairobi', 'Clear', 'Comfort']
]

for percept in test_percepts:
    action = uber_route_agent(percept)
    print(f"Percept: {percept} → Action: {action}")
