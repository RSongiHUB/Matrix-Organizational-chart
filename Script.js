
// Data from Excel
const flatData = [
  {
    "id": "Director",
    "name": "Kapil Dhaka",
    "title": "Director",
    "reportsTo": "N/A (Top Executive)",
    "email": "kapil.dhaka@matrix.in",
    "phone": "+91 98765 43210"
  },
  {
    "id": "Director",
    "name": "Narendra Kok",
    "title": "Director",
    "reportsTo": "N/A (Top Executive)",
    "email": "narendra.kok@matrix.in",
    "phone": "+91 98765 43211"
  },
  {
    "id": "Acadmic head",
    "name": "Anil Gora",
    "title": "Director/Acadmic Head",
    "reportsTo": "N/A (Top Executive)",
    "email": "anil.gora@matrix.in",
    "phone": "+91 98765 43211"
  },
  {
    "id": "Director",
    "name": "Anupam Agarwal",
    "title": "Director",
    "reportsTo": "N/A (Top Executive)",
    "email": "anupam.agarwal@matrix.in",
    "phone": "+91 98765 43213"
  },
  {
    "id": "Chemistry HOD",
    "name": "TKD",
    "title": "HOD Chemistry",
    "reportsTo": "Anil Gora",
    "email": "tkd@matrix.in",
    "phone": "+91 98765 43212"
  },
  {
    "id": "Phyics HOD",
    "name": "SKD",
    "title": "Phyics HOD",
    "reportsTo": "Anil Gora",
    "email": "skd@matrix.in",
    "phone": "+91 98765 43213"
  },
  {
    "id": "Maths HOD",
    "name": "NKD",
    "title": "Maths HOD",
    "reportsTo": "Anil Gora",
    "email": "nkd@matrix.in",
    "phone": "+91 98765 43214"
  },
  {
    "id": "eng-mgr2",
    "name": "Sneha Patel",
    "title": "Engineering Manager",
    "reportsTo": "Priya Sharma",
    "email": "sneha.patel@matrix.in",
    "phone": "+91 98765 43215"
  },
  {
    "id": "eng3",
    "name": "Aditya Joshi",
    "title": "Software Engineer II",
    "reportsTo": "Sneha Patel",
    "email": "aditya.joshi@matrix.in",
    "phone": "+91 98765 43216"
  },
  {
    "id": "eng4",
    "name": "Ishita Gupta",
    "title": "Software Engineer",
    "reportsTo": "Sneha Patel",
    "email": "ishita.gupta@matrix.in",
    "phone": "+91 98765 43217"
  },
  {
    "id": "vp-prod",
    "name": "Amit Verma",
    "title": "VP Product",
    "reportsTo": "Rajesh Kumar",
    "email": "amit.verma@matrix.in",
    "phone": "+91 98765 43218"
  },
  {
    "id": "prod-mgr1",
    "name": "Vikram Singh",
    "title": "Group Product Manager",
    "reportsTo": "Amit Verma",
    "email": "vikram.singh@matrix.in",
    "phone": "+91 98765 43219"
  },
  {
    "id": "prod1",
    "name": "Ananya Rao",
    "title": "Senior Product Manager",
    "reportsTo": "Vikram Singh",
    "email": "ananya.rao@matrix.in",
    "phone": "+91 98765 43220"
  },
  {
    "id": "prod2",
    "name": "Siddharth Das",
    "title": "Product Manager",
    "reportsTo": "Vikram Singh",
    "email": "siddharth.das@matrix.in",
    "phone": "+91 98765 43221"
  },
  {
    "id": "prod-mgr2",
    "name": "Pooja Iyer",
    "title": "Product Lead",
    "reportsTo": "Amit Verma",
    "email": "pooja.iyer@matrix.in",
    "phone": "+91 98765 43222"
  },
  {
    "id": "prod3",
    "name": "Karan Malhotra",
    "title": "Associate PM",
    "reportsTo": "Pooja Iyer",
    "email": "karan.malhotra@matrix.in",
    "phone": "+91 98765 43223"
  },
  {
    "id": "prod4",
    "name": "Neel Kulkarni",
    "title": "Product Designer",
    "reportsTo": "Pooja Iyer",
    "email": "neel.kulkarni@matrix.in",
    "phone": "+91 98765 43224"
  },
  {
    "id": "vp-sales",
    "name": "Neha Singh",
    "title": "VP Sales & Marketing",
    "reportsTo": "Rajesh Kumar",
    "email": "neha.singh@matrix.in",
    "phone": "+91 98765 43225"
  },
  {
    "id": "sales-mgr1",
    "name": "Manish Agarwal",
    "title": "Sales Director",
    "reportsTo": "Neha Singh",
    "email": "manish.agarwal@matrix.in",
    "phone": "+91 98765 43226"
  },
  {
    "id": "sales1",
    "name": "Riya Kapoor",
    "title": "Account Manager",
    "reportsTo": "Manish Agarwal",
    "email": "riya.kapoor@matrix.in",
    "phone": "+91 98765 43227"
  },
  {
    "id": "sales2",
    "name": "Dhruv Bansal",
    "title": "Sales Executive",
    "reportsTo": "Manish Agarwal",
    "email": "dhruv.bansal@matrix.in",
    "phone": "+91 98765 43228"
  },
  {
    "id": "sales-mgr2",
    "name": "Sunita Desai",
    "title": "Marketing Lead",
    "reportsTo": "Neha Singh",
    "email": "sunita.desai@matrix.in",
    "phone": "+91 98765 43229"
  },
  {
    "id": "sales3",
    "name": "Tara Menon",
    "title": "Marketing Manager",
    "reportsTo": "Sunita Desai",
    "email": "tara.menon@matrix.in",
    "phone": "+91 98765 43230"
  },
  {
    "id": "sales4",
    "name": "Arnav Chopra",
    "title": "Growth Analyst",
    "reportsTo": "Sunita Desai",
    "email": "arnav.chopra@matrix.in",
    "phone": "+91 98765 43231"
  }
];

function initials(name) {
  return name.trim().split(/\s+/).map(n=>n[0]).slice(0,2).join('').toUpperCase();
}

function getRoleClass(title) {
  const t = title.toLowerCase();
  if (t.includes('director')) return 'director';
  if (t.includes('hod') || t.includes('head')) return 'hod';
  if (t.includes('manager') || t.includes('vp') || t.includes('lead')) return 'manager';
  return 'member';
}
function getAvatarClass(title) {
  const c = getRoleClass(title);
  if (c==='director') return 'blue';
  if (c==='hod') return 'green';
  if (c==='manager') return 'orange';
  return 'grey';
}

// Build hierarchy
function buildTree() {
  const map = {};
  flatData.forEach(d => {
    map[d.name] = {...d, children: []};
  });

  // Handle duplicate names - map already deduped
  const roots = [];
  flatData.forEach(d => {
    const node = map[d.name];
    const parentName = d.reportsTo?.trim();
    if (!parentName || parentName.toLowerCase().startsWith('n/a') || parentName.toLowerCase() === 'none') {
      if (!roots.find(r=>r.name===node.name)) roots.push(node);
    } else {
      // Find parent by exact name, else fuzzy
      let parent = map[parentName];
      if (!parent) {
        // try case-insensitive contains
        const foundKey = Object.keys(map).find(k => k.toLowerCase() === parentName.toLowerCase());
        if (foundKey) parent = map[foundKey];
      }
      if (parent && parent.name !== node.name) {
        if (!parent.children.find(c=>c.name===node.name)) parent.children.push(node);
      } else {
        // if parent not found (like Rajesh Kumar missing), treat as root
        if (!roots.find(r=>r.name===node.name)) roots.push(node);
      }
    }
  });

  // If there are orphan nodes whose parent was not in Excel (e.g., Priya Sharma), they are roots currently
  // Let's group top executives together
  return roots;
}

function createCard(node, hasChildren, isCollapsed) {
  const roleClass = getRoleClass(node.title);
  const avatarClass = getAvatarClass(node.title);
  const div = document.createElement('div');
  div.className = `card ${roleClass} ${isCollapsed ? 'collapsed' : ''}`;
  div.dataset.search = `${node.name} ${node.title} ${node.email}`.toLowerCase();
  div.innerHTML = `
    <div class="card-top">
      <div class="avatar ${avatarClass}">${initials(node.name)}</div>
      <div>
        <div class="name">${node.name}</div>
        <div class="job">${node.title}</div>
      </div>
    </div>
    <div class="details">
      <div class="detail">✉️ <a href="mailto:${node.email}" onclick="event.stopPropagation()">${node.email}</a></div>
      <div class="detail">📞 <a href="tel:${node.phone}" onclick="event.stopPropagation()">${node.phone}</a></div>
    </div>
    ${hasChildren ? `<div class="badge ${isCollapsed?'collapsed':''}">${isCollapsed ? '+' + node.children.length : '−' + node.children.length}</div>` : ''}
  `;
  return div;
}

function buildNode(node) {
  const wrap = document.createElement('div');
  wrap.className = 'node';
  const hasChildren = node.children && node.children.length > 0;
  let collapsed = false;

  const card = createCard(node, hasChildren, collapsed);
  wrap.appendChild(card);

  if (hasChildren) {
    const childrenWrap = document.createElement('div');
    childrenWrap.className = 'children-wrap';
    
    const lineDown = document.createElement('div');
    lineDown.className = 'line-down';
    childrenWrap.appendChild(lineDown);

    const childrenDiv = document.createElement('div');
    childrenDiv.className = 'children';

    node.children.forEach(child => {
      const childNode = buildNode(child);
      const upLine = document.createElement('div');
      upLine.className = 'line-up';
      childNode.prepend(upLine);
      childrenDiv.appendChild(childNode);
    });

    childrenWrap.appendChild(childrenDiv);
    wrap.appendChild(childrenWrap);

    card.addEventListener('click', () => {
      collapsed = !collapsed;
      childrenWrap.classList.toggle('hidden-children', collapsed);
      card.classList.toggle('collapsed', collapsed);
      const badge = card.querySelector('.badge');
      if (badge) {
        badge.textContent = collapsed ? '+' + node.children.length : '−' + node.children.length;
        badge.classList.toggle('collapsed', collapsed);
      }
    });
  }
  return wrap;
}

function render() {
  const roots = buildTree();
  const treeEl = document.getElementById('tree');
  treeEl.innerHTML = '';

  // If multiple roots (Directors), show them in a row
  if (roots.length > 1) {
    const directorsRow = document.createElement('div');
    directorsRow.className = 'directors-row';
    roots.forEach(r => {
      const n = buildNode(r);
      directorsRow.appendChild(n);
    });
    treeEl.appendChild(directorsRow);
  } else {
    roots.forEach(r => treeEl.appendChild(buildNode(r)));
  }

  document.getElementById('count').textContent = `${flatData.length} Employees • From Excel • Click card to expand/collapse`;
}

render();

// Search
document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('.card').forEach(c => {
    c.classList.remove('highlight','dimmed');
    if (!q) return;
    const match = c.dataset.search.includes(q);
    if (match) c.classList.add('highlight');
    else c.classList.add('dimmed');
  });
});

// Zoom
let scale = 1;
function applyScale() {
  document.getElementById('tree').style.transform = `scale(${scale})`;
}
function zoomIn() { scale = Math.min(1.6, scale+0.1); applyScale(); }
function zoomOut() { scale = Math.max(0.4, scale-0.1); applyScale(); }
function resetView() { scale=1; applyScale(); document.getElementById('search').value=''; document.querySelectorAll('.card').forEach(c=>c.classList.remove('highlight','dimmed')); }
function expandAll() {
  document.querySelectorAll('.children-wrap.hidden-children').forEach(el=>el.classList.remove('hidden-children'));
  document.querySelectorAll('.card.collapsed').forEach(c=>{ c.classList.remove('collapsed'); const b=c.querySelector('.badge'); if(b){ b.textContent='−'+ (b.textContent.slice(1)||''); b.classList.remove('collapsed'); } });
}

// Expose globally
window.zoomIn = zoomIn;
window.zoomOut = zoomOut;
window.resetView = resetView;
window.expandAll = expandAll;
