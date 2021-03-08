const commentService = {
    load: function (id) {
        return fetch(`https://jsonplaceholder.typicode.com/comments${id ? `/${id}` : ''}`)
        .then(res => res.json());
    },
   
}

export default commentService;