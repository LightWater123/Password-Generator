function generatePassword() // generate password
{
    const length = 12;
    const includeNumbers = document.getElementById('includeNum').checked;
    const includeSym = document.getElementById('includeSymbols').checked;
    const includeUpperLower = document.getElementById('includeUpperLower').checked;

    const numbers = '0123456789';
    const symbols = '@#$%^&*()_+[]{}|;:,.<>?';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    let characters = '';
    if(includeNumbers) characters += numbers;
    if(includeSym) characters += symbols;
    if(includeUpperLower) characters += uppercase + lowercase;

    if(characters == '')
        {
            alert('Please select atleast one option.');
            return '';
        }
    
    let password = '';
    for(let i = 0; i < length; i++)
        {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
}

function displayPassword() // display password
{
    const password = generatePassword();
    document.getElementById('passwordBox').value = password;
}

function copyToClipboard() // copy password
{
    const copyText = document.getElementById('passwordBox');
    copyText.select();
    document.execCommand("copy");
    alert("Copied to clipboard");
}

// event listener for generate button
document.getElementById('generateBtn').addEventListener('click', displayPassword);