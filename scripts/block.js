const wall = extend(Wall, "terrible-conveyor", {

  onDestroyed(tile){
    Vars.ui.hudfrag.showToast("Pathetic.");
    this.super$onDestroyed(tile);
  }

});

// set stats AFTER creation
wall.size = 3;
wall.health = 200;
