export function validateNotEmpty(value, valid, cancelNotValid, setCancelNotValid) {
    if (!cancelNotValid) {
        if (value !== "" && value !== null) {
            valid(true);
        } else {
            valid(false);
        }
    }
    else{setCancelNotValid(false);}
}

export function validateListNotEmpty(value, valid, cancelNotValid, setCancelNotValid) {
    if (!cancelNotValid) {
        if (value.length != 0) {
            valid(true);
        } else {
            valid(false);
        }
    }
    else{setCancelNotValid(false);}
}

export function validNotEmpty(value) {
    if (value != "") {
        return true;
    } else {
        return false;
    }
}
