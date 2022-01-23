function createTeamProfiles(teamData){
    let team = teamData;
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

}

function createManagerProfile(){

}

function createEngineerProfile(){
    
}

function createInternProfile(){
    
}


function createTeamSite(teamData) {

    return `
    <!DOCTYPE html>
    <html lang="en-US">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width= device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie-edge" />
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="" />
        <title>My Team Profile</title>
    </head>

    <body>
        <header class="container-fluid">

        </header>

        <main class="container-fluid">
            ${createTeamProfiles(teamData)}
        </main>

    </body>

</html>  `;
}


module.exports = createTeamSite;