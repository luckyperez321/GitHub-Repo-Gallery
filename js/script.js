const overview = document.querySelector(".overview"); //this will be where your profile info will appear
const username = "luckyperez321"; //console.log(luckyperez321);

const githubInfo = async function () {
    const url = await fetch(`https://api.github.com/users${username}`);
    console.log(url);
    const data = await url.json();
    console.log(data);
};
githubInfo(data);


const displayinfo = function (data) {
    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('user-info');
    userInfoDiv.innerHTML = `


<figure>
    <img alt = "user avatar" src=${}/>
</figure>
<div>
<p><strong>Name:</strong>${}</p>
<p><strong>Bio:</strong>${}</p>
<p><strong>Location:</strong>${}</p>
<p><strong>Number of public repos:</strong>${}</p>
</div>
`
    overview.appendChild(userInfoDiv);

};

