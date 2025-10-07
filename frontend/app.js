// fake DB
const DB_KEY = 'portalDB';
export function getDB() {
  if (!localStorage.getItem(DB_KEY)) {
    localStorage.setItem(DB_KEY, JSON.stringify({
      students: {},
      recruiters: { 'recruiter@demo.com': { password: '1234' } }
    }));
  }
  return JSON.parse(localStorage.getItem(DB_KEY));
}
export function setDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

// recruiter render
function renderRecruiterTable(list=null){
  const db = getDB();
  const tbody = document.getElementById('recTableBody');
  tbody.innerHTML='';
  const data = list || Object.entries(db.students);
  data.forEach(([email,d])=>{
    tbody.insertAdjacentHTML('beforeend',`
      <tr>
        <td class="py-2">${email}</td>
        <td>${d.course||'—'}</td>
        <td>${d.progress}%</td>
        <td>${d.score}</td>
        <td><span class="px-2 py-1 rounded text-xs ${d.score>=100?'bg-green-100 text-green-800':'bg-yellow-100 text-yellow-800'}">${d.score>=100?'Ready':'Learning'}</span></td>
      </tr>
    `);
  });
}
window.applyFilters = () => {
  const db = getDB();
  const skill = document.getElementById('filterSkill').value.trim().toLowerCase();
  const course = document.getElementById('filterCourse').value;
  const min = parseInt(document.getElementById('filterMin').value)||0;
  const max = parseInt(document.getElementById('filterMax').value)||100;
  const filtered = Object.entries(db.students).filter(([email,d])=>{
    return (!skill||d.course.includes(skill)) && (!course||d.course===course) && (d.score>=min && d.score<=max);
  });
  renderRecruiterTable(filtered);
};
window.clearFilters = () => {
  ['filterSkill','filterCourse','filterMin','filterMax'].forEach(id=>document.getElementById(id).value='');
  renderRecruiterTable();
};

// student render
function renderStudentDash(){
  const user = JSON.parse(localStorage.getItem('user'));
  const db = getDB();
  const me = db.students[user.email];
  document.getElementById('stuWelcome').textContent = `Hey ${user.email}!`;
  if (!me.course) {
    document.getElementById('trackSelect').classList.remove('hidden');
    document.getElementById('progressCards').classList.add('hidden');
  } else {
    document.getElementById('trackSelect').classList.add('hidden');
    renderProgress(user.email);
  }
}
window.chooseTrack = (track)=>{
  const user = JSON.parse(localStorage.getItem('user'));
  const db = getDB();
  db.students[user.email].course = track;
  setDB(db);
  renderProgress(user.email);
  document.getElementById('trackSelect').classList.add('hidden');
  document.getElementById('progressCards').classList.remove('hidden');
};
function renderProgress(email){
  const db = getDB();
  const me = db.students[email];
  const container = document.getElementById('progressCards');
  container.innerHTML='';
  const tasks = [
    {name:'Task 1: Basics', done:me.progress>=25},
    {name:'Task 2: Intermediate', done:me.progress>=50},
    {name:'Task 3: Advanced', done:me.progress>=100}
  ];
  tasks.forEach((t,i)=>{
    const div = document.createElement('div');
    div.className = 'p-4 rounded-xl border border-gray-300 dark:border-gray-600';
    div.innerHTML = `
      <h4 class="font-semibold mb-2">${t.name}</h4>
      <p class="text-sm mb-3">${t.done?'✅ Completed':'⏳ Pending'}</p>
      ${!t.done?`<button onclick="doTask(${i+1})" class="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">Start</button>`:''}
    `;
    container.appendChild(div);
  });
}
window.doTask = (taskNum)=>{
  const user = JSON.parse(localStorage.getItem('user'));
  const db = getDB();
  const me = db.students[user.email];
  me.progress = Math.max(me.progress, taskNum*25);
  me.score = Math.min(100, me.progress);
  setDB(db);
  renderProgress(user.email);
};