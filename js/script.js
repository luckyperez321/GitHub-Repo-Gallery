const overview = document.querySelector(".overview"); //this will be where your profile info will appear
const username = "luckyperez321"; //console.log(luckyperez321);

const githubInfo = async function () {
    const url = await fetch(`https://api.github.com/users/${username}`);
    const data = await url.json();
    displayInfo(data);
};
githubInfo();



const displayInfo = function (data) {
    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('user-info');
    userInfoDiv.innerHTML = `


<figure>
    <img alt = "user avatar" src="${data.avatar_url}"/>
</figure>
<div>
<p><strong>Name:</strong>${data.name}</p>
<p><strong>Bio:</strong>${data.bio}</p>
<p><strong>Location:</strong>${data.location}</p>
<p><strong>Number of public repos:</strong>${data.public_repos}</p>
</div>
`;
    overview.appendChild(userInfoDiv);

};

