// let url="https://fakestoreapi.com/products"
// fetch(url).then((res) =>{
//     return res.json()
// }).then((data) =>{
//     console.log(data)
//     let tableData="";
//     data.map((values) =>{
//         tableData+=`<tr>
//         <td>${values.title}</td>
//          <td>${values.description}</td>
//          <td>${values.price}</td>
//          <td><img src="${values.image}"/></td>
//          <th scope="col"><button onclick=""editData class="btn btn-primary" id="edit">Edit</button></th>
//          <th scope="col"><button class="btn btn-danger" id="delete">Delete</button></th>
//        </tr>`;
//         document.getElementById("tableBody").innerHTML=tableData;
//  })
// }).catch((e) =>{
//     console.log(e);
// });


// function adddata(){

// }


// document.addEventListener('DOMContentLoaded', function () {
//     const tableBody = document.getElementById('table-body');
//     const dataForm = document.getElementById('data-form');

//     // Function to fetch data from API
//     function fetchData() {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(data => {
//                 // Clear existing data
//                 tableBody.innerHTML = '';

//                 // Populate table with fetched data
//                 data.forEach(item => {
//                     const row = `
//                         <tr data-id="${item.id}">
//                             <td>${item.id}</td>
//                             <td>${item.title}</td>
//                             <td>${item.body}</td>
//                             <td>${item.userId}</td>
//                             <td>
//                                 <button class="btn btn-primary" onclick="editData(${item.id})">Edit</button>
//                                 <button class="btn btn-danger" onclick="deleteData(${item.id})">Delete</button>
//                             </td>
//                         </tr>
//                     `;
//                     tableBody.innerHTML += row;
//                 });
//             })
//             .catch(error => console.error('Error fetching data:', error))
            
//     }

//     // Function to add data
//     window.addData=function (title, body, userId) {
//         const newData = { title: title, body: body, userId: userId };
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Failed to add data');
//         }
//         // console.log("Data added");
//         return response.json();
//     })
//     .then(data => {
//         const row = `
//         <tr data-id="${data.id}">
//             <td>${data.id}</td>
//             <td>${data.title}</td>
//             <td>${data.body}</td>
//             <td>${data.userId}</td>
//             <td>
//                 <button onclick="editData(${data.id})">Edit</button>
//                 <button onclick="deleteData(${data.id})">Delete</button>
//             </td>
//         </tr>
//     `;
//     tableBody.innerHTML += row;
//     })
//     .catch(error => console.error('Error adding data:', error));
//     }

//     // Function to edit data
//     window.editData=function (id) {
//         const row = document.querySelector(`tr[data-id="${id}"]`);
//         const title = row.cells[1];
//         const body = row.cells[2];
//         const userId = row.cells[3];
    
//         const newTitle = prompt('Enter new title:', title.textContent);
//         const newBody = prompt('Enter new body:', body.textContent);
//         const newUserId = parseInt(prompt('Enter new user ID:', userId.textContent));
    
//         if (newTitle && newBody && !isNaN(newUserId)) {
//             fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ id: id, title: newTitle, body: newBody, userId: newUserId })
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to edit data');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // Update table row with edited values
//                 title.textContent = newTitle;
//                 body.textContent = newBody;
//                 userId.textContent = newUserId;
//             })
//             .catch(error => console.error('Error editing data:', error));
//         }
//     }

//     // Function to delete data
//     window.deleteData=function (id) {
//         if (confirm('Are you sure you want to delete this data?')) {
//             fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//                 method: 'DELETE'
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to delete data');
//                 }
//                 // Refresh table after successful deletion
//                  // Remove the corresponding row from the table
//             const rowToRemove = document.querySelector(`tr[data-id="${id}"]`);
//             if (rowToRemove) {
//                 // console.log("Data deleted")
//                 rowToRemove.remove();
//             } else {
//                 console.error('Row not found for deletion');
//             }
//             })
//             .catch(error => console.error('Error deleting data:', error));
//         }
//     }

//     // Fetch data when the page loads
//     fetchData();

//     // Add event listener for form submission
//     dataForm.addEventListener('submit', function (event) {
//         event.preventDefault();
//         const title = document.getElementById('title').value;
//         const body = document.getElementById('body').value;
//         const userId = parseInt(document.getElementById('userId').value);
//         addData(title, body, userId);
//         // Clear form fields after submission
//         document.getElementById('title').value = '';
//         document.getElementById('body').value = '';
//         document.getElementById('userId').value = '';
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
    



const tableBody = document.getElementById('table-body');
const dataForm = document.getElementById('data-form');

    // Function to fetch data from API
    function fetchData() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                // Clear existing data
                tableBody.innerHTML = '';

                // Populate table with fetched data
                data.forEach(item => {
                    const row = `
                        <tr data-id="${item.id}">
                            <td>${item.id}</td>
                            <td>${item.title}</td>
                            <td>${item.description}</td>
                            <td>${item.price}</td>
                            <td><img src="${item.image}"/></td>
                            <td>${item.rating.rate}</td>
                            <td>${item.rating.count}</td>
                           
                            <td>
                                <button class="btn btn-secondary mx-4 px-4 my-2 py-2" onclick="editData(${item.id})">Edit</button>
                                <button class="btn btn-danger mx-4 px-4 my-2 py-2" onclick="deleteData(${item.id})">Delete</button>
                            </td>
                        </tr>
                    `;
                    tableBody.innerHTML += row;
                });
            })
            .catch(error => console.error('Error fetching data:', error))
            
    }

    // Function to add data
    addData=function (title, description, price) {
        const newData = { title: title, description: description, price: price };
    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add data');
        }
        // console.log("Data added");
        return response.json();
    })
    .then(data => {
        const row = `
        <tr data-id="${data.id}">
            <td>${data.id}</td>
            <td>${data.title}</td>
            <td>${data.description}</td>
            <td>${data.price}</td>
           
            <td>
            <button class="btn btn-secondary mx-4 px-4 my-2 py-2" onclick="editData(${data.id})">Edit</button>
            <button class="btn btn-danger mx-4 px-4 my-2 py-2" onclick="deleteData(${data.id})">Delete</button>
            </td>
        </tr>
    `;
    tableBody.innerHTML += row;
    })
    .catch(error => console.error('Error adding data:', error));
    }

    // Function to edit data
    editData=function (id) {
        const row = document.querySelector(`tr[data-id="${id}"]`);
        const title = row.cells[1];
        const description = row.cells[2];
        const price = row.cells[3];
    
        const newTitle = prompt('Enter new title:', title.textContent);
        const newDescription = prompt('Enter new description:', description.textContent);
        const newPrice = parseInt(prompt('Enter new price:', price.textContent));
    
        if (newTitle && newDescription && !isNaN(newPrice)) {
            fetch(`https://fakestoreapi.com/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id, title: newTitle, description: newDescription, price: newPrice })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to edit data');
                }
                return response.json();
            })
            .then(data => {
                // Update table row with edited values
                title.textContent = newTitle;
                description.textContent = newDescription;
                price.textContent = newPrice;
            })
            .catch(error => console.error('Error editing data:', error));
        }
    }

    // Function to delete data
     deleteData=function (id) {
        if (confirm('Are you sure you want to delete this data?')) {
            fetch(`https://fakestoreapi.com/products/${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete data');
                }
                
                 // Remove the corresponding row from the table
            const rowToRemove = document.querySelector(`tr[data-id="${id}"]`);
            if (rowToRemove) {
                // console.log("Data deleted")
                rowToRemove.remove();
            } else {
                console.error('Row not found for deletion');
            }
            })
            .catch(error => console.error('Error deleting data:', error));
        }
    }

    // Fetch data when the page loads
    fetchData();

    // Add event listener for form submission
    dataForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = parseInt(document.getElementById('price').value);
        addData(title, description, price);
        // Clear form fields after submission
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';
        document.getElementById("removeClass").classList.remove("d-none")
        document.querySelector(".form-class").classList.add("d-none")
    });
// });



let removeClass=document.getElementById("removeClass");

removeClass.addEventListener('click', () =>{
  document.querySelector(".form-class").classList.remove("d-none")
  removeClass.classList.add("d-none")
});




 

  