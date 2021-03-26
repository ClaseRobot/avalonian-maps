// fetch('https://httpbin.org/ip')
//     .then(function(response) {
//         return response.text();
//     })
//     .then(function(data) {
//         console.log('data = ', data);
//     })
//     .catch(function(err){
//         console.error(err);
//     })

// fetch('https://api.github.com/users/xiaotian/repos')
//     .then( resp => resp.json())
//     .then(repos => {
//         for (const repo of repos) {
//             console.log(repo.name);
//         }
//     })
//     .catch(ex => {
//         console.error(ex);
//     })
const UI = require('./ui');
// const Albion = require('./albion');

//Classes Initialization
const albion = new Albion();
// const ui = new UI();

// DOM elements
const itemForm = document.getElementById('itemForm');

// DOM events
itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textSearch = document.getElementById('textSearch').value;
    if(textSearch !== '') {
        albion.fetchItem(textSearch)
            .then(data => {
                if (data.itemData.message === 'Not Found') {
                    ui.showMessage('User not found', 'alert alert-danger mt-2 col-md-12');
                } else {
                    // Render
                    ui.showList(data.itemData);
                }
            });
    } else {
        ui.reset();
    }
});