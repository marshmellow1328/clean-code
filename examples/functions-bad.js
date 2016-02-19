function getOutput( phone, apiKey ) {
    var errors = validateInputs( phone, apiKey );
    if( errors ) {
        return new ErrorResponse();
    }

    trackUsage( apiKey );

    return addVariablesToTemplate( phone );
}

function addVariablesToTemplate( phone ) {
    var variables = new Map();
    variables.add( 'google', 'https://www.google.com' );
    variables.add( 'phone', phone );

    try {
        var output = template.render( variables );
        return new SuccessResponse( output );
    }
    catch( error ) {
        return new ErrorResponse();
    }
}


function prepareLunch() {
    var bread = cabinets.getItem( 'bread' );
    var meat = frig.getItem( 'turkey' );
    var cheese = frig.getItem( 'cheese');
    var condiment = frig.getItem( 'honey mustard' );
    var sandwich = bread + meat + cheese + condiment;

    var plate = cabinets.getItem( 'plate' );
    plate.hold( sandwich );

    var glass = cabinets.getItem( 'glass' );
    glass.fill( sink.getWater() );
}
