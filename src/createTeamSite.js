createTeamSite = (teamData) => {
    let team = teamData;
    console.log("--------------------")
    console.log(team);

    const myTeam = [];

    for (let i = 0; i < team.length; i++){
        const teamMember = team[i];
        const memberRole = teamMember.getRole();

        if(memberRole === "Manager") {
            const managerProfile = createManagerProfile(teamMember);
            myTeam.push(managerProfile);
        }

        if(memberRole === "Engineer") {
            const engineerProfile = createEngineerProfile(teamMember);
            myTeam.push(engineerProfile);
        }

        if(memberRole === "Intern") {
            const internProfile = createInternProfile(teamMember);
            myTeam.push(internProfile);
        }
    }
    const myTeamCards = myTeam.join('');
    const createTeam = generateSite(myTeamCards);
    return createTeam;

}

function createManagerProfile(manager){
return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted manager">Manager</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">E-mail: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></li>
                <li class="list-group-item">Office: ${manager.office}</li>
            </ul>
        </div>
    </div>`;
}

function createEngineerProfile(engineer){
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted engineer">Engineer</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">E-mail: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.gitHub}" class="card-link" >${engineer.gitHub}</a></li>
            </ul>
        </div>
    </div>`;
}

function createInternProfile(intern){
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted intern">Intern</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">E-mail: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>`;
}


const generateSite = function (myTeamProfiles) {

    return `
    <!DOCTYPE html>
    <html lang="en-US">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width= device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie-edge" />
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="styles.css" />
        <title>My Team Profile</title>
    </head>

    <body>
        <header class="container-fluid">
            <h1>My Teams Profile</h1>
        </header>

        <main class="container-fluid">
            ${myTeamProfiles}
        </main>

    </body>

</html>  `;
}


module.exports = createTeamSite;