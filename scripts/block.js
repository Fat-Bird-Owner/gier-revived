const wall = extend(Wall, "terrible-conveyor", {
  // various overrides...
  size: 3,
  health: 200,
  onDestroyed(){
  Vars.ui.hudfrag.showToast("Pathetic.");
  kill();
  } 
});
