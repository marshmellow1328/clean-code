//bad
if( (value !== null && value > 1000) || vipStatus ) {
    //TODO do something
}

//good
if( isPreferred() ) {
    //TODO do something
}

function isPreferred() {
    return (value !== null && value > 1000 ) || vipStatus;
}


//best
if( isPreferred() ) {
    //TODO do something
}

function isPreferred() {
    return hasLargeValue() || vipStatus;
}

function hasLargeValue() {
    return value !== null && value > 1000;
}
