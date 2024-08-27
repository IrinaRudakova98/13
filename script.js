export async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') 
    const users = await response.json() 
    users.forEach(user => { 
        console.log(user.name); 
      });   
      return (users) 
}
fetchUsers() 