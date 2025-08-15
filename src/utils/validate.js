export const checkValidData = (email, password,name) =>{

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /([a-zA-Z0-9_\s]+)/.test(name);

    if(!isNameValid) return 'Please enter a valid name.'
    if(!isEmailValid) return 'Please enter a valid email address.'
    if(!isPasswordValid) return 'Please enter a valid password.'

    return null;

}