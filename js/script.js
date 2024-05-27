const overview = document.querySelector(".overview"); //this will be where your profile info will appear
const username = "luckyperez321"; //console.log(luckyperez321);
const repoList = document.querySelector(".repo-list"); //select the unordered list to display the repos list
const repoSection = document.querySelector(".repos"); //MAY HAVE TO BE REPO-LIST
const repoData = document.querySelector(".repo-data");


const githubInfo = async function () {
    const url = await fetch(`https://api.github.com/users/${username}`);
    const data = await url.json();
    displayInfo(data);
};
githubInfo();


const displayInfo = function (data) {
    const userInfoDiv = document.createElement("div");
    userInfoDiv.classList.add("user-info");
    userInfoDiv.innerHTML = `
<figure>
    <img alt = "user avatar" src=${data.avatar_url}/>
</figure>
<div>
<p><strong>Name:</strong>${data.name}</p>
<p><strong>Bio:</strong>${data.bio}</p>
<p><strong>Location:</strong>${data.location}</p>
<p><strong>Number of public repos:</strong>${data.public_repos}</p>
</div>
`;
    overview.appendChild(userInfoDiv);
    gitRepos();
};


const gitRepos = async function () {
    const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const repoData = await fetchRepos.json();
    repoAbout(repoData);
};


const repoAbout = function (repos) {
    for (const repo of repos) {
        const repoItem = document.createElement("li");
        repoItem.classList.add("repo");
        repoItem.innerHTML = `<h3>${repo.name}</h3>`;
        repoList.append(repoItem);
    }
};


repoList.addEventListener("click", function (e) {
    if (e.target.matches("h3")) {
        const repoName = e.target.innerText;
        getRepoInfo(repoName);
    }
});

const getRepoInfo = async function (repoName) {
    const fetchInfo = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
    const repoInfo = await fetchInfo.json();
    console.log(repoInfo);
    const fetchLanguages = await fetch(repoInfo.languages_url);
    const languageData = await fetchLanguages.json();
    console.log(languageData);


    const languages = [];
    for (const language in languageData) {
        languages.push(language);
    }
    
};
