let currentDb = "";
let currentColl = "";

async function connect() {
    const url = document.getElementById('mongoUrl').value;
    const res = await fetch('/connect', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ mongoUrl: url })
    });
    const data = await res.json();
    if(data.success){
        let html = '<h2>Databases</h2>';
        data.databases.forEach(db=>{
            html += `<p onclick="getCollections('${db.name}')">${db.name}</p>`;
        });
        document.getElementById('databases').innerHTML = html;
    } else {
        alert('Connection Error: '+data.error);
    }
}

async function getCollections(dbName){
    currentDb = dbName;
    const res = await fetch(`/collections/${dbName}`);
    const data = await res.json();
    let html = `<h3>Collections in ${dbName}</h3>`;
    data.collections.forEach(coll=>{
        html += `<p onclick="getDocuments('${dbName}','${coll.name}')">${coll.name}</p>`;
    });
    document.getElementById('collections').innerHTML = html;
}

async function getDocuments(dbName, collName){
    currentColl = collName;
    const res = await fetch(`/documents/${dbName}/${collName}`);
    const data = await res.json();
    let html = `<h4>Documents in ${collName}</h4>`;
    html += `<pre>${JSON.stringify(data.docs, null, 2)}</pre>`;
    html += `
        <input type="text" id="searchQuery" placeholder='e.g., {"name":"John"}'>
        <button onclick="searchDocs()">Search</button>
        <div id="searchResults"></div>
    `;
    document.getElementById('documents').innerHTML = html;
}

async function searchDocs(){
    const queryStr = document.getElementById('searchQuery').value;
    let query = {};
    try { query = JSON.parse(queryStr); } 
    catch(e){ alert("Invalid JSON query"); return; }

    const startTime = performance.now();
    const res = await fetch(`/search/${currentDb}/${currentColl}`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ query })
    });
    const data = await res.json();
    const endTime = performance.now();
    let html = `<p>Search Time: ${(endTime-startTime).toFixed(2)} ms (server time: ${data.time_ms} ms)</p>`;
    html += `<pre>${JSON.stringify(data.docs, null, 2)}</pre>`;
    document.getElementById('searchResults').innerHTML = html;
}
