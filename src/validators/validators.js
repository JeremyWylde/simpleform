export const required = value => {
    if (value)
        return undefined;
    return 'req';
}

export const maxLength = (maxLength) => value => {
    if (value && value.length > maxLength)
        return `max length is ${maxLength}`;
    return undefined;
}
