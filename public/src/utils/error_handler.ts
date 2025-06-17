export function passwd_too_short(input: string)
{
    if (input.length < 4) {
        return alert("your password is too short !")
    }
}