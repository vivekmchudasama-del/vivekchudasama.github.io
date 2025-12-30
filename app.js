
// ==============================
// EXPERIENCE (Roles)
// - Details button only
// - Highlights preview shown under button
// ==============================
const timeline = document.getElementById("experienceTimeline");

function getExperienceId(i) {
  return `exp-${i}`;
}

function renderExperience(experienceList) {
  if (!timeline) return;

  timeline.innerHTML = experienceList
    .map((exp, i) => {
      const expId = getExperienceId(i);

      // Show first 3 highlights as preview under the Details button
      const preview = (exp.highlights || []).slice(0, 3);

      return `
        <div class="tl-item">
          <div class="tl-dot" aria-hidden="true"></div>

          <div class="card tl-card">
            <div class="tl-top">
              <div>
                <div class="tl-role">${exp.role}</div>
                <div class="tl-company">${exp.company}</div>
              </div>
              <div class="tl-dates">${exp.dates}</div>
            </div>

            <div class="actions" style="margin-top:10px">
              <button class="btn ghost" data-action="details" data-type="experience" data-id="${expId}">
                Details
              </button>
            </div>

            <div class="highlights-preview">
              <div class="highlights-title">Highlights</div>
              <ul>
                ${preview.map(h => `<li>${h}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

// Call it after profileData is defined:
renderExperience(profileData.experience);
