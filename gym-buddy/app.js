
const workouts = {
  Monday: {
    title: "Push — Chest, Shoulders, Triceps",
    exercises: [
      ["Warm-up","8 min","Treadmill + arm circles + shoulder rolls","https://www.youtube.com/results?search_query=gym+warm+up+upper+body+beginner"],
      ["Dumbbell Bench Press","3 sets","8–12 reps • rest 2 min","https://www.youtube.com/results?search_query=Jeff+Nippard+dumbbell+bench+press+proper+form"],
      ["Incline Dumbbell Press","3 sets","8–12 reps • bench ~30° • rest 2 min","https://www.youtube.com/results?search_query=incline+dumbbell+press+proper+form"],
      ["Machine Chest Fly","3 sets","10–15 reps • rest 60–90 sec","https://www.youtube.com/results?search_query=machine+chest+fly+proper+form"],
      ["Seated Dumbbell Shoulder Press","3 sets","8–12 reps • rest 90–120 sec","https://www.youtube.com/results?search_query=dumbbell+shoulder+press+proper+form"],
      ["Dumbbell Lateral Raise","3 sets","12–15 reps • use light weight","https://www.youtube.com/results?search_query=Jeff+Nippard+lateral+raise+proper+form"],
      ["Rope Triceps Pushdown","3 sets","10–15 reps • elbows fixed","https://www.youtube.com/results?search_query=rope+triceps+pushdown+proper+form"],
      ["Incline Walk","15–20 min","4.5–5.5 km/h • incline 5–8%","https://www.youtube.com/results?search_query=incline+treadmill+walking+form"]
    ]
  },
  Tuesday: {
    title: "Pull — Back & Biceps",
    exercises: [
      ["Warm-up","6–8 min","Easy treadmill + shoulder mobility","https://www.youtube.com/results?search_query=upper+body+warm+up+beginner+gym"],
      ["Lat Pulldown","3 sets","8–12 reps • chest tall","https://www.youtube.com/results?search_query=lat+pulldown+proper+form+Jeff+Nippard"],
      ["Seated Cable Row","3 sets","8–12 reps • don't rock torso","https://www.youtube.com/results?search_query=seated+cable+row+proper+form"],
      ["Chest-Supported Row","3 sets","10–12 reps • controlled lowering","https://www.youtube.com/results?search_query=chest+supported+row+proper+form"],
      ["Face Pull","3 sets","12–15 reps • light weight","https://www.youtube.com/results?search_query=face+pull+proper+form"],
      ["Dumbbell Biceps Curl","3 sets","8–12 reps • start left arm first","https://www.youtube.com/results?search_query=dumbbell+biceps+curl+proper+form"],
      ["Hammer Curl","2 sets","10–12 reps • neutral grip","https://www.youtube.com/results?search_query=hammer+curl+proper+form"],
      ["Easy Cardio","15 min","Incline walk or cycle","https://www.youtube.com/results?search_query=incline+treadmill+walking+beginner"]
    ]
  },
  Wednesday: {
    title: "Legs + Core",
    exercises: [
      ["Warm-up","8 min","Walk + hip/ankle mobility","https://www.youtube.com/results?search_query=lower+body+warm+up+beginner+gym"],
      ["Goblet Squat","3 sets","8–12 reps • beginner-friendly squat","https://www.youtube.com/results?search_query=goblet+squat+proper+form"],
      ["Leg Press","3 sets","10–15 reps • full controlled range","https://www.youtube.com/results?search_query=leg+press+proper+form"],
      ["Romanian Deadlift — Dumbbells","3 sets","8–12 reps • hinge at hips","https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift+proper+form"],
      ["Seated / Lying Leg Curl","3 sets","10–15 reps","https://www.youtube.com/results?search_query=leg+curl+machine+proper+form"],
      ["Leg Extension","2 sets","12–15 reps","https://www.youtube.com/results?search_query=leg+extension+proper+form"],
      ["Standing Calf Raise","3 sets","12–15 reps • pause at top","https://www.youtube.com/results?search_query=standing+calf+raise+proper+form"],
      ["Plank","3 sets","20–45 sec","https://www.youtube.com/results?search_query=plank+proper+form"],
      ["Cable Crunch","3 sets","10–15 reps","https://www.youtube.com/results?search_query=cable+crunch+proper+form"]
    ]
  },
  Thursday: { title: "Rest / Recovery", exercises: [] },
  Friday: {
    title: "Upper Body",
    exercises: [
      ["Warm-up","6–8 min","Easy cardio + shoulder mobility","https://www.youtube.com/results?search_query=upper+body+warm+up+beginner+gym"],
      ["Incline Dumbbell Press","3 sets","8–12 reps","https://www.youtube.com/results?search_query=incline+dumbbell+press+proper+form"],
      ["Lat Pulldown","3 sets","8–12 reps","https://www.youtube.com/results?search_query=lat+pulldown+proper+form"],
      ["Seated Cable Row","3 sets","8–12 reps","https://www.youtube.com/results?search_query=seated+cable+row+proper+form"],
      ["Machine Chest Press","2 sets","10–12 reps","https://www.youtube.com/results?search_query=machine+chest+press+proper+form"],
      ["Dumbbell Lateral Raise","3 sets","12–15 reps","https://www.youtube.com/results?search_query=dumbbell+lateral+raise+proper+form"],
      ["Dumbbell Biceps Curl","2 sets","10–12 reps • left arm sets the reps","https://www.youtube.com/results?search_query=dumbbell+biceps+curl+proper+form"],
      ["Rope Triceps Pushdown","2 sets","10–15 reps","https://www.youtube.com/results?search_query=rope+triceps+pushdown+proper+form"]
    ]
  },
  Saturday: {
    title: "Lower Body + Core + Cardio",
    exercises: [
      ["Warm-up","8 min","Walk + hip mobility","https://www.youtube.com/results?search_query=lower+body+warm+up+beginner+gym"],
      ["Leg Press","3 sets","10–15 reps","https://www.youtube.com/results?search_query=leg+press+proper+form"],
      ["Dumbbell Romanian Deadlift","3 sets","8–12 reps","https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift+proper+form"],
      ["Walking Lunges","2 sets","8–10 reps each leg","https://www.youtube.com/results?search_query=walking+lunge+proper+form"],
      ["Leg Curl","3 sets","10–15 reps","https://www.youtube.com/results?search_query=leg+curl+machine+proper+form"],
      ["Hanging / Captain's Chair Knee Raise","3 sets","8–15 reps","https://www.youtube.com/results?search_query=captains+chair+knee+raise+proper+form"],
      ["Plank","3 sets","20–45 sec","https://www.youtube.com/results?search_query=plank+proper+form"],
      ["Incline Walk","20–25 min","Comfortable sustainable pace","https://www.youtube.com/results?search_query=incline+treadmill+walking+beginner"]
    ]
  },
  Sunday: { title: "Rest / Recovery", exercises: [] }
};

const days = Object.keys(workouts);
const storageKey = "rajeshGymBuddyV1";
let state = JSON.parse(localStorage.getItem(storageKey) || '{"logs":{},"weights":[]}');

function dateKey(d = new Date()){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function dayName(d = new Date()){ return d.toLocaleDateString("en-US",{weekday:"long"}); }
function persist(){ localStorage.setItem(storageKey, JSON.stringify(state)); }
function toast(msg){
  const t=document.getElementById("toast"); t.textContent=msg; t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),1600);
}
function getLogKey(day, idx, date = dateKey()){ return `${date}|${day}|${idx}`; }

function exerciseCard(day, ex, idx, date = dateKey()){
  const [name, sets, reps, video] = ex;
  const key = getLogKey(day, idx, date);
  const log = state.logs[key] || {};
  const done = !!log.done;
  return `
  <div class="exercise ${done ? "done":""}" data-key="${key}">
    <div class="exercise-top">
      <div>
        <h3>${idx+1}. ${name}</h3>
        <div class="meta">${sets} • ${reps}</div>
      </div>
      <button class="done-btn" onclick="toggleDone('${key}')">${done ? "✓ Done" : "Mark done"}</button>
    </div>
    <div class="actions">
      <a class="video-btn" href="${video}" target="_blank" rel="noopener">▶ Watch form</a>
    </div>
    <div class="log-grid">
      <label>Weight (kg)
        <input type="number" step="0.5" inputmode="decimal" value="${log.weight ?? ""}" onchange="saveField('${key}','weight',this.value)">
      </label>
      <label>Reps
        <input type="text" placeholder="12/10/9" value="${log.reps ?? ""}" onchange="saveField('${key}','reps',this.value)">
      </label>
      <label>RPE
        <input type="number" min="1" max="10" inputmode="numeric" placeholder="7" value="${log.rpe ?? ""}" onchange="saveField('${key}','rpe',this.value)">
      </label>
    </div>
    <div class="notes">
      <textarea placeholder="Form notes / pain / how it felt..." onchange="saveField('${key}','notes',this.value)">${log.notes ?? ""}</textarea>
    </div>
  </div>`;
}

window.toggleDone = function(key){
  state.logs[key] = state.logs[key] || {};
  state.logs[key].done = !state.logs[key].done;
  state.logs[key].updatedAt = new Date().toISOString();
  persist();
  renderSelected(selectedDay);
  renderToday();
  toast(state.logs[key].done ? "Exercise completed ✓" : "Marked incomplete");
};
window.saveField = function(key, field, value){
  state.logs[key] = state.logs[key] || {};
  state.logs[key][field] = value;
  state.logs[key].updatedAt = new Date().toISOString();
  persist();
};

let selectedDay = dayName();
if(!workouts[selectedDay]) selectedDay = "Monday";

function renderTabs(){
  const wrap=document.getElementById("dayTabs");
  wrap.innerHTML=days.map(d=>`<button class="day-tab ${d===selectedDay?"active":""}" onclick="selectDay('${d}')">${d.slice(0,3)}</button>`).join("");
}
window.selectDay = function(day){
  selectedDay=day; renderTabs(); renderSelected(day);
};

function renderSelected(day){
  const list=document.getElementById("workoutList");
  const w=workouts[day];
  if(!w.exercises.length){
    list.innerHTML=`<div class="rest"><strong>${w.title}</strong>Walk, stretch lightly, hydrate and recover.</div>`;
    return;
  }
  list.innerHTML=`<h3 style="margin:6px 0 8px">${w.title}</h3>` + w.exercises.map((ex,i)=>exerciseCard(day,ex,i)).join("");
}

function renderToday(){
  const d=dayName(), w=workouts[d] || workouts.Monday;
  document.getElementById("todayTitle").textContent = `${d}: ${w.title}`;
  const box=document.getElementById("todayWorkout");
  if(!w.exercises.length){
    box.innerHTML=`<div class="rest"><strong>Recovery day</strong>Easy walking and mobility are enough.</div>`;
    document.getElementById("progressRing").textContent="REST";
    return;
  }
  const completed=w.exercises.filter((_,i)=>state.logs[getLogKey(d,i)]?.done).length;
  const pct=Math.round(completed/w.exercises.length*100);
  document.getElementById("progressRing").textContent=`${pct}%`;
  box.innerHTML=`<p style="color:var(--muted);margin-top:0">${completed}/${w.exercises.length} completed today</p>`;
}

function renderWeights(){
  const history=document.getElementById("weightHistory");
  const items=[...state.weights].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,8);
  history.innerHTML = items.length
    ? items.map(x=>`<div class="history-row"><span>${x.date}</span><strong>${x.weight} kg</strong></div>`).join("")
    : `<p style="color:var(--muted)">No weigh-ins saved yet.</p>`;
}
document.getElementById("saveWeightBtn").addEventListener("click",()=>{
  const input=document.getElementById("weightInput");
  const weight=parseFloat(input.value);
  if(!weight || weight<30 || weight>250){ toast("Enter a valid weight"); return; }
  const date=dateKey();
  const existing=state.weights.find(x=>x.date===date);
  if(existing) existing.weight=weight; else state.weights.push({date,weight});
  persist(); input.value=""; renderWeights(); toast("Weight saved");
});
document.getElementById("resetBtn").addEventListener("click",()=>{
  if(confirm("Clear all workout and weight tracking data on this device?")){
    state={logs:{},weights:[]}; persist(); renderAll(); toast("Data cleared");
  }
});
function renderAll(){ renderTabs(); renderSelected(selectedDay); renderToday(); renderWeights(); }
renderAll();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
