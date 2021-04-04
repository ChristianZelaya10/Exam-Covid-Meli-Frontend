
export default function errorResponseHandler(error, enqueueSnackbar, translator) {
    if (error == null || error.response == null) {
        enqueueSnackbar('Hubo un problema con la operación.', { variant: 'error' });
        return;
    } else if (error.response.status === 403 || error.response.status === 401) {
        if (error.response.data.errorDescription != null && error.response.data.errorDescription.trim() != "") {
            enqueueSnackbar(error.response.data.errorDescription, { variant: error.response.data.variant });
        }
        else { enqueueSnackbar('No esta autorizado para realizar esta acción.', { variant: 'error' }) };
    } else if (error.response.status === 404) {
        enqueueSnackbar('No se encontro el elemento solicitado.', { variant: 'error' });
    } else if (error.response.data.responseCode != null && error.response.data.responseCode.trim() != "") {
        enqueueSnackbar(error.response.data.errorDescription + '. ' + error.response.data.errorCause, { variant: error.response.data.variant });
    }
    else {
        enqueueSnackbar('Hubo un problema con la operación.', { variant: 'error' });
    }

}