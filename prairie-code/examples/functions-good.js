function takeLunchHour() {
    clearSink();
    prepareLunch();
    eatLunch();
}

function clearSink() {
    var pan = sink.getItem( 'pan' );
    wash( pan );
    cabinets.addItem( pan );
}

function prepareLunch() {
    var sandwich = makeSandwich();
    var plate = cabinets.getItem( 'plate' );
    plate.hold( sandwich );

    var glass = cabinets.getItem( 'glass' );
    glass.fill( sink.getWater() );
}

function makeSandwich() {
    var bread = cabinets.getItem( 'bread' );
    var meat = frig.getItem( 'turkey' );
    var cheese = frig.getItem( 'cheese');
    var condiment = frig.getItem( 'honey mustard' );
    var sandwich = bread + meat + cheese + condiment;
    return sandwich;
}
