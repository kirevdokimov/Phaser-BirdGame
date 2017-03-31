
var ui = {};

var leadback;
var textA;

function loadUI(){

    ui.breadtext = g.add.text(16, 48,'Bread parts : '+breadparts, { fill: '#000000' });

    /*ui.tlb = g.add.button(80, g.world.centerY - 80, 'button', ui.click, this);
    ui.tlb.id = 0;
    ui.tlb.anchor.setTo(0.5);

    ui.trb = g.add.button(g.world.width -80, g.world.centerY - 80, 'button', ui.click, this);
    ui.trb.id = 1;
    ui.trb.anchor.setTo(0.5);

    ui.blb = g.add.button(80, g.world.centerY + 80, 'button', ui.click, this);
    ui.blb.id = 2;
    ui.blb.anchor.setTo(0.5);

    ii.brb = g.add.button(g.world.width -80, g.world.centerY + 80, 'button', ui.click, this);
    ui.brb.id = 3;
    ui.brb.anchor.setTo(0.5);*/

    var graphics = g.add.graphics(0, 0);

    graphics.beginFill(0xDADADA);
    graphics.drawRect(0, 0, g.world.width, g.world.height);

    leadback = g.add.sprite(0, 0, graphics.generateTexture());
    graphics.destroy();
    //leadback.visible = false;

    var textAstyle = {
        font: "40px Arial",
        fill: "#000000",
        wordWrap: true,
        wordWrapWidth: leadback.width,
        //boundsAlignH: "center", boundsAlignV: "top"
        align: "center"/*,
        backgroundColor: "#ffff00"*/ };

    textA = g.add.text(0, 0,'You scored\n\n502', textAstyle);
    textA.anchor.set(0.5,0);
    textA.x = g.world.centerX;
    textA.y = g.world.height*(1/8);


    var textBstyle = {
        font: "32px Arial",
        fill: "#000000",
        wordWrap: true,
        wordWrapWidth: leadback.width};
    
    var textB = g.add.text(0, 0,'1. Bronydell - 1024\n2. Nobi - 502\n3. Jacksepticeye - 501', textBstyle);
    textB.anchor.set(0.5,0);
    textB.x = g.world.centerX;
    textB.y = g.world.height*(3/8);
        //\n1. Bronydell - 1024\n2. Nobi - 502\n3.Jacksepticeye - 501

}

ui.click = function(button){
    console.log('Button click : ' + button.id);
    bird.jumpTo(button.id);
};

function showLead(){
    leadback.visible = true;
}
