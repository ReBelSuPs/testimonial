const header = document.getElementById('heading')
const text = document.getElementById('text')
const post = document.getElementById('post')

let index = 0;

const cardData = [
    {
        heading: 'Sups',
        post: 'Web developer',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam cumque ipsam reiciendis hic veritatis voluptates reprehenderit enim et! Doloremque, delectus!'
    },
    {
        heading: 'Gone Lastvirus',
        post: 'Network engineer',
        text: 'Asperiores quas consectetur quisquam similique reprehenderit, saepe animi totam! Vitae modi ab voluptas nemo nam dolores molestias id.'
    },
    {
        heading: 'Smith',
        post: 'Photographer/Coder',
        text: 'Reiciendis ad esse pariatur illum officia impedit sapiente deserunt explicabo blanditiis quaerat vero, accusamus doloribus quibusdam quisquam fugit? Labore.'
    },
    {
        heading: 'GodZay',
        post: 'Sound engineer',
        text: 'Blanditiis quaerat vero, accusamus doloribus quibusdam quisquam fugit? Labore.'
    },
    {
        heading: 'Suraj Gayak',
        post: 'Web Designer',
        text: 'Reiciendis ad esse pariatur illum officia impedit sapiente deserunt explicabo.'
    }
]

const displayCard = (i) => {
    header.textContent = cardData[i].heading;
    post.textContent = cardData[i].post;
    text.textContent = cardData[i].text;
}

displayCard(index++)

setInterval(()=>{
    displayCard(index++)
    if (index>=cardData.length) {index=0}
},5000)
