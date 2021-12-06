const data=[
    {
        name:'Ebru Levent',
        age:26,
        gender:'female',
        location:'Eskişehir',
        image:'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
        name:'Kemal Özdemir',
        age:25,
        gender:'male',
        location:'Eskişehir',
        image:'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
        name:'Müjgan Levent',
        age:65,
        gender:'female',
        location:'Ankara',
        image:'https://randomuser.me/api/portraits/women/56.jpg'
    }
];

const profiles=profileIterator(data);

//Call first profile
nextProfile();

//Next Event
document.getElementById('next').addEventListener('click',nextProfile);

//Next profile Display
function nextProfile(){
    const currentProfile=profiles.next().value;

    if(currentProfile!==undefined){

        document.getElementById('imageDisplay').innerHTML=`
        <img src="${currentProfile.image}">`;

        document.getElementById('profileDisplay').innerHTML=`
        <ul class="list-group">
        <li class="list-group-item">Name:${currentProfile.name}</li>
        <li class="list-group-item">Age:${currentProfile.age}</li>
        <li class="list-group-item">Location:${currentProfile.location}</li>
        </ul>
        `;
    }else{
        window.location.reload();
    }
}

//Profile Iterator
function profileIterator(profiles){
    let nextIndex=0;

    return{
        next:function(){//like a loop
            return nextIndex<profiles.length ?
            {value:profiles[nextIndex++],done:false}:
            {done:true}
        }
    };
};
