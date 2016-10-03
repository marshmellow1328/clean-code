function getOutput( phone, apiKey ) {
    var errors = validateInputs( phone, apiKey );
    if( errors ) {
        return new ErrorResponse();
    }

    trackUsage( apiKey );

    try {
        var output = processTemplate( phone );
        return new SuccessResponse( output );
    }
    catch( error ) {
        return new ErrorResponse( error );
    }
}

function processTemplate( phone ) {
    var variables = new Map();
    variables.add( 'google', 'https://www.google.com' );
    variables.add( 'phone', phone );

    return template.render( variables );
}
