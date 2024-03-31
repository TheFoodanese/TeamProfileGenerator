function render(team) {
    let html = '';

    team.forEach(member => {
        html += `<div class="profile-card ${member.getRole().toLowerCase()}">
                    <h2>${member.getName()}</h2>
                    <p>ID: ${member.getId()}</p>
                    <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>`;

        if (member.getRole() === 'Manager') {
            html += `<p>Office Number: ${member.getOfficeNumber()}</p>`;
        } else if (member.getRole() === 'Engineer') {
            html += `<p>GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a></p>`;
        } else if (member.getRole() === 'Intern') {
            html += `<p>School: ${member.getSchool()}</p>`;
        }

        html += `</div>`;
    });

    return html;
}

module.exports = render;
