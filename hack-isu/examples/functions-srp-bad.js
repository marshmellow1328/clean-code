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
