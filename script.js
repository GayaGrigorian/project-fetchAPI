const dataNode = document.getElementById('data')
const button = document.getElementById('button')
const loadingNode = document.createElement('img')
loadingNode.src="./img.gif"
const text=document.getElementById('text')
const submit= document.getElementById ('submit')

const getPosts = () => {
    dataNode.append(loadingNode)
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            const html = data.map(post => {
                return `
            <div class="post">
             <p>userid:${post.userId}</p>
             <p>id:${post.id}</p>
             <p>title:${post.title}</p>
           </div>
           `
            }).join("");
            console.log(html);

            dataNode.innerHTML = html
            console.log(dataNode)

        })
        .catch(error => {
            console.log(error)
        })
        .finally(
            () => {
                dataNode.removeChild(loadingNode)
            }
        )

}



button.addEventListener('click', getPosts)


const filteredById = (text) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            const html = data.filter (function (post){
                return post.userId==(text)
              }).map(post => {
                return `
            <div class="post">
             <p>userid:${post.userId}</p>
             <p>id:${post.id}</p>
             <p>title:${post.title}</p>
           </div>
           `
            }).join("");
            console.log(html);

            dataNode.innerHTML = html
            console.log(dataNode)

        })
        .catch(error => {
            console.log(error)
        })

}

 

submit.addEventListener('click', function(evt) {
    evt.preventDefault()
    var text=document.getElementById('text').value
    return filteredById(text)
})