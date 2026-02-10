function setupUI(){
    let overlay = Vars.ui.hudGroup.find("statustable");
    if(!overlay) return;

    overlay.row();

    let tab = new Table();
    overlay.add(tab).bottom().left();

    tab.table(Tex.pane, table => {

        table.button(
            new TextureRegionDrawable(Blocks.surgeWall.uiIcon),
            Styles.none,
            () => {

                Vars.ui.showTextInput("", "Cheat", 32768, "", false, text => {

                    if(text == "dagger"){
                        let u = Vars.player.unit();
                        if(!u) return;

                        UnitTypes.dagger.spawn(u.team, u.x, u.y, u.rotation);
                    }

                });

            }
        );

    });

    tab.visibility = () => Vars.ui.hudfrag.shown && !Vars.net.client();
}

module.exports = {
    setupUI: setupUI,
}
