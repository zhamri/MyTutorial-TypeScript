import { User } from "./models";

async function fetchUsers(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    const users: User[] = await response.json();
    return users;
}

async function showUsers() {
    try {
        const users = await fetchUsers();
        users.forEach(user => {
            console.log(`${user.id}: ${user.name} (${user.username}) — ${user.email}`);
        });
    } catch (err) {
        console.error(err);
    }
}

showUsers();
