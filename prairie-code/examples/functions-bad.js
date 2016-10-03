function takeLunchHour() {
    prepareLunch();
    eatLunch();
}

function prepareLunch() {
    var bread = cabinets.getItem( 'bread' );
    var meat = frig.getItem( 'turkey' );
    var cheese = frig.getItem( 'cheese');
    var condiment = frig.getItem( 'honey mustard' );
    var sandwich = bread + meat + cheese + condiment;

    var plate = cabinets.getItem( 'plate' );
    plate.hold( sandwich );

    var pan = sink.getItem( 'pan' );
    wash( pan );
    cabinets.addItem( pan );

    var glass = cabinets.getItem( 'glass' );
    glass.fill( sink.getWater() );
}
