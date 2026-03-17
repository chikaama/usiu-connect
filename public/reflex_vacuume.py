def reflex_vacuum_agent(percept):
    """
    Simple reflex vacuum agent for a two-location world (A and B).
    Percept: [location, status] where location is 'A' or 'B',
             and status is 'Dirty' or 'Clean'.
    Rules:
      - If status is Dirty → Suck
      - If location is A and Clean → Right
      - If location is B and Clean → Left
    """
    # Validate percept format
    if len(percept) != 2:
        return None  # Invalid percept

    location, status = percept  # unpack values

    if status == 'Dirty':
        return 'Suck'
    elif location == 'A' and status == 'Clean':
        return 'Right'
    elif location == 'B' and status == 'Clean':
        return 'Left'
    else:
        return None  # No valid action


# --- Simulation / Test Cases ---
test_percepts = [
    ['A', 'Dirty'],   # Expect: Suck
    ['A', 'Clean'],   # Expect: Right
    ['B', 'Dirty'],   # Expect: Suck
    ['B', 'Clean']    # Expect: Left
]

for percept in test_percepts:
    action = reflex_vacuum_agent(percept)
    print(f"Percept: {percept} → Action: {action}")
