export const invalidUsers = [
    {
        "scenario": "Registration with Username Containing Spaces",
        "userName": "rodrigo reis",
        "password": "ValidPassword123!",
        "expectedAlert": "Invalid username. Usernames can only contain lowercase letters, numbers, and single hyphens, must be between 3 and 39 characters, and cannot start or end with a hyphen."
    },
    {
        "scenario": "Registration with Username Containing Uppercase Letters",
        "userName": "RodrigoReis",
        "password": "ValidPassword123!",
        "expectedAlert": "Invalid username. Usernames can only contain lowercase letters, numbers, and single hyphens, must be between 3 and 39 characters, and cannot start or end with a hyphen."
    },
    {
        "scenario": "Registration with Username Containing Special Characters",
        "userName": "rodrigo_reis!",
        "password": "ValidPassword123!",
        "expectedAlert": "Invalid username. Usernames can only contain lowercase letters, numbers, and single hyphens, must be between 3 and 39 characters, and cannot start or end with a hyphen."
    },
    {
        "scenario": "Registration with Username Too Short",
        "userName": "ro",
        "password": "ValidPassword123!",
        "expectedAlert": "Username must be at least 3 characters long."
    },
    {
        "scenario": "Registration with Username Too Long",
        "userName": "rodrigoreissantosrodrigoreissantosrodrig",
        "password": "ValidPassword123!",
        "expectedAlert": "Invalid username. Usernames can only contain lowercase letters, numbers, and single hyphens, must be between 3 and 39 characters, and cannot start or end with a hyphen."
    },
    {
        "scenario": "Registration with Username Ending with Hyphen",
        "userName": "rodrigo-",
        "password": "ValidPassword123!",
        "expectedAlert": "Invalid username. Usernames can only contain lowercase letters, numbers, and single hyphens, must be between 3 and 39 characters, and cannot start or end with a hyphen."
    },
    {
        "scenario": "Registration with Username Starting with Hyphen",
        "userName": "-rodrigo",
        "password": "ValidPassword123!",
        "expectedAlert": "Invalid username. Usernames can only contain lowercase letters, numbers, and single hyphens, must be between 3 and 39 characters, and cannot start or end with a hyphen."
    }
]