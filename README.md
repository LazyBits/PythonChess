# PythonChess
Wadup y'all this is chess, but made with Python yo.

Plans
  Store whole board in 1 row in DB.  Update it each move.  Will contain JSON object for entire board state. 
  Will be updated via rest by simple object with only last piece's position and new position.
  OAuth with g+ in future.  Using dgango accounts in near future, global instance for first build.
  
  
  Step 1: Board like pass and play chess with no rules.  
  Step 2: Serve from django and send deltas to API & Persist ~~deltas~~ whole board state in  game in DB.  
  step 3: Validate moves.  
  Step 4: Make games session based.  
