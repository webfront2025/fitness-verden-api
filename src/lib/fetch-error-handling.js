export function fetchErrorHandling(response) {
    if (!response.ok) {
        if (response.status === 400) { // bad request
            throw new Error('Bad request in fetch for whatever');
        }

        if (response.status === 403) { // forbidden
            throw new Error('Forbidden action in fetch to do whatever');
        }
    }
}