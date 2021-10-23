const socialMediaLogins = {
  github: 'igoormichaeel',
  youtube: 'channel/UC5BswXUfCFM0U0d8tiS6s-Q',
  instagram: 'igoormichaeel',
  facebook: 'igoormichaeel',
  twitter: 'igoormichaeel'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMediaLogins[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubInfos() {
  const url = `https://api.github.com/users/${socialMediaLogins.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userName.textContent = data.name
      github.href = data.html_url
      loginGitHub.textContent = data.login
      userBio.textContent = data.bio
    })
}

getGitHubInfos()
