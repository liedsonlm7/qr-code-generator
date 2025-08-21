async function allowedCharacters() {
    let allowed = [];

    if (process.env.UPPERCASE_LETTERS == "true") {
        allowed.push( ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (process.env.LOWERCASE_LETTERS == "true") {
        allowed.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if (process.env.NUMBERS == "true") {
        allowed.push(..."0123456789");
    }

    if (process.env.SPECIAL_allowed == "true") {
        allowed.push(..."!@#$%^&*()-_");
    }

    return allowed;

}

async function handle() {
    let characters = [];
    let password = "";

    const passwordLenght = process.env.PASSWORD_LENGTH;
    characters = await allowedCharacters();

    
    for(let i = 0; i < passwordLenght; i++) {
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index];
    }

    return password;
}

export default handle;